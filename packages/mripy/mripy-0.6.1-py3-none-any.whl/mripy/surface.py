    #!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import print_function, division, absolute_import, unicode_literals
import os, shutil, ctypes, multiprocessing
from os import path
from itertools import chain
from scipy import spatial
import numpy as np
from . import six, afni, io, utils, _with_pylab


def map_sequence(seq1, seq2):
    '''
    Generate a mapper from seq1 to seq2, so that seq1[mapper]==seq2,
    i.e, the mapper[k]'s node of seq1 is the k's node of seq2.
    mapper = map_sequence(v2, v1)
    mapper_inv = map_sequence(v1, v2)
    v2m = v2[mapper]
    f2m = mapper_inv[f2]
    assert(all(v2m==v1))
    assert(all(f2m[lexsort(f2m.T)]==f1[lexsort(f1.T)]))
    '''
    assert(seq1.shape[0]==seq2.shape[0])
    indexer1 = np.lexsort(seq1.T) # Don't use `indexer1 = np.argsort(seq1, axis=0)`
    indexer2 = np.lexsort(seq2.T)
    mapper = np.zeros(len(seq1), dtype=int)
    mapper[indexer2] = indexer1
    return mapper


def quadruple_mesh(verts, faces, power=1, mask=None, values=[]):
    '''
    A face will be divided if any of its three nodes are within the mask.
    '''
    if mask is not None:
        mask = set(mask)
    for _ in range(power):
        nv = [v for v in verts]
        nv_parent = {}
        nf = []
        def get_new_vert(n1, n2):
            n_idx = nv_parent.setdefault(tuple(sorted([n1, n2])), len(nv))
            if n_idx == len(nv):
                nv.append((verts[n1]+verts[n2])/2)
            return n_idx
        for f in faces:
            if mask is not None and set(f).isdisjoint(mask):
                # Skip dividing this face
                nf.append(f)
            else: # Divide this face into four new faces
                nv0 = get_new_vert(f[1], f[2])
                nv1 = get_new_vert(f[2], f[0])
                nv2 = get_new_vert(f[0], f[1])
                # The triangle should always list the vertices in a counter-clockwise direction 
                # with respect to an outward pointing surface normal vector [Noah Benson]
                nf.extend([(f[0], nv2, nv1), (nv2, f[1], nv0), (nv1, nv0, f[2]), (nv0, nv1, nv2)])
        verts = nv
        faces = nf
    return np.array(verts), np.array(faces)


def immediate_neighbors(verts, faces, return_array=False):
    '''
    By default, neighbors are represented as a list of sets:
        [set([n00, n01, ...]), set([n10, n11, ...]), ...]
    If return_array=True, a numpy array with a special schema is returned
    to facilitate inter-process memory sharing in multiprocessing:
        [[n_nb0+1, n00, n01, ..., 0, 0], [n_nb1+1, n10, n11, ..., 0, 0], ...] 
    '''
    # neighbors = [np.unique(np.r_[faces[faces[:,0]==idx,1:].ravel(), 
    #     faces[faces[:,1]==idx,::2].ravel(), 
    #     faces[faces[:,2]==idx,:2].ravel()]) for idx in range(verts.shape[0])]
    # The above code is unreasonably slow...
    n_verts = verts.shape[0]
    neighbors = [set() for _ in range(n_verts)] # Don't use [set()]*n_verts
    for face in faces:
        neighbors[face[0]].update(face[1:])
        neighbors[face[1]].update(face[::2])
        neighbors[face[2]].update(face[:2])
    if return_array: # For shared memory parallelism
        n_nb = [len(nbhd) for nbhd in neighbors]
        shared_arr = multiprocessing.Array(ctypes.c_int32, n_verts*(max(n_nb)+1), lock=False)
        arr = np.frombuffer(shared_arr, dtype=np.int32).reshape(n_verts,-1)
        for idx in range(n_verts):
            arr[idx,0] = n_nb[idx] + 1
            arr[idx,1:arr[idx,0]] = list(neighbors[idx])
        neighbors = shared_arr
    return neighbors


