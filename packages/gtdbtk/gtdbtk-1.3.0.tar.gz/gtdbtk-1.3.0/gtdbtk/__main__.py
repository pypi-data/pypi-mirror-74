###############################################################################
#                                                                             #
#    This program is free software: you can redistribute it and/or modify     #
#    it under the terms of the GNU General Public License as published by     #
#    the Free Software Foundation, either version 3 of the License, or        #
#    (at your option) any later version.                                      #
#                                                                             #
#    This program is distributed in the hope that it will be useful,          #
#    but WITHOUT ANY WARRANTY; without even the implied warranty of           #
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the            #
#    GNU General Public License for more details.                             #
#                                                                             #
#    You should have received a copy of the GNU General Public License        #
#    along with this program. If not, see <http://www.gnu.org/licenses/>.     #
#                                                                             #
###############################################################################

import argparse
import logging
import sys
import traceback

from gtdbtk import __author__, __copyright__, __version__
from gtdbtk.biolib_lite.custom_help_formatter import CustomHelpFormatter
from gtdbtk.biolib_lite.exceptions import BioLibError
from gtdbtk.biolib_lite.logger import logger_setup
from gtdbtk.config.config import AF_THRESHOLD
from gtdbtk.exceptions import *
from gtdbtk.main import OptionsParser


def print_help():
    print('''\

              ...::: GTDB-Tk v%s :::...

  Workflows:
    classify_wf -> Classify genomes by placement in GTDB reference tree
                     (identify -> align -> classify)
    de_novo_wf  -> Infer de novo tree and decorate with GTDB taxonomy
                     (identify -> align -> infer -> root -> decorate)

  Methods:
    identify -> Identify marker genes in genome
    align    -> Create multiple sequence alignment
    classify -> Determine taxonomic classification of genomes
    infer    -> Infer tree from multiple sequence alignment
    root     -> Root tree using an outgroup
    decorate -> Decorate tree with GTDB taxonomy

  Tools:
    infer_ranks -> Establish taxonomic ranks of internal nodes using RED
    ani_rep     -> Calculates ANI to GTDB representative genomes
    trim_msa    -> Trim an untrimmed MSA file based on a mask
    export_msa  -> Export the untrimmed archaeal or bacterial MSA file

  Testing:
    test          -> Validate the classify_wf pipeline with 3 archaeal genomes 
    check_install -> Verify if all GTDB-Tk data files are present

  Use: gtdbtk <command> -h for command specific help
    ''' % __version__)


