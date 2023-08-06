import os
import sys

from app.drivers.options import psmtable_options
from app.drivers.base import PSMDriver

from app.readers import tsv as tsvreader
from app.readers import mzidplus as mzidreader
from app.dataformats import mzidtsv as psmhead

from app.actions.psmtable import splitmerge as splitmerge
from app.actions.psmtable import refine as refine
from app.actions.psmtable import percolator as perco
from app.actions.psmtable import filter_confidence as filtconf
from app.actions.psmtable import isosummarize

from app.dataformats import prottable as prottabledata

from app.writers import tsv as writer


class TSVConcatenateDriver(PSMDriver):
    """Concatenates TSVs, takes care of headers"""
    outsuffix = '_concat.tsv'
    command = 'concat'
    commandhelp = ('Merges multiple TSV tables of MSGF+ output.'
                   'Make sure headers are same in all files.')

    def set_options(self):
        super().set_options()
        self.options.update(self.define_options(['multifiles'],
                                                psmtable_options))

    def prepare(self):
        # do not read PSMs, multiple files passed and they will be checked
        # if headers matched
        self.first_infile = self.fn[0]
        self.oldheader = tsvreader.get_tsv_header(self.first_infile)

    def set_features(self):
        self.header = self.oldheader
        self.psms = splitmerge.merge_mzidtsvs(self.fn, self.header)


class TSVSplitDriver(PSMDriver):
    """Splits MSGF PSM table on contents of certain column. Each
    row in file is piped to an output file. Which output files
    the row is written to depends on the contents of the selected
    column"""
    outsuffix = '_split.tsv'
    command = 'split'
    commandhelp = 'Splits an MSGF TSV PSM table into multiple new tables'

    def set_options(self):
        super().set_options()
        options = self.define_options(['splitcol'], psmtable_options)
        self.options.update(options)

    def set_features(self):
        self.header = self.oldheader[:]
        splitfield = splitmerge.get_splitfield(self.oldheader, self.splitcol)
        self.psms = splitmerge.generate_psms_split(self.oldpsms, splitfield)

    def write(self):
        base_outfile = os.path.join(self.outdir, '{}.tsv')
        writer.write_multi_mzidtsv(self.header, self.oldheader, self.psms,
                                    base_outfile)


class Perco2PSMDriver(PSMDriver):
    """
    Adds percolator data from mzid file to table.
    """
    outsuffix = '_fdr.tsv'
    command = 'perco2psm'
    commandhelp = (
            'Calculates FDR from percolator output and adds FDR and percolator '
            ' to the corresponding TSV PSM tables. FDR calculation method is TD-'
            'competition.'
            )

    def set_options(self):
        super().set_options()
        self.options.update(self.define_options(['multifiles', 'mzidfns', 'percofn',
            'filtpep', 'filtpsm'], psmtable_options))

    def prepare(self):
        # multiple PSM tables passed so do not read here, match with mzid
        pass

    def set_features(self):
        self.percopsms = perco.calculate_target_decoy_competition(self.percofn)
                
    def write(self):
        for psmfn, mzidfn in zip(self.fn, self.mzidfns):
            oldheader = tsvreader.get_tsv_header(psmfn)
            header = perco.get_header_with_percolator(oldheader)
            outfn = self.create_outfilepath(psmfn, self.outsuffix)
            mzns = mzidreader.get_mzid_namespace(mzidfn)
            mzidsr = mzidreader.mzid_spec_result_generator(mzidfn, mzns)
            psms = tsvreader.generate_tsv_psms(psmfn, oldheader)
            psms_perco = perco.add_fdr_to_mzidtsv(psms, mzidsr, mzns,
                    self.percopsms)
            if self.filtpsm:
                psms_perco = filtconf.filter_psms(psms_perco, psmhead.HEADER_PSMQ,
                        self.filtpsm, True)
            if self.filtpep:
                psms_perco = filtconf.filter_psms(psms_perco, psmhead.HEADER_PEPTIDE_Q,
                        self.filtpep, True)
            writer.write_tsv(header, psms_perco, outfn)


class ConfidenceFilterDriver(PSMDriver):
    outsuffix = '_filtconf.txt'
    command = 'conffilt'
    commandhelp = 'Filters PSMs by their confidence level. '

    def set_options(self):
        super().set_options()
        options = self.define_options(['confcol', 'confpattern', 'conflvl',
                                       'conftype', 'unroll'], psmtable_options)
        self.options.update(options)

    def parse_input(self, **kwargs):
        super().parse_input(**kwargs)
        self.lowerbetter = self.conftype == 'lower'

    def set_features(self):
        self.header = self.oldheader[:]
        if self.confpattern:
            confkey = tsvreader.get_cols_in_file(self.confpattern,
                                                 self.header, True)
        elif self.confcol:
            confkey = self.header[int(self.confcol) - 1]
        else:
            print('Must define either --confcol or --confcolpattern')
            sys.exit(1)
        self.psms = filtconf.filter_psms(self.oldpsms,
                                       confkey,
                                       self.conflvl,
                                       self.lowerbetter)