def interp_over_mesh(verts, faces, indices, values, radius=3, neighbors=None, n_verts=None):
    '''
    By reusing precomputed neighbors (multiprocessing.Array) and n_verts, 
    one can use inter-process memory sharing to efficiently interpolate multiple dsets in parallel.
    verts and faces are unused in this case.
    '''
    if neighbors is None:
        neighbors = immediate_neighbors(verts, faces)
    if n_verts is None:
        n_verts = verts.shape[0]
    indices_set = set(indices)
    new_val = np.zeros(n_verts)
    if isinstance(neighbors, ctypes.Array): # For shared memory parallelism
        neighbors = np.frombuffer(neighbors, dtype=np.int32).reshape(n_verts,-1)
        for idx in range(n_verts):
            nbhd = set(neighbors[idx,1:neighbors[idx,0]])
            new_nbhd = nbhd
            for _ in range(1, radius):
                ext_nbhd = set()
                for nb in new_nbhd:
                    ext_nbhd.update(neighbors[nb,1:neighbors[nb,0]])
                new_nbhd = ext_nbhd.difference(nbhd)
                nbhd.update(ext_nbhd)
            new_val[idx] = np.mean([values[nb] for nb in nbhd if nb in indices_set])
    else: # neighbors is a list of sets
        for idx in range(n_verts):
            nbhd = neighbors[idx].copy()
            new_nbhd = nbhd
            for _ in range(1, radius):
                ext_nbhd = set()
                for nb in new_nbhd:
                    ext_nbhd.update(neighbors[nb])
                new_nbhd = ext_nbhd.difference(nbhd)
                nbhd.update(ext_nbhd)
            # new_val[idx] = np.mean(values[np.isin(indices, list(nbhd))])
            # The above code is slow again...
            new_val[idx] = np.mean([values[nb] for nb in nbhd if nb in indices_set])
    return new_val


def interp_dset(fdset, fmesh, prefix):
    '''
    `fmesh` can be either:
    - fname for a high density surface mesh
    - (neighbors, n_verts) for using shared memory parallelism
    '''
    indices, values = io.read_niml_bin_nodes(fdset)
    if isinstance(fmesh, six.string_types):
        verts, faces = io.read_surf_mesh(fmesh)
        new_val = interp_over_mesh(verts, faces, indices, values)
    else: # fmesh = (neighbors, n_verts), for shared memory parallelism
        new_val = interp_over_mesh(None, None, indices, values, neighbors=fmesh[0], n_verts=fmesh[1])
    io.write_niml_bin_nodes(utils.fname_with_ext(prefix, '.niml.dset'), np.arange(new_val.shape[0]), new_val)


def compute_faces_norm(verts, faces, F):
    e01 = verts[F[:,1],:] - verts[F[:,0],:]
    e12 = verts[F[:,2],:] - verts[F[:,1],:]
    e01 /= np.linalg.norm(e01, axis=1, keepdims=True)
    e12 /= np.linalg.norm(e12, axis=1, keepdims=True)
    norms = np.cross(e01, e12, axis=1)
    norms /= np.linalg.norm(norms, axis=1, keepdims=True)
    return norms


def surrouding_faces(verts, faces, v):
    return faces[np.any(faces == v, axis=1),:]


def compute_verts_norm(verts, faces, V):
    norms = np.zeros([V.shape[0],3], dtype=verts.dtype)
    for k, v in enumerate(V):
        F = surrouding_faces(verts, faces, v)
        n = compute_faces_norm(verts, faces, F)
        n = np.sum(n, axis=0)
        n /= np.linalg.norm(n)
        norms[k,:] = n
    return norms
    