def main():
    parser = argparse.ArgumentParser(prog='gtdbtk', add_help=False, conflict_handler='resolve')
    parser.add_argument('-f', '--force', action="store_true", default=False,
                        help="overwrite existing files without prompting.")

    subparsers = parser.add_subparsers(help="--", dest='subparser_name')

    # de novo workflow
    denovo_wf_parser = subparsers.add_parser('de_novo_wf', conflict_handler='resolve',
                                             formatter_class=CustomHelpFormatter,
                                             help='Infer de novo tree and decorate with GTDB taxonomy.')

    mutual_genome_denovo_wf = denovo_wf_parser.add_argument_group('mutually exclusive required arguments')
    mutex_group = mutual_genome_denovo_wf.add_mutually_exclusive_group(required=True)
    mutex_group.add_argument('--genome_dir',
                             help="directory containing genome files in FASTA format")
    mutex_group.add_argument('--batchfile',
                             help="file describing genomes - tab separated in 2 columns (FASTA file, genome ID)")

    mutual_ms_denovo_wf = denovo_wf_parser.add_argument_group('mutually exclusive required arguments')
    mutex_group = mutual_ms_denovo_wf.add_mutually_exclusive_group(required=True)
    mutex_group.add_argument('--bacteria', action='store_true', help='process bacterial genomes')
    mutex_group.add_argument('--archaea', action='store_true', help='process archaeal genomes')

    required_denovo_wf = denovo_wf_parser.add_argument_group('required named arguments')
    required_denovo_wf.add_argument('--outgroup_taxon', required=True,
                                    help="taxon to use as outgroup (e.g., p__Patescibacteria or p__Altiarchaeota)")
    required_denovo_wf.add_argument('--out_dir', required=True,
                                    help="directory to output files")

    optional_denovo_wf = denovo_wf_parser.add_argument_group('optional arguments')
    optional_denovo_wf.add_argument('-x', '--extension', default='fna',
                                    help='extension of files to process, gz = gzipped')

    optional_denovo_wf.add_argument('--skip_gtdb_refs',
                                    action="store_true",
                                    help='do not include GTDB reference genomes in multiple sequence alignment')
    optional_denovo_wf.add_argument('--taxa_filter',
                                    help=('filter GTDB genomes to taxa (comma separated) within '
                                          + 'specific taxonomic groups (e.g., d__Bacteria '
                                          + 'or p__Proteobacteria, p__Actinobacteria)'))
    optional_denovo_wf.add_argument('--min_perc_aa', type=float, default=10,
                                    help='filter genomes with an insufficient percentage of AA in the MSA (inclusive bound)')
    optional_denovo_wf.add_argument('--custom_msa_filters', action="store_true",
                                    help=('perform custom filtering of MSA with cols_per_gene, min_consensus '
                                          + 'max_consensus, and min_perc_taxa parameters instead of using canonical mask'))
    optional_denovo_wf.add_argument('--cols_per_gene', type=int, default=42,
                                    help='maximum number of columns to retain per gene')
    optional_denovo_wf.add_argument('--min_consensus', type=float, default=25,
                                    help='minimum percentage of the same amino acid required to retain column (inclusive bound)')
    optional_denovo_wf.add_argument('--max_consensus', type=float, default=95,
                                    help='maximum percentage of the same amino acid required to retain column (exclusive bound)')
    optional_denovo_wf.add_argument('--min_perc_taxa', type=float, default=50,
                                    help='minimum percentage of taxa required to retain column (inclusive bound)')
    optional_denovo_wf.add_argument('--rnd_seed', type=int, default=None,
                                    help='random seed to use for selecting columns')

    optional_denovo_wf.add_argument('--prot_model', choices=['JTT', 'WAG', 'LG'],
                                    help='protein substitution model for tree inference', default='WAG')
    optional_denovo_wf.add_argument('--no_support', action="store_true",
                                    help="do not compute local support values using the Shimodaira-Hasegawa test")
    optional_denovo_wf.add_argument('--gamma', action="store_true",
                                    help="rescale branch lengths to optimize the Gamma20 likelihood")

    optional_denovo_wf.add_argument('--gtdbtk_classification_file',
                                    help="file with GTDB-Tk classifications produced by the `classify` command")
    optional_denovo_wf.add_argument('--custom_taxonomy_file',
                                    help="file indicating custom taxonomy string for at least the genomes belonging to the outgroup")

    optional_denovo_wf.add_argument('--prefix', default='gtdbtk',
                                    help='desired prefix for output files')
    optional_denovo_wf.add_argument('--cpus', default=1, type=int,
                                    help='number of CPUs to use')
    optional_denovo_wf.add_argument('--force', action='store_const', const=True, default=False,
                                    help='continue processing if an error occurs on a single genome')
    optional_denovo_wf.add_argument('--debug', action="store_true",
                                    help='create intermediate files for debugging purposes')
    optional_denovo_wf.add_argument('-h', '--help', action="help",
                                    help="show help message")

    # classify workflow
    classify_wf_parser = subparsers.add_parser('classify_wf', conflict_handler='resolve',
                                               formatter_class=CustomHelpFormatter,
                                               help='Classify genomes by placement in GTDB reference tree.')

    mutual_genome_classify_wf = classify_wf_parser.add_argument_group('mutually exclusive required arguments')
    mutex_group = mutual_genome_classify_wf.add_mutually_exclusive_group(required=True)
    mutex_group.add_argument('--genome_dir',
                             help="directory containing genome files in FASTA format")
    mutex_group.add_argument('--batchfile',
                             help="file describing genomes - tab separated in 3 columns (FASTA file, genome ID, translation table [optional])")

    required_classify_wf = classify_wf_parser.add_argument_group('required named arguments')
    required_classify_wf.add_argument('--out_dir', required=True,
                                      help="directory to output files")

    optional_classify_wf = classify_wf_parser.add_argument_group('optional arguments')
    optional_classify_wf.add_argument('-x', '--extension', default='fna',
                                      help='extension of files to process, gz = gzipped')
    optional_classify_wf.add_argument('--min_perc_aa', type=float, default=10,
                                      help='filter genomes with an insufficient percentage of AA in the MSA')
    optional_classify_wf.add_argument('--prefix', required=False, default='gtdbtk',
                                      help='desired prefix for output files')
    optional_classify_wf.add_argument('--cpus', default=1, type=int,
                                      help='number of CPUs to use')
    optional_classify_wf.add_argument('--pplacer_cpus', type=int, default=None,
                                      help='use PPLACER_CPUS during placement (default: CPUS)')
    optional_classify_wf.add_argument('--force', action='store_const', const=True, default=False,
                                      help='continue processing if an error occurs on a single genome')
    optional_classify_wf.add_argument('--scratch_dir', help='Reduce memory usage by writing to disk (slower).')
    optional_classify_wf.add_argument('-r', '--recalculate_red', action='store_true',
                                      help='recalculate RED values based on the reference tree and all added user genomes')
    # optional_classify_wf.add_argument('-s', '--split_tree', action='store_true',
    #                                   help='Use shards of the reference tree (for Bacteria only). reduce memory usage (slower).')
    optional_classify_wf.add_argument('-d', '--debug', action="store_true",
                                      help='create intermediate files for debugging purposes')
    optional_classify_wf.add_argument('-h', '--help', action="help",
                                      help="show help message")

    # identify marker genes in genomes
    identify_parser = subparsers.add_parser('identify', conflict_handler='resolve',
                                            formatter_class=CustomHelpFormatter,
                                            help='Identify marker genes in genome.')

    mutex_identify = identify_parser.add_argument_group('mutually exclusive required arguments')
    mutex_group = mutex_identify.add_mutually_exclusive_group(required=True)
    mutex_group.add_argument('--genome_dir',
                             help="directory containing genome files in FASTA format")
    mutex_group.add_argument('--batchfile',
                             help="file describing genomes - tab separated in 3 columns (FASTA file, genome ID, translation table [optional])")

    required_identify = identify_parser.add_argument_group('required named arguments')
    required_identify.add_argument('--out_dir', required=True,
                                   help="directory to output files")

    optional_identify = identify_parser.add_argument_group('optional arguments')
    optional_identify.add_argument('-x', '--extension', default='fna',
                                   help='extension of files to process, gz = gzipped')
    optional_identify.add_argument('--prefix', default='gtdbtk',
                                   help='desired prefix for output files')
    optional_identify.add_argument('--cpus', default=1, type=int,
                                   help='number of CPUs to use')
    optional_identify.add_argument('--force', action='store_const', const=True, default=False,
                                   help='continue processing if an error occurs on a single genome')
    optional_identify.add_argument('-h', '--help', action="help",
                                   help="show help message")

    # create multiple sequence alignment
    align_parser = subparsers.add_parser('align', conflict_handler='resolve',
                                         formatter_class=CustomHelpFormatter,
                                         help='Create multiple sequence alignment.', )

    required_align = align_parser.add_argument_group('required named arguments')
    required_align.add_argument('--identify_dir', required=True,
                                help="output directory of 'identify' command")
    required_align.add_argument('--out_dir', required=True,
                                help='directory to output files')

    optional_align = align_parser.add_argument_group('optional arguments')
    optional_align.add_argument('--skip_gtdb_refs',
                                action="store_true",
                                help='do not include GTDB reference genomes in multiple sequence alignment')
    optional_align.add_argument('--taxa_filter',
                                help=('filter GTDB genomes to taxa (comma separated) within '
                                      + 'specific taxonomic groups (e.g., d__Bacteria '
                                      + 'or p__Proteobacteria, p__Actinobacteria)'))
    optional_align.add_argument('--min_perc_aa', type=float, default=10,
                                help='filter genomes with an insufficient percentage of AA in the MSA (inclusive bound)')

    mutual_genome_align = align_parser.add_argument_group('mutually exclusive optional arguments')
    mutex_align_group = mutual_genome_align.add_mutually_exclusive_group()
    mutex_align_group.add_argument('--custom_msa_filters', action="store_true",
                                   help=('perform custom filtering of MSA with cols_per_gene, min_consensus '
                                         + 'max_consensus, and min_perc_taxa parameters instead of using canonical mask'))
    mutex_align_group.add_argument('--skip_trimming', action="store_true", default=False,
                                   help='skip trimming step and return the full MSAs')

    optional_align.add_argument('--cols_per_gene', type=int, default=42,
                                help='maximum number of columns to retain per gene')
    optional_align.add_argument('--min_consensus', type=float, default=25,
                                help='minimum percentage of the same amino acid required to retain column (inclusive bound)')
    optional_align.add_argument('--max_consensus', type=float, default=95,
                                help='maximum percentage of the same amino acid required to retain column (exclusive bound)')
    optional_align.add_argument('--min_perc_taxa', type=float, default=50,
                                help='minimum percentage of taxa required to retain column (inclusive bound)')
    optional_align.add_argument('--rnd_seed', type=int, default=None,
                                help='random seed to use for selecting columns')
    optional_align.add_argument('--prefix', required=False, default='gtdbtk',
                                help='desired prefix for output files')
    optional_align.add_argument('--cpus', default=1, type=int,
                                help='number of CPUs to use')
    optional_align.add_argument('--debug', action="store_true",
                                help='create intermediate files for debugging purposes')
    optional_align.add_argument('-h', '--help', action="help",
                                help="show help message")

    # infer tree
    infer_parser = subparsers.add_parser('infer', conflict_handler='resolve',
                                         formatter_class=CustomHelpFormatter,
                                         help='Infer tree from multiple sequence alignment.', )

    required_infer = infer_parser.add_argument_group('required named arguments')
    required_infer.add_argument('--msa_file', required=True,
                                help="multiple sequence alignment in FASTA format")
    required_infer.add_argument('--out_dir', required=True,
                                help='directory to output files')

    optional_infer = infer_parser.add_argument_group('optional arguments')
    optional_infer.add_argument('--prot_model', choices=['JTT', 'WAG', 'LG'],
                                help='protein substitution model for tree inference', default='WAG')
    optional_infer.add_argument('--no_support', action="store_true",
                                help="do not compute local support values using the Shimodaira-Hasegawa test")
    optional_infer.add_argument('--gamma', action="store_true",
                                help="rescale branch lengths to optimize the Gamma20 likelihood")
    optional_infer.add_argument('--prefix', required=False, default='gtdbtk',
                                help='desired prefix for output files')
    optional_infer.add_argument('--cpus', default=1, type=int,
                                help='number of CPUs to use')
    optional_infer.add_argument('-h', '--help', action="help",
                                help="show help message")

    # classify genomes via placement with pplacer
    classify_parser = subparsers.add_parser('classify', conflict_handler='resolve',
                                            formatter_class=CustomHelpFormatter,
                                            help='Determine taxonomic classification of genomes.', )

    mutual_genome_classify = classify_parser.add_argument_group('mutually exclusive required arguments')
    mutex_group = mutual_genome_classify.add_mutually_exclusive_group(required=True)
    mutex_group.add_argument('--genome_dir',
                             help="directory containing genome files in FASTA format")
    mutex_group.add_argument('--batchfile',
                             help="file describing genomes - tab separated in 2 columns (FASTA file, genome ID)")

    required_classify = classify_parser.add_argument_group('required named arguments')
    required_classify.add_argument('--align_dir', required=True,
                                   help="output directory of 'align' command")
    required_classify.add_argument('--out_dir', required=True,
                                   help='directory to output files')

    optional_classify = classify_parser.add_argument_group('optional arguments')
    optional_classify.add_argument('-x', '--extension', default='fna',
                                   help='extension of files to process, gz = gzipped')
    optional_classify.add_argument('--prefix', required=False, default='gtdbtk',
                                   help='desired prefix for output files')
    optional_classify.add_argument('--cpus', default=1, type=int,
                                   help='number of CPUs to use')
    optional_classify.add_argument('--pplacer_cpus', type=int, default=None,
                                   help='use PPLACER_CPUS during placement (default: CPUS)')
    optional_classify.add_argument('--scratch_dir', help='reduce memory usage by writing to disk (slower)')
    # optional_classify.add_argument('-s', '--split_tree', action='store_true',
    #                                help='Use shards of the reference tree (for Bacteria only). reduce memory usage (slower).')
    optional_classify.add_argument('-r', '--recalculate_red', action='store_true',
                                   help='recalculate RED values based on the reference tree and all added user genomes')

    optional_classify.add_argument('--debug', action="store_true",
                                   help='create intermediate files for debugging purposes')
    optional_classify.add_argument('-h', '--help', action="help",
                                   help="show help message")

    # root tree using outgroup
    root_parser = subparsers.add_parser('root', conflict_handler='resolve',
                                        formatter_class=CustomHelpFormatter,
                                        help='Root tree using an outgroup.', )

    required_root = root_parser.add_argument_group('required named arguments')
    required_root.add_argument('--input_tree', required=True,
                               help="tree to root in Newick format")
    required_root.add_argument('--outgroup_taxon', required=True,
                               help="taxon to use as outgroup (e.g., p__Patescibacteria or p__Altiarchaeota)")
    required_root.add_argument('--output_tree', required=True,
                               help='output tree')

    optional_root = root_parser.add_argument_group('optional arguments')
    optional_root.add_argument('--gtdbtk_classification_file',
                               help="file with GTDB-Tk classifications produced by the `classify` command")
    optional_root.add_argument('--custom_taxonomy_file',
                               help="file indicating custom taxonomy strings for user genomes, which should contain any genomes belonging to the outgroup")
    optional_root.add_argument('-h', '--help', action="help",
                               help="show help message")

    # decorate tree
    decorate_parser = subparsers.add_parser('decorate', conflict_handler='resolve',
                                            formatter_class=CustomHelpFormatter,
                                            help='Decorate tree with GTDB taxonomy.', )

    required_decorate = decorate_parser.add_argument_group('required named arguments')
    required_decorate.add_argument('--input_tree', required=True,
                                   help="tree to root in Newick format")
    required_decorate.add_argument('--output_tree', required=True,
                                   help='output tree')

    optional_decorate = decorate_parser.add_argument_group('optional arguments')
    optional_decorate.add_argument('--gtdbtk_classification_file',
                                   help="file with GTDB-Tk classifications produced by the `classify` command")
    optional_decorate.add_argument('--custom_taxonomy_file',
                                   help="file indicating custom taxonomy strings for user genomes")
    optional_decorate.add_argument('-h', '--help', action="help",
                                   help="show help message")

    # establish taxonomic ranks of internal nodes using RED
    infer_ranks_parser = subparsers.add_parser('infer_ranks', conflict_handler='resolve',
                                               formatter_class=CustomHelpFormatter,
                                               help='Establish taxonomic ranks of internal nodes using RED.', )

    infer_ranks_req = infer_ranks_parser.add_argument_group('required named arguments')
    infer_ranks_req.add_argument('--input_tree', required=True,
                                 help="rooted input tree with labelled ingroup taxon")
    infer_ranks_req.add_argument('--ingroup_taxon', required=True,
                                 help="labelled ingroup taxon to use as root for establish RED values (e.g., c__Bacilli or f__Lactobacillaceae")
    infer_ranks_req.add_argument('--output_tree', required=True,
                                 help="output tree")

    infer_ranks_opt = infer_ranks_parser.add_argument_group('optional arguments')
    infer_ranks_opt.add_argument('-h', '--help', action="help", help="show help message")

    # ani_rep
    ani_rep_parser = subparsers.add_parser('ani_rep', conflict_handler='resolve',
                                           formatter_class=CustomHelpFormatter,
                                           help='Calculates ANI to GTDB representative genomes.', )

    # ani_rep mutex required input genomes
    ani_rep_mutex_genome = ani_rep_parser.add_argument_group('mutually exclusive required arguments')
    ani_rep_mutex_in = ani_rep_mutex_genome.add_mutually_exclusive_group(required=True)
    ani_rep_mutex_in.add_argument('--genome_dir',
                                  help="directory containing genome files in FASTA format")
    ani_rep_mutex_in.add_argument('--batchfile',
                                  help="file describing genomes - tab separated in 2 columns (FASTA file, genome ID)")

    # ani_rep required arguments
    ani_rep_req = ani_rep_parser.add_argument_group('required named arguments')
    ani_rep_req.add_argument('--out_dir', required=True,
                             help="directory to output files")

    # ani_rep mash arguments
    ani_rep_mash = ani_rep_parser.add_argument_group('optional Mash arguments')
    ani_rep_mash.add_argument('--no_mash', action='store_const', const=True, default=False,
                              help='skip pre-filtering using MASH')
    ani_rep_mash.add_argument('--mash_k', default=16, type=int, help='k-mer size [1-32]')
    ani_rep_mash.add_argument('--mash_s', default=5000, type=int, help='maximum number of non-redundant hashes')
    ani_rep_mash.add_argument('--mash_d', default=0.1, type=float, help='maximum distance to keep [0-1]')
    ani_rep_mash.add_argument('--mash_v', default=1.0, type=float, help='maximum p-value to keep [0-1]')

    ani_rep_fastani_opt = ani_rep_parser.add_argument_group('optional FastANI arguments')
    ani_rep_fastani_opt.add_argument('--min_af', default=AF_THRESHOLD, type=float,
                                     help='alignment fraction to consider closest genome')

    # ani_rep optional arguments
    ani_rep_opt = ani_rep_parser.add_argument_group('optional arguments')

    ani_rep_opt.add_argument('-x', '--extension', default='fna',
                             help='extension of files to process, gz = gzipped')
    ani_rep_opt.add_argument('--prefix', default='gtdbtk',
                             help='desired prefix for output files')
    ani_rep_opt.add_argument('--cpus', default=1, type=int, help='number of CPUs to use')
    ani_rep_opt.add_argument('-h', '--help', action="help", help="show help message")

    # test
    test_parser = subparsers.add_parser('test', conflict_handler='resolve',
                                        formatter_class=CustomHelpFormatter,
                                        help='Test the classify_wf pipeline with 3 archaeal genomes.')
    required_test = test_parser.add_argument_group('required named arguments')
    required_test.add_argument('--out_dir', required=True,
                               help='directory to output files')
    optional_test = test_parser.add_argument_group('optional arguments')
    optional_test.add_argument('--cpus', default=1, type=int,
                               help='number of CPUs to use')
    optional_test.add_argument('-h', '--help', action="help",
                               help="show help message")

    # trim MSA
    msa_parser = subparsers.add_parser('trim_msa', conflict_handler='resolve',
                                       formatter_class=CustomHelpFormatter,
                                       help='Trim an untrimmed MSA file based on a mask.', )

    required_msa = msa_parser.add_argument_group('required named arguments')
    required_msa.add_argument('--untrimmed_msa', required=True,
                              help="untrimmed MSA file")
    required_msa.add_argument('--output', required=True,
                              help='output file')
    mutual_trim_msa = msa_parser.add_argument_group('mutually exclusive required arguments')
    mutex_msa_group = mutual_trim_msa.add_mutually_exclusive_group(required=True)
    mutex_msa_group.add_argument('--mask_file',
                                 help="mask file to use for trimming the MSA")
    mutex_msa_group.add_argument('--reference_mask',
                                 choices=['arc', 'bac'],
                                 help="reference mask already present in GTDB-Tk")

    optional_msa = msa_parser.add_argument_group('optional arguments')
    optional_msa.add_argument('-h', '--help', action="help",
                              help="show help message")

    # export msa
    export_msa_parser = subparsers.add_parser('export_msa', conflict_handler='resolve',
                                              formatter_class=CustomHelpFormatter,
                                              help='Export the untrimmed archaeal or bacterial MSA file.', )
    required_export_msa = export_msa_parser.add_argument_group('required named arguments')
    required_export_msa.add_argument('--domain', required=True, choices=['arc', 'bac'],
                                     help="select domain to download")
    required_export_msa.add_argument('--output', required=True,
                                     help='output file')
    optional_export_msa = export_msa_parser.add_argument_group('optional arguments')
    optional_export_msa.add_argument('-h', '--help', action="help",
                                     help="show help message")

    # verify install
    check_install_parser = subparsers.add_parser('check_install', conflict_handler='resolve',
                                                 formatter_class=CustomHelpFormatter,
                                                 help='Verify if all gtdb data files are present to run GTDB-Tk.', )
    optional_check_install = check_install_parser.add_argument_group('optional arguments')
    optional_check_install.add_argument('-h', '--help', action="help",
                                        help="show help message")

    # -------------------------------------------------
    # get and check options
    args = None
    if len(sys.argv) == 1:
        print_help()
        sys.exit(0)
    elif sys.argv[1] in {'-v', '--v', '-version', '--version'}:
        print("gtdbtk: version %s %s %s" % (__version__,
                                            __copyright__,
                                            __author__))
        sys.exit(0)
    elif sys.argv[1] in {'-h', '--h', '-help', '--help'}:
        print_help()
        sys.exit(0)
    else:
        args = parser.parse_args()

    # setup logger
    logger_setup(args.out_dir if hasattr(args, 'out_dir') else None,
                 "gtdbtk.log", "GTDB-Tk", __version__, False,
                 hasattr(args, 'debug') and args.debug)
    logger = logging.getLogger('timestamp')

    # -------------------------------------------------
    # do what we came here to do
    try:
        gt_parser = OptionsParser(__version__)
        if False:
            import cProfile

            cProfile.run('gt_parser.parseOptions(args)', 'prof')
        else:
            gt_parser.parse_options(args)
    except SystemExit:
        sys.stdout.write('\n')
        sys.stdout.flush()
        logger.error('Controlled exit resulting from early termination.')
        sys.exit(1)
    except KeyboardInterrupt:
        sys.stdout.write('\n')
        sys.stdout.flush()
        logger.error('Controlled exit resulting from interrupt signal.')
        sys.exit(1)
    except GTDBTkExit as e:
        sys.stdout.write('\n')
        sys.stdout.flush()
        if len(str(e)) > 0:
            logger.error('{}'.format(e))
        logger.error('Controlled exit resulting from an unrecoverable error or warning.')
        sys.exit(1)
    except (GTDBTkException, BioLibError) as e:
        sys.stdout.write('\n')
        sys.stdout.flush()
        msg = 'Controlled exit resulting from an unrecoverable error or warning.\n\n'
        msg += '=' * 80 + '\n'
        msg += 'EXCEPTION: {}\n'.format(type(e).__name__)
        msg += '  MESSAGE: {}\n'.format(e)
        msg += '_' * 80 + '\n\n'
        msg += traceback.format_exc()
        msg += '=' * 80
        logger.error(msg)
        sys.exit(1)
    except Exception as e:
        sys.stdout.write('\n')
        sys.stdout.flush()
        msg = 'Uncontrolled exit resulting from an unexpected error.\n\n'
        msg += '=' * 80 + '\n'
        msg += 'EXCEPTION: {}\n'.format(type(e).__name__)
        msg += '  MESSAGE: {}\n'.format(e)
        msg += '_' * 80 + '\n\n'
        msg += traceback.format_exc()
        msg += '=' * 80
        logger.error(msg)
        sys.exit(1)


if __name__ == '__main__':
    main()
