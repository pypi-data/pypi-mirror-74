import hgraph
import recovery
import utils
import kmerSetDB
import projector

import os
import uuid
import atexit
import shutil
import textwrap

import time

def _check_finder_constraints(
    seq_list,
    homology,
    allow_internal_repeat,
    vercov_func):
    # Sequence List Legality
    for seq in seq_list:
        if not isinstance(seq, str):
            print ' [ERROR]    Parts in Sequence List must be string, not \'{}\''.format(seq)
            print ' [SOLUTION] Try correcting Lmax\n'
            return False 
    # Lmax Legality 1
    if not isinstance(homology, int):
        print '\n [ERROR]    Lmax must be an integer, not \'{}\''.format(homology-1)
        print ' [SOLUTION] Try correcting Lmax\n'
        return False
    # Lmax Legality 2
    if homology-1 < 5:
        print '\n [ERROR]    Lmax must be greater than 4, not \'{}\''.format(homology-1)
        print ' [SOLUTION] Try correcting Lmax\n'
        return False
    # Internal Repeats Legality
    if not allow_internal_repeat in [True, False]:
        print '\n [ERROR]    Internal Repeat must be boolean, not \'{}\''.format(
            allow_internal_repeat)
        print ' [SOLUTION] Try correcting Internal Repeat\n'
        return False
    # Everything OK
    return True

def _check_finder_arguments(
    vercov_func,
    output_file):
    # Vertex Cover Legality
    if not vercov_func in ['2apx', 'nrpG', 'nrp2']:
        print '\n [ERROR]    Vertex Cover Elimination must be \'2apx\', \'nrpG\', or \'nrp2\' not \'{}\''.format(
            vercov_func)
        print ' [SOLUTION] Try correcting Vertex Cover Elimination\n'
        return False
    # Output File Legality
    if not output_file is None:
        if not isinstance(output_file, str):
            print '\n [ERROR]    Output File must be a string or None, not \'{}\''.format(struct_type)
            print ' [SOLUTION] Try correcting Output File\n'
            return False
    # Everything OK
    return True

def nrp_finder(
    seq_list,
    homology,
    allow_internal_repeat=False,
    background=None,
    vercov_func=None,
    output_file=None,
    verbose=True):

    # Program Verbage
    if verbose:
        print '\n[Non-Repetitive Parts Calculator - Finder Mode]'
    find_parts = True
    seq_list = list(seq_list)

    # Check Finder Constraints
    if verbose:
        print '\n[Checking Constraints]'
        print ' Sequence List   : {} parts'.format(len(seq_list))
        print '          Lmax   : {} bp'.format(homology-1)
        print ' Internal Repeats: {}'.format(allow_internal_repeat)
    check_status = _check_finder_constraints(
        seq_list=seq_list,
        homology=homology,
        allow_internal_repeat=allow_internal_repeat,
        vercov_func=vercov_func)

    if check_status == False:
        if verbose:
            print ' Check Status: FAIL\n'
        find_parts = False
    else:
        if verbose:
            print '\n Check Status: PASS'

    # Background Check
    if find_parts:
        if not background is None:
            if verbose:
                print '\n[Checking Background]\n Background: {}'.format(background)
            if isinstance(background, kmerSetDB.kmerSetDB):
                if background.K != homology:
                    find_parts = False
                    print '\n [ERROR]    Background Lmax is {}, but Constraint Lmax is {}'.format(
                        background.K-1,
                        homology-1)
                    print ' [SOLUTION] Try correcting Lmax\n'
                    if verbose:
                        print ' Check Status: FAIL\n'
                else:
                    if verbose:
                        print '\n Check Status: PASS'

            else:
                find_parts = False
                print '\n [ERROR]    Background Object is INVALID'
                print ' [SOLUTION] Try instantiating background via nrpcalc.background(...)\n'
                if verbose:
                    print ' Check Status : FAIL\n'

    # Arguments Check
    if find_parts:
        if verbose:
            print '\n[Checking Arguments]'
            print '   Vertex Cover: {}'.format(vercov_func)
            print '   Output  File: {}'.format(output_file)
        check_status = _check_finder_arguments(
            vercov_func=vercov_func,
            output_file=output_file)

        if check_status == False:
            if verbose:
                print ' Check Status: FAIL\n'
            find_parts = False
        else:
            if verbose:
                print '\n Check Status: PASS'

    if not find_parts:
        raise RuntimeError('Invalid Constraints, or Background')
    print
    
    # Setup Project
    current_uuid = str(uuid.uuid4())
    projector.setup_proj_dir(current_uuid)
    seq_file   = './{}/seq_list.txt'.format(current_uuid)
    graph_file = './{}/repeat_graph.txt'.format(current_uuid)

    # Build Repeat Graph
    homology_graph = hgraph.get_homology_graph(
        seq_list,
        background,
        homology,
        allow_internal_repeat,
        seq_file,
        verbose)

    # Find Non-Repetitive Subset
    indi_seqs_indx = recovery.get_recovered_non_homologs(
        homology_graph,
        graph_file,
        vercov_func,
        verbose)

    # Prepare Output
    parts_dict = {}
    with open(seq_file, 'r') as infile:
        for line in infile:
            index,seq = line.strip().split(',')
            index = int(index)
            if index in indi_seqs_indx:
                parts_dict[index] = seq

    # Optionally, write output
    if output_file:
        with open(output_file, 'w') as outfile:
            for index,seq in parts_dict.iteritems():
                outfile.write('>index {}\n'.format(index))
                seq_wrap = '\n'.join(textwrap.wrap(seq, 80))
                outfile.write('{}\n'.format(seq_wrap))

    # Cleanups and Return
    projector.remove_proj_dir()
    if verbose:
        print '\nNon-Repetitive Toolbox Size: {}'.format(
            len(parts_dict))
    return parts_dict

def main():
    t0 = time.time()

    # Setup Parameters
    homology = 16
    fasta_filename = 'riboz.fa' #'input.fa.bk104'
    seq_list = utils.get_fasta_seq_list(fasta_filename)
    allow_internal_repeat = False

    # Setup Background
    background = kmerSetDB.kmerSetDB(
        path='./testDB',
        homology=homology,
        verbose=True)
    background.multiadd(utils.get_fasta_seq_list(
        fasta_filename='input.fa'))

    # Find Non-Repetititive Subset
    non_homologs = nrp_finder(
        seq_list,
        homology,
        background,
        allow_internal_repeat,
        verbose=True)

    # Drop Background
    background.drop()

    # Report Time Elapsed
    print '\nWall Time {} sec'.format(time.time()-t0)


if __name__ == '__main__':
    main()