def compute_verts_area(verts, faces, dtype=None):
    '''
    Compute element area for each vertex.
    '''
    # Compute area for each face triangle
    A = verts[faces[:,0],:]
    B = verts[faces[:,1],:]
    C = verts[faces[:,2],:]
    face_areas = 0.5*np.linalg.norm(np.cross(B-A, C-A), axis=1)
    vert_areas = np.zeros(verts.shape[0], dtype=dtype)
    # Attribtue the face area to each of its three vertices
    # for k, f in enumerate(faces):
    #     vert_areas[f] += face_areas[k]
    # vert_areas /= 3.0
    # The above code with advanced indexing is 2x slower...
    for (a, b, c), x in zip(faces, face_areas/3.0):
        vert_areas[a] += x
        vert_areas[b] += x
        vert_areas[c] += x
    return vert_areas


def smooth_verts_data(verts, faces, data, factor=0.1, n_iters=1, dtype=None):
    for _ in range(n_iters):
        smooth_data = np.zeros(len(data), dtype=dtype)
        counts = np.zeros(len(data), dtype=dtype)
        for a, b, c in faces:
            smooth_data[a] += data[b] + data[c]
            smooth_data[b] += data[c] + data[a]
            smooth_data[c] += data[a] + data[b]
            counts[a] += 2
            counts[b] += 2
            counts[c] += 2
        smooth_data = factor * smooth_data/counts + (1-factor) * data
        data = smooth_data
    return smooth_data


def compute_intermediate_mesh(inner, outer, alpha, method='equivolume', dtype=None):
    alpha = np.array(alpha, dtype=dtype).reshape(-1, 1)
    vin, fin = io.read_surf_mesh(inner, dtype=dtype) if isinstance(inner, six.string_types) else inner
    vout, fout = io.read_surf_mesh(outer, dtype=dtype) if isinstance(outer, six.string_types) else outer
    Ain = compute_verts_area(vin, fin, dtype=dtype)
    Aout = compute_verts_area(vout, fout, dtype=dtype)
    if method in ['equivolume', 'equivolume_inside']:
        smooth_factor = 0.1
        smooth_iters = 2
        Ain = smooth_verts_data(vin, fin, Ain, factor=smooth_factor, n_iters=smooth_iters, dtype=dtype)
        Aout = smooth_verts_data(vout, fout, Aout, factor=smooth_factor, n_iters=smooth_iters, dtype=dtype)
        if method == 'equivolume':
            rho = 1 / (Aout - Ain) * (-Ain + np.sqrt(alpha * Aout**2 + (1-alpha) * Ain**2))
        elif method == 'equivolume_inside':
            rho = alpha + np.zeros(len(Ain), dtype=dtype)
            inside = ((0 <= alpha) & (alpha <= 1)).ravel()
            rho[inside,:] = 1 / (Aout - Ain) * (-Ain + np.sqrt(alpha[inside,:] * Aout**2 + (1-alpha[inside,:]) * Ain**2))
    elif method == 'equidistance':
        rho = alpha
    verts = (1-rho[...,np.newaxis]) * vin + rho[...,np.newaxis] * vout
    faces = fin
    return verts.squeeze(), faces


