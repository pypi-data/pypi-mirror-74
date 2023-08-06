# -*- coding: utf-8 -*-
# Cryptoasset accounting, auditing and UK tax calculations (Capital Gains/Income Tax)
# (c) Nano Nano Ltd 2019

import argparse
import io
import sys
import codecs
import platform

from colorama import init, Fore, Back
import xlrd

from .version import __version__
from .config import config
from .import_records import ImportRecords
from .transactions import TransactionHistory
from .audit import AuditRecords
from .price.valueasset import ValueAsset
from .tax import TaxCalculator
from .report import ReportLog, ReportPdf

if sys.stdout.encoding != 'UTF-8':
    if sys.version_info[0] < 3:
        sys.stdout = codecs.getwriter('utf-8')(sys.stdout)
    else:
        sys.stdout.reconfigure(encoding='utf-8')

def main():
    init()
    parser = argparse.ArgumentParser()
    parser.add_argument('filename',
                        type=str,
                        nargs='?',
                        help="filename of transaction records, "
                             "or can read CSV data from standard input")
    parser.add_argument('-v',
                        '--version',
                        action='version',
                        version='%s v%s' % (parser.prog, __version__))
    parser.add_argument('-d',
                        '--debug',
                        action='store_true',
                        help="enabled debug logging")
    parser.add_argument('-ty',
                        '--taxyear',
                        type=int,
                        help="tax year")
    parser.add_argument('-s',
                        '--skipaudit',
                        action='store_true',
                        help="skip auditing of transactions")
    parser.add_argument('--summary',
                        action='store_true',
                        help="only output the capital gains summary in the tax report")
    parser.add_argument('-o',
                        dest='output_filename',
                        type=str,
                        help="specify the output filename for the tax report")
    parser.add_argument('--nopdf',
                        action='store_true',
                        help="don't output pdf report, output report to terminal only")

    config.args = parser.parse_args()
    config.args.nocache = False

    if config.args.debug:
        print("%s%s v%s" % (Fore.YELLOW, parser.prog, __version__))
        print("%spython: v%s" % (Fore.GREEN, platform.python_version()))
        print("%ssystem: %s, release: %s" % (Fore.GREEN, platform.system(), platform.release()))
        config.output_config()

    import_records = ImportRecords()

    if config.args.filename:
        try:
            try:
                import_records.import_excel(config.args.filename)
            except xlrd.XLRDError:
                with io.open(config.args.filename, newline='', encoding='utf-8') as csv_file:
                    import_records.import_csv(csv_file)
        except IOError:
            parser.exit("%sERROR%s File could not be read: %s" % (
                Back.RED+Fore.BLACK, Back.RESET+Fore.RED, config.args.filename))
    else:
        if sys.version_info[0] < 3:
            import_records.import_csv(codecs.getreader('utf-8')(sys.stdin))
        else:
            import_records.import_csv(sys.stdin)

    print("%simport %s (success=%s, failure=%s)" % (
        Fore.WHITE, 'successful' if import_records.failure_cnt <= 0 else 'failure',
        import_records.success_cnt, import_records.failure_cnt))

    if import_records.failure_cnt > 0:
        parser.exit()

    transaction_records = import_records.get_records()

    if not config.args.skipaudit and not config.args.summary:
        audit = AuditRecords(transaction_records)
    else:
        audit = None

    value_asset = ValueAsset()
    transaction_history = TransactionHistory(transaction_records, value_asset)

    tax = TaxCalculator(transaction_history.transactions)
    tax.pool_same_day()
    tax.match(tax.DISPOSAL_SAME_DAY)
    tax.match(tax.DISPOSAL_BED_AND_BREAKFAST)

    if config.args.debug:
        tax.output_transactions()

    tax.process_unmatched()

    if not config.args.summary:
        tax.process_income()

    if config.args.taxyear:
        print("%scalculating tax year %d-%d" % (
            Fore.CYAN, config.args.taxyear - 1, config.args.taxyear))
        tax.calculate_capital_gains(config.args.taxyear)
        if not config.args.summary:
            tax.calculate_income(config.args.taxyear)
    else:
        # Calculate for all years
        for year in sorted(tax.tax_events):
            print("%scalculating tax year %d-%d" % (
                Fore.CYAN, year - 1, year))
            tax.calculate_capital_gains(year)
            if not config.args.summary:
                tax.calculate_income(year)

        if not config.args.summary:
            tax.calculate_holdings(value_asset)

    if config.args.nopdf:
        ReportLog(audit,
                  tax.tax_report,
                  value_asset.price_report,
                  tax.holdings_report)
    else:
        ReportPdf(parser.prog,
                  audit,
                  tax.tax_report,
                  value_asset.price_report,
                  tax.holdings_report)
