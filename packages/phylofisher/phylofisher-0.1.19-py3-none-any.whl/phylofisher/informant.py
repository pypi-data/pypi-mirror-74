#!/usr/bin/env python
import glob
from collections import defaultdict
import pandas as pd
from Bio import SeqIO
import numpy as np
import configparser
from pathlib import Path
import os
import sys
import textwrap
from phylofisher import help_formatter, subset_tools


def collect_names(files):
    """
    Collect all short names. Collest information about 'route'
    for newly added sequences (BBH, SBH, HMM).
    input: fasta files with genes (from fisher)
    return: set of sorted shortnames; dictionary with genes 
    as a keys and deeper level dictionaries with shortnames of organisms 
    as keys and BBH or SBH or HMM as values
    """
    names = set()
    routes = defaultdict(dict)
    for file in files:
        gene_name = file.split('/')[-1].split('.')[0]
        for record in SeqIO.parse(file, 'fasta'):
            if record.name.count('_') >= 3:
                name = record.name.split('_')[0]
                route = record.name.split('_')[2]
                routes[gene_name][name] = route
            elif '_' in record.name:
                name = record.name.split('_')[0]
            else:
                name = record.name
            names.add(name)
    return sorted(list(names)), routes


def get_gene_column(gene, names):
    """
    Collect information about number of gene variants for all organisms.
    input: fasta file for a given gene
    return:  pd.Series with information about present(>0)/absence(0) of a gene
    for all organisms. 
    example: Albugo: 3, Naegr: 0, ...
    """
    gene_name = gene.split('/')[-1].split('.')[0]
    column = pd.Series(np.zeros(len(names)), index=names, name=gene_name)
    for record in SeqIO.parse(gene, "fasta"):
        if "_" in record.name:
            org = record.name.split('_')[0]
        else:
            org = record.name
        column[org] += 1
    return column.astype(int)


def make_table(folder):
    """
    Collect information about all genes as pd.Series and organize them
    into pd.DataFrame
    input: fodler with genes in fasta format
    return: pd.DataFrame with genes; dictionary with information about
    'routes' used for sequence selection (BBH, SBH, HMM)
    """
    genes = [gene for gene in glob.glob(f'{folder}/*.fas') if os.path.isfile(gene)]
    names, routes = collect_names(genes)
    columns = []
    for gene in genes:
        columns.append(get_gene_column(gene, names))
    df = pd.DataFrame(columns)
    df = df.transpose()
    df = df.reindex(sorted(df.columns), axis=1)  # comment me
    return df, routes


def table_with_routes(df, routes):
    """Create occupancy table and add information about routes used for sequence
    selection (BBH, SBH, HMM) to input dataframe
    input: pd.DataFrame with information about all genes (present(>0)/absent(0)) 
    for all organisms, dictionary with routes for all sequences
    output: modifiend input dataframe with information about route
    """
    full_names = []
    high_tax_list = []
    low_tax_list = []
    for org in in_taxa_dict.keys():
        group, subtax, long_name = in_taxa_dict[org]
        high_tax_list.append(group)
        low_tax_list.append(subtax)
        full_names.append(long_name)

    df = df.loc[in_taxa_dict.keys()]
    df.index.name = 'Unique ID'
    df.insert(loc=0, column='Lower Taxonomy', value=low_tax_list)
    df.insert(loc=0, column='Higher Taxonomy', value=high_tax_list)
    df.insert(loc=0, column='Full Name', value=full_names)

    df.to_csv(f'{output_fold}/occupancy.csv')

    # Adds routes to df
    for gene in df.columns:
        df[gene] = df[gene].apply(str)
        for org in df[gene].index:
            if org in routes[gene]:
                df.at[org, gene] = f'{df[gene][org]}_{routes[gene][org]}'

    df.to_csv(f'{output_fold}/occupancy_with_routes.csv')

    return df


def paralog_orgs():
    """Collect all Unique IDs for organisms with at least one paralog
    in the dataset.
    input: None
    return: set of short names of organisms with at least one paralog
    """
    paralogs = set()
    paralog_fold = os.path.dirname(args.metadata)
    for file in glob.glob(f'{paralog_fold}/paralogs/*.fas'):
        for record in SeqIO.parse(file, 'fasta'):
            paralogs.add(record.name.split('.')[0])
    return paralogs