def compute_voxel_depth(xyz, inner, outer, S2E_mat, method='equivolume', n_jobs=4, dtype=None, lock=None):
    '''
    Parameters
    ----------
    method : str
        "equivolume"
        "equidistance"

    Notes
    -----
    1. Unfortunately, dtype=np.float32 doesn't work for high density surface meshes
       (because the element area becomes zero in some locations, which is invalid). 
       Although it does work for ordinary meshes, it is unnecessary in that case.
    '''
    if isinstance(xyz, six.string_types):
        xyz = io.Mask(xyz, kind='full').xyz
    xyz = xyz.astype(dtype)
    if isinstance(S2E_mat, six.string_types):
        S2E_mat = afni.get_S2E_mat(S2E_mat, mat='S2B')
    S2E_mat = S2E_mat.astype(dtype)
    if method == 'equivolume':
        method = 'equivolume_inside'
    if lock is None:
        lock = multiprocessing.Lock()
    min_depth, max_depth = -0.2, 1.2
    n_depths = round((max_depth - min_depth)/0.1) + 1
    alphas = np.linspace(min_depth, max_depth, n_depths, dtype=dtype)
    print('>> Compute intermediate meshes...')
    verts, faces = compute_intermediate_mesh(inner, outer, alphas, method=method, dtype=dtype) # 234s
    n_faces = faces.shape[0]
    LPI2RAI = np.array([-1, -1, 1], dtype=dtype)
    verts = np.dot(S2E_mat[:,:3], (verts*LPI2RAI).transpose(0,2,1)).transpose(1,2,0) + S2E_mat[:,3]
    face_xyz = (verts[:,faces[:,0],:] + verts[:,faces[:,1],:] + verts[:,faces[:,2],:]).reshape(-1,3) / 3
    print('>> Construct k-d tree...')
    # kdt = spatial.cKDTree(face_xyz.reshape(-1,3)) # 171s
    kdt = spatial.cKDTree(face_xyz) # This is slightly more memory efficient
    depths = utils.SharedMemoryArray.zeros(xyz.shape[0], dtype=dtype, lock=False) # np.zeros(xyz.shape[0])
    print('>> Compute cortical depth...')
    def compute_depth(ids, depths, xyz, kdt, verts, faces, alphas, n_faces, n_depths, min_depth, max_depth):
        for k in ids:
            p = xyz[k]
            # idx = np.argmin(np.linalg.norm(p - face_xyz, axis=-1)) // faces.shape[0]
            idx = kdt.query(p)[1] # This is like 4000x faster!
            fidx = idx % n_faces
            didx = idx // n_faces
            if didx == 0:
                depths[k] = min_depth
            elif didx == n_depths-1:
                depths[k] = max_depth
            else:
                A, B, C = verts[didx-1:didx+2][:,faces[fidx,:],:].swapaxes(0,1)
                N = np.cross(B - A, C - A)
                N = N / np.linalg.norm(N, axis=-1, keepdims=True)
                T = np.sum(A*N, axis=-1) - np.sum(p*N, axis=-1)
                W = np.abs(T)
                if T[0]*T[1] < 0:
                    w = W[1] / (W[0] + W[1])
                    depths[k] = w * alphas[didx-1] + (1-w) * alphas[didx]
                else:
                    w = W[1] / (W[2] + W[1])
                    depths[k] = w * alphas[didx+1] + (1-w) * alphas[didx]
    with lock:
        pc = utils.PooledCaller(pool_size=n_jobs)
        pc(pc.run(compute_depth, ids, depths, xyz, kdt, verts, faces, alphas, n_faces, n_depths, min_depth, max_depth) 
            for ids in pc.idss(len(depths)))
    return depths


def create_lamina_mesh(fname, inner, outer, alpha, method='equivolume'):
    if method == 'equivolume':
        method = 'equivolume_inside'
    verts, faces = compute_intermediate_mesh(inner, outer, alpha, method=method)
    io.write_surf_mesh(fname, verts, faces)


def transform_mesh(transform, in_file, out_file):
    '''
    Parameters
    ----------
    transform : mripy.preprocess.Transform object
    in_file, out_file : surface mesh file name (*.gii or *.asc)
    '''
    verts, faces = io.read_surf_mesh(in_file)
    verts = transform.apply_to_xyz(verts, convention='NIFTI')
    io.write_surf_mesh(out_file, verts, faces)


def transform_suma(transform, suma_dir, out_dir=None):
    '''
    BUG: Only part of the most used surfaces and volumes are transformed.
    '''
    if out_dir is None:
        out_dir = suma_dir + '.al'
    pc = utils.PooledCaller()
    ext = afni.get_surf_type(suma_dir)
    # Copy SUMA files
    print('>> Copy SUMA dir...')
    shutil.copytree(suma_dir, out_dir)
    # Transform anatomical surface meshes
    for surf in ['pial', 'smoothwm', 'white']:
        for hemi in ['lh', 'rh']:
            surf_file = f"{out_dir}/{hemi}.{surf}{ext}"
            if path.exists(surf_file):
                pc.run(transform_mesh, transform, surf_file, surf_file)
    # Transform useful volumes
    surf_vol = afni.get_surf_vol(out_dir)
    pc.run(transform.apply, surf_vol, surf_vol)
    # Transform benson14 volumes if exists
    for dset in ['varea', 'eccen', 'angle', 'sigma']:
        f = f"{out_dir}/benson14_{dset}.nii.gz"
        if path.exists(f):
            pc.run(transform.apply, f, f, interp='NearestNeighbor' if dset=='varea' else None)
    pc.wait()