class PSMTableRefineDriver(PSMDriver):
    # gene, quant, pg, spectra
    outsuffix = '_refined.txt'
    lookuptype = 'psm'
    command = 'psmtable'
    commandhelp = ('Add column to mzidtsv with gene names or symbols, '
                   'which are stored in a lookup specified with --dbfile')

    def set_options(self):
        super().set_options()
        options = self.define_options(['lookupfn', 'precursor', 'isobaric',
            'unroll', 'spectracol', 'addbioset', 'addmiscleav', 'genes',
            'proteingroup', 'fasta', 'genefield', 'fastadelim'], psmtable_options)
        self.options.update(options)

    def set_features(self):
        """Creates iterator to write to new tsv. Contains input tsv
        lines plus quant data for these."""
        # First prepare the data, read PSM table to SQLite
        specfncolnr = int(self.spectracol) - 1
        specfncol = self.oldheader[specfncolnr]
        fastadelim, genefield = self.get_fastadelim_genefield(self.fastadelim,
                                                              self.genefield)
        if self.proteingroup and not self.fasta:
            print('Cannot create protein group without supplying FASTA search '
                    'database file')
            sys.exit(1)
        elif self.proteingroup:
            self.tabletypes.append('proteingroup')
        self.lookup.add_tables(self.tabletypes)
        refine.create_psm_lookup(self.fn, self.fasta, self.oldheader, self.lookup, 
                self.unroll, specfncol, fastadelim, genefield)
        isob_header = [x[0] for x in self.lookup.get_all_quantmaps()] if self.isobaric else False
        self.header = refine.create_header(self.oldheader, self.genes, 
                self.proteingroup, self.precursor, isob_header, self.addbioset, 
                self.addmiscleav, specfncolnr)
        psms = self.oldpsms
        # Now pass PSMs through multiple generators to add info
        if self.genes:
            psms = refine.add_genes_to_psm_table(psms, self.lookup)
        if self.proteingroup:
            refine.build_proteingroup_db(self.lookup)
            psms = refine.generate_psms_with_proteingroups(psms, self.lookup, self.unroll)
        if self.isobaric or self.precursor:
            psms = refine.generate_psms_quanted(self.lookup, psms, isob_header, 
                    self.isobaric, self.precursor)
        self.psms = refine.generate_psms_spectradata(self.lookup, psms, 
                self.addbioset, self.addmiscleav)
        

class IsoSummarizeDriver(PSMDriver):
    outsuffix = '_ratio_isobaric.txt'
    command = 'isosummarize'
    commandhelp = ('Produce isobaric summarized data from a '
                   'PSM table containing raw intensities.')

    def set_options(self):
        super().set_options()
        self.options.update(self.define_options(['quantcolpattern', 'denompatterns',
            'denomcols', 'mediansweep', 'medianintensity', 'median_or_avg',
            'minint', 'featcol'], psmtable_options))

    def set_features(self):
        denomcols = False
        if self.denomcols is not None:
            denomcols = [self.number_to_headerfield(col, self.oldheader)
                         for col in self.denomcols]
        elif self.denompatterns is not None:
            denomcolnrs = [tsvreader.get_columns_by_pattern(self.oldheader, pattern)
                           for pattern in self.denompatterns]
            denomcols = set([col for cols in denomcolnrs for col in cols])
        elif not self.mediansweep and not self.medianintensity:
            raise RuntimeError('Must define either denominator column numbers '
                               'or regex pattterns to find them')
        quantcols = tsvreader.get_columns_by_pattern(self.oldheader,
                                               self.quantcolpattern)
        nopsms = [isosummarize.get_no_psms_field(qf) for qf in quantcols]
        if self.featcol:
            self.get_column_header_for_number(['featcol'], self.oldheader)
            self.header = [self.featcol] + quantcols + nopsms
        else:
            self.header = (self.oldheader +
                           ['ratio_{}'.format(x) for x in quantcols])
        self.psms = isosummarize.get_isobaric_ratios(self.fn, self.oldheader,
                quantcols, denomcols, self.mediansweep, self.medianintensity,
                self.median_or_avg, self.minint, False, False, self.featcol)