def stats_orgs_route(table):
    """
    Create csv file with basic summary about analyzed dataset with information
     about used 'routes' (BBH, SBH, HMM) and paralogs.
    input: dataframe
    return: None
    """
    paralogs = paralog_orgs()
    rows = []
    for org in in_taxa_dict.keys():
        group, subtax, long_name = in_taxa_dict[org]
        genes_tot = len(table.columns) - 2  # because org name is the index
        try:
            # subtracting genes with value == 0
            genes = genes_tot - table.loc[org].value_counts()['0']
        except KeyError:
            # why mf? Probably no '0'
            genes = genes_tot
        missing = genes_tot - genes
        missing_perc = (missing / genes_tot) * 100
        sbh = {'SBH': 0, 'BBH': 0, 'HMM': 0}
        for val in res.loc[org].values[2:]:
            if '_' in val:
                route = val.split('_')[1]
                sbh[route] += 1
        para_ava = 'none'
        if org in paralogs:
            para_ava = 'yes'
        rows.append(pd.Series([long_name, group, subtax, genes, missing, missing_perc, sbh['SBH'], sbh['BBH'],
                               sbh['HMM'], 'yes', para_ava],
                              index=["Full Name", "Higher Taxonomy", "Lower Taxonomy",  "#Genes", "#Missing", '%Missing', "#SBH",
                                     "#BBH", "#HMM", "SGT", "paralogs"],
                              name=org))
    df = pd.DataFrame(rows)
    df["#Genes"] = df['#Genes'].astype(int)
    df["#Missing"] = df['#Missing'].astype(int)
    df["%Missing"] = df['%Missing'].round(2)
    df["#SBH"] = df["#SBH"].astype(int)
    df["#BBH"] = df["#BBH"].astype(int)
    df["#HMM"] = df["#HMM"].astype(int)
    df.to_csv(f'{output_fold}/orgs_stats.csv')


def stats_orgs(df):
    """
    Create csv file with basic summary about analyzed dataset without information
    about 'routes' and paralogs.
    input: dataframe
    return: None
    """
    rows = []
    df = df.loc[in_taxa_dict.keys()]
    for org in db_taxa_dict:
        group, subtax, long_name = db_taxa_dict[org]
        genes_tot = len(df.columns) - 2
        try:
            genes = genes_tot - df.loc[org].value_counts()['0']
        except KeyError:
            genes = genes_tot
        missing = genes_tot - genes
        missing_perc = (missing / genes_tot) * 100
        rows.append(pd.Series([long_name, group, subtax, genes, missing, missing_perc, 'yes', 'yes'],
                              index=["Full Name", "Higher Taxonomy", "Lower Taxonomy",  "#Genes", "#Missing", '%Missing', 'Build SGT?', "paralogs"],
                              name=org))
    df = pd.DataFrame(rows)
    df = df.rename_axis('Unique ID')
    df['#Genes'] = df['#Genes'].astype(int)
    df['#Missing'] = df['#Missing'].astype(int)
    df['%Missing'] = df['%Missing'].round(2)
    df.to_csv(f'{output_fold}/db_orgs_stats.csv')


def stats_gene(table):
    """Write basic summary for all genes to a file
    input: dataframe
    return: None
    """
    columns = table.iloc[:, 2:]
    tab_len = len(table)
    with open(f'{output_fold}/genes_stats.csv', 'w') as res:
        res.write(f'gene,total,total[%],SGT\n')
        for i in columns:
            orgs = table[i].value_counts()[0]
            print(table[i].value_counts()[0])
            orgs_perc = (orgs / tab_len) * 100

            res.write(f"{i},{orgs},{orgs_perc.round(2)},yes\n")


if __name__ == '__main__':
    parser, optional, required = help_formatter.initialize_argparse(name='informant.py',
                                                                    desc='some description',
                                                                    usage='informant.py -i input_folder [OPTIONS]')

    # Optional Arguments
    optional.add_argument('--orthologs_only', action='store_true',
                          help=textwrap.dedent("""\
                          Paralogs will NOT be considered.
                              """))
    optional.add_argument('--occupancy_with_routes', action='store_true',
                          help=textwrap.dedent("""\
                          Outputs a CSV file with information regarding the route in which potential 
                          orthologs were determined.
                          """))

    in_help = 'Path to fisher.py output directory'
    args = help_formatter.get_args(parser, optional, required, pre_suf=False, in_help=in_help, out_dir=False)

    config = configparser.ConfigParser()
    config.read('config.ini')
    dfo = str(Path(config['PATHS']['database_folder']).resolve())
    args.input_metadata = os.path.abspath(config['PATHS']['input_file'])
    args.metadata = os.path.join(dfo, 'metadata.tsv')

    output_fold = os.path.basename(os.path.normpath(args.input)) + '/informant_stats'
    if os.path.isdir(output_fold):
        sys.exit(f'Error: {output_fold} folder already exists.')
    else:
        os.mkdir(output_fold)

    db_taxa_dict = subset_tools.parse_metadata(args.metadata)
    in_taxa_dict = subset_tools.parse_metadata(args.input_metadata, input_meta=True)
    all_taxa_dict = {**db_taxa_dict, **in_taxa_dict}

    matrix, routes = make_table(args.input)

    res = table_with_routes(matrix, routes)


    stats_orgs_route(res)
    stats_orgs(matrix)