def dset2roi(f_dset, f_roi=None, colors=None):
    '''
    ROI number starts from 1 (nodes with data==0 are ignored).
    See also: FSread_annot
    '''
    if f_roi is None:
        f_roi = '.'.join(f_dset.split('.')[:-2] + ['1D', 'roi'])
    nodes, data = io.read_niml_bin_nodes(f_dset)
    nodes = nodes[data!=0]
    data = data[data!=0].astype(int)
    if colors is None:
        np.savetxt(f_roi, np.c_[nodes, data], fmt='%d')
    else:
        np.savetxt(f_roi, np.c_[nodes, data, colors[(data-1)%len(colors)]], 
            fmt=['%d', '%d', '%.6f', '%.6f', '%.6f'])


def _surface_calc(expr=None, out_file=None, **kwargs):
    '''
    Different input dsets are allowed to have different nodes coverage.
    Only values on shared nodes are returned or written.
    '''
    variables = {}
    for k, (var, fname) in enumerate(kwargs.items()):
        nodes, values = io.read_surf_data(fname)
        variables[var] = (nodes, values)
        if k == 0:
            shared_nodes = set(nodes)
        else:
            shared_nodes = shared_nodes.intersection(nodes)
    shared_nodes = np.array(sorted(shared_nodes)) # `sorted` is required
    for var, (nodes, values) in variables.items():
        shared = np.in1d(nodes, shared_nodes)
        # A test for surface dataset compatibility (duck typing)
        # TODO: There could be more direct check by looking at the header of the dataset
        assert(np.all(nodes[shared]==shared_nodes)) 
        variables[var] = values[shared]
    v = _with_pylab.pylab_eval(expr, **variables)
    if out_file is not None:
        io.write_surf_data(out_file, shared_nodes, v)
    return shared_nodes, v


def surface_calc(expr=None, out_file=None, **kwargs):
    out_file = afni.infer_surf_dset_variants(out_file)
    kwargs = {k: afni.infer_surf_dset_variants(v) for k, v in kwargs.items()}
    for hemi in ['lh', 'rh']:
        _surface_calc(expr=expr, out_file=out_file[hemi], **{k: v[hemi] for k, v in kwargs.items()})


class SurfMask(object):
    def __init__(self, master):
        if master is not None:
            nodes, values = io.read_surf_data(master)
            self.nodes = nodes[values > 0]

    @classmethod
    def from_expr(cls, expr=None, **kwargs):
        mask = cls(master=None)
        nodes, values = _surface_calc(expr=expr, **kwargs)
        mask.nodes = nodes[values > 0]
        return mask

    def __repr__(self):
        return f"{self.__class__.__name__} ({len(self.nodes)} nodes)"

    def dump(self, fname):
        if isinstance(fname, str):
            fname = [fname]
        values = []
        for f in fname:
            n, v = io.read_surf_data(f)
            assert(np.all(np.in1d(self.nodes, n))) # SurfMask nodes must be covered by dset nodes
            shared = np.in1d(n, self.nodes)
            assert(np.all(n[shared]==self.nodes)) # Make sure nodes order are correspondent
            values.append(v[shared])
        return np.array(values).T.squeeze()


class Surface(object):
    def __init__(self, suma_dir, surf_vol=None):
        self.suma_dir = suma_dir
        self.surf_vol = 'SurfVol_Alnd_Exp.nii' if surf_vol is None else surf_vol
        if not path.exists(self.surf_vol):
            raise ValueError(f'>> Cannot find "{self.surf_vol}" on current directory\n"{os.getcwd()}"')
        self.specs = afni.get_suma_spec(self.suma_dir)
        self.subj = afni.get_suma_subj(self.suma_dir)
        self.surfs = ['pial', 'smoothwm', 'inflated', 'sphere.reg']
        self.hemis = ['lh', 'rh']
        self.surf_ext = afni.get_surf_type(self.suma_dir)
        self.info = {hemi: io.read_surf_info(f"{self.suma_dir}/{hemi}.inflated{self.surf_ext}") for hemi in self.hemis}

    def __repr__(self):
        n_verts = f'{self.info["lh"]["n_verts"]}/{self.info["rh"]["n_verts"]} verts'
        n_faces = f'{self.info["lh"]["n_faces"]}/{self.info["rh"]["n_faces"]} faces'
        return f'<Surface  | {n_verts}, {n_faces}, suma_dir="{self.suma_dir}", \n surf_vol="{self.surf_vol}", surf_ext="{self.surf_ext}">'

    def _get_surf2exp_transform(self, exp_anat):
        pass

    def _get_spherical_coordinates(self, hemi, symmetric=True):
        verts = io.read_surf_mesh(path.join(self.suma_dir, f"{hemi}.sphere.reg{self.surf_ext}"))[0]
        # verts[:,2] sometimes can be greater than 100 or less than -100
        theta = np.arccos(np.maximum(np.minimum(verts[:,2], 100), -100)/100) # Polar (inclination) angle, [0,pi] 
        phi = np.arctan2(verts[:,1], verts[:,0]) # Azimuth angle, (-pi,pi]
        if symmetric and hemi == 'rh':
            phi = -phi + np.pi
            phi[phi>np.pi] -= 2*np.pi
        return theta, phi

    def to_1D_dset(self, prefix, node_values):
        np.savetxt(f"{prefix}.1D.dset", np.c_[np.arange(len(node_values)), node_values], fmt='%.6f')

    def vol2surf(self, in_file, out_file, func='median', depth_range=[0,1], mask_file=None, truncate=True):
        '''
        Parameters
        ----------
        in_file : str, 
            E.g., "beta.nii" or "stats.loc_REML.nii'[L-R#0_Tstat]'".
        out_file : str
            "beta.niml.dset" will automatically generate ["lh.beta.niml.dset", "rh.beta.niml.dset"].
        func : str
            ave, median, max, midpoint, etc.
        mask_file : str
            Volume mask file.
        truncate : bool
            If True, vertices whose value is zero will be omitted in the output surface dataset.
            `surface_calc()` will handle such (partial) surface dataset correctly.
            But if you need to use `3dcalc`, set truncate=False and output all vertices.

        About "-f_index nodes"
        ----------------------
        [1] https://afni.nimh.nih.gov/pub/dist/doc/program_help/3dVol2Surf.html
            When taking the average along one node pair segment using 10 node steps,
            perhaps 3 of those nodes may occupy one particular voxel.  In this case, 
            does the user want the voxel counted only once (-f_index voxels), 
            or 3 times (-f_index nodes)?  Each way makes sense.
        '''
        mask_cmd = f"-cmask {mask_file}" if mask_file is not None else ''
        truncate_cmd = f"-oob_value 0 {'-oom_value 0' if mask_file is not None else ''}" if not truncate else ''
        out_dir, prefix, ext = afni.split_out_file(out_file, split_path=True, trailing_slash=True)
        output_1D = '.1D' in ext
        pc = utils.PooledCaller()
        for hemi in self.hemis:
            fo_niml = f"{out_dir}{hemi}.{prefix}.niml.dset"
            fo_1D = f"{out_dir}{hemi}.{prefix}.1D.dset"
            out_1D_cmd = f"-out_1D {fo_1D}" if output_1D else ''
            pc.run(f"3dVol2Surf \
                -spec {self.specs[hemi]} \
                -surf_A smoothwm \
                -surf_B pial \
                -sv {self.surf_vol} \
                -grid_parent {in_file} \
                {mask_cmd} {truncate_cmd} \
                -map_func {func} \
                -f_steps 20 -f_index nodes \
                -f_p1_fr {depth_range[0]} -f_pn_fr {depth_range[1]-1} \
                -out_niml {fo_niml} {out_1D_cmd} -overwrite", 
                _error_pattern='error', _suppress_warning=True)
        pc.wait()
        return pc._log

    def surf2vol(self, base_file, in_files, out_file, func='median', combine='mean', depth_range=[0,1], mask_file=None):
        '''
        Parameters
        ----------
        in_files : str, list, or dict
            "beta.niml.dset" will be expanded as ["lh.beta.niml.dset", "rh.beta.niml.dset"],
            whereas "lh.beta.niml.dset" will be treated as is.
        func : str
            ave, median, mask2, count, etc.
        combine : str
            l+r, max(l,r), consistent, mean, lh, rh, etc.
        mask_file : str
            Volume mask file.

        About "-f_index nodes"
        ----------------------
        [1] https://afni.nimh.nih.gov/pub/dist/doc/program_help/3dSurf2Vol.html
            Current setting may be preferred if the user wishes to have the average 
            weighted by the number of points occupying a voxel (-f_index nodes), 
            not just the number of node pair segments (-f_index voxels).
        '''
        in_files = afni.infer_surf_dset_variants(in_files, hemis=self.hemis)
        mask_cmd = f"-cmask {mask_file}" if mask_file is not None else ''
        temp_dir = utils.temp_folder()
        pc = utils.PooledCaller()
        for hemi, dset in in_files.items():
            prefix, ext = afni.split_out_file(dset)
            input_cmd = f"-sdata_1D {dset}" if '.1D' in ext else f"-sdata {dset}"
            pc.run(f"3dSurf2Vol \
                -spec {self.specs[hemi]} \
                -surf_A smoothwm \
                -surf_B pial \
                -sv {self.surf_vol} \
                -grid_parent {base_file} \
                {input_cmd} {mask_cmd} \
                -map_func {func} \
                -datum float \
                -f_steps 20 -f_index nodes \
                -f_p1_fr {depth_range[0]} -f_pn_fr {depth_range[1]-1} \
                -prefix {temp_dir}/{hemi}.nii -overwrite", 
                _error_pattern='error', _suppress_warning=True)
        pc.wait()
        if len(in_files) > 1:
            if combine == 'consistent':
                combine_expr = 'notzero(l)*iszero(r)*l+iszero(l)*notzero(r)*r+notzero(l)*notzero(r)*equals(l,r)*l'
            elif combine == 'mean':
                combine_expr = 'notzero(l)*iszero(r)*l+iszero(l)*notzero(r)*r+notzero(l)*notzero(r)*(l+r)/2'
            elif combine == 'lh':
                combine_expr = 'l+iszero(l)*notzero(r)*r'
            elif combine == 'rh':
                combine_expr = 'r+iszero(r)*notzero(l)*l'
            else:
                combine_expr = combine
            pc.run1(f"3dcalc -l {temp_dir}/lh.nii -r {temp_dir}/rh.nii \
                -expr '{combine_expr}' -prefix {out_file} -overwrite")
        else:
            pc.run1(f"3dcopy {temp_dir}/{hemi}.nii {out_file} -overwrite")
        shutil.rmtree(temp_dir)
        return pc._log

    def mask_ribbon(self, in_file, out_file, depth_file=None):
        temp_file = utils.temp_prefix(suffix='.niml.dset')
        pc = utils.PooledCaller()
        _log = self.vol2surf(in_file, temp_file, func='max', depth_range=[0.2, 0.8])
        _log += self.surf2vol(in_file, temp_file, out_file, func='mode') # Round at border
        for hemi in self.hemis:
            os.remove(f"{hemi}.{temp_file}")
        if depth_file is not None:
            pc.run1(f"3dcalc -a {out_file} -d {depth_file} -expr 'a*step(d)*step(1-d)' \
                -prefix {out_file} -overwrite")
        return _log + pc._log


if __name__ == '__main__':
    pass
