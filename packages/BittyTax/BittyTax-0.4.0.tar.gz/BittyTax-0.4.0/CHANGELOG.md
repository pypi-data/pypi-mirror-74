# Change Log
## [Unreleased]

## Version [0.4.0] Beta (2020-07-18)
### Added
- Accounting tool: colour output and progress bars/spinner.
- Conversion tool: colour output.
- Price tool: colour output.
### Changed
- Accounting tool: use latest price when a historic price is not available.

## Version [0.3.3] Beta (2020-06-29)
### Fixed
- Exception if transaction records input file contains less than the expected 12 columns. ([#5](https://github.com/BittyTax/BittyTax/issues/5))
- Historic or fixed fee indicator is incorrect when transaction is pooled. ([#7](https://github.com/BittyTax/BittyTax/issues/7))
- Tax-free allowance for 2021 missing. ([#13](https://github.com/BittyTax/BittyTax/issues/13))
- Circle Parser: added "fork" transaction type. ([#11](https://github.com/BittyTax/BittyTax/issues/11))
- Trezor Parser: wallets without labelling. ([#10](https://github.com/BittyTax/BittyTax/issues/10))
- Bitfinex Parser: calculations rounded to 8 decimal places. ([#14](https://github.com/BittyTax/BittyTax/issues/14))
- Conversion tool: python2 raised exception if file format was unrecognised or file missing. ([#9](https://github.com/BittyTax/BittyTax/issues/9))
- Accounting tool: handle exception if input file is missing. ([#15](https://github.com/BittyTax/BittyTax/issues/15))
- Accounting tool: python2 handle utf-8 characters in Excel file.
### Added
- Conversion tool: added parser for HandCash wallet.
### Changed
- Trezor Parser: fees are now included separately.

## Version [0.3.2] Beta (2020-04-11)
### Fixed
- Missing packages in setup.py.

## Version [0.3.0] Beta (2020-04-11)
### Fixed
- Proceeds 4x warning was missing from PDF.
### Added
- Conversion tool: Improved exception handling.
- Accounting tool: Identify if asset values are fixed or from historic price data.
- Accounting tool: PDF report output.
### Changed
- Accounting tool: Timestamps normalized to local time only for Buy/Sell transactions.
- Accounting tool: Made fees optional for Buy/Sell transactions.

## Version [0.2.1] Beta (2020-03-07)
### Fixed
- Tax summary: Gains in the year should exclude losses.
- Bittrex parser: Adjust quantity for partially filled orders.
### Addded
- HitBTC exchange data files.
- KuCoin trades data file.
- Improved fee handling, including 3rd asset fees.
### Changed
- Conversion tool: Changed Excel spreadsheet style and added file properties.

## Version [0.2.0] Beta (2019-10-30)
### Fixed
- Bitfinex parser: wallet name typo.
- Conversion tool: use repr when parsing numbers in excel files to ensure no precision is lost.
- Coinbase: updated with new TransactionsReport header.
- Gatehub parser: exchange transactions with missing component incorrecly handled when --append option used.
### Added
- Audit: output transaction record in debug.
- Bittrex: new data file format for deposits and withdrawals added.
- Conversion tool: Support for Excel as output file format.
- Conversion tool: New --duplicates argument added to remove duplicate input rows across data files.
- Conversion tool: New -o argument added to specify an output filename for Excel or CSV files
- Accounting tool: Importing transaction records from an Excel file.
### Changed
- Remove trailing zeros from CSV output and other places in logging.
- TID's (Transaction ID) are now allocated in time order sequence.

## Version [0.1.4] Beta (2019-08-28)
### Fixed
- Audit function failure due to missing sort methods.
- More robust error handling for data source historic prices.
- Poloniex Withdrawals parser failure.
- Setup.py failing for Windows.
- Set encoding of stdout/sdterr to be utf-8.
- Re-raising exception failure in Python 3.
### Changed
- Conversion tool: The append option now appends the original data as extra columns in the CSV output.

## Version [0.1.3] Beta (2019-08-14)
### Fixed
- Bitstamp parser: added missing type 'Ripple deposit'.
- Coinbase Pro parser: filter "fee" transactions.
- Validate symbol is not missing for latest price response from data source.
- Poloniex parser: workaround to fix rounding issues found in recent trading history exports.
- Data parser: only match headers which are of the same number of fields.
### Added
- Bittrex: new data file format for trades added.
- TradeSatoshi: new data file format for deposits and withdrawals added.
- Conversion tool can now support data files with different CSV delimiters.
- Conversion tool has debug option.
- Conversion tool raises warning if 15-digit precision exceeded (Excel limit).
- Conversion tool: added option to output in Recap import CSV format.
### Removed
- Negative balance warning in a Section 104 holding. 
- Logging removed from within config module.
### Changed
- Logging is now initialised by each tool, instead of within the `config.py` module.
- Conversion tool now outputs logging to `stderr` so it will be filtered when piping into `bittytax`. 
- The `pricedata.py` module has been renamed `valueasset.py`, and main function moved to new `price.py` module.
- Package layout restructured, added subfolders for price and conv tools.
- Refactored code for "all_handler" data parsers.

## Version [0.1.2] Beta (2019-06-30)
### Fixed
- Fix for 'get_average_cost' exception when debug enabled.
- Same-day buy pools should the use the timestamp of earliest transaction, not the latest, this prevents the possibility of a negative balance.
- Circle parser: added missing transaction types, 'internal_switch_currency' and 'switch_currency'.
### Added
- Exchange data files: Wirex, Binance.
- Poloniex parser: added new withdrawalHistory.csv data format.
- Bitfinex exchange data files.

## Version [0.1.1] Beta (2019-05-29)
### Fixed
- Default bittytax.conf file was not being created when BittyTax was installed from a package, config file is now created at runtime if one does not already exist.

## Version [0.1.0] Beta (2019-05-23)
This is the initial beta release. Although it has been throughly tested, it's possible that your specific wallet/exchange data file contains data which was not programmed for. Please raise an issue if you find any problems.
### Added
- Command line tools for cryptoasset accounting, auditing and UK tax calculations (Capital Gains/Income Tax).
- Wallet data files supported: Electrum, Ledger Live, Qt Wallet, Trezor.
- Exchange data files supported: Bitstamp, Bittrex, ChangeTip, Circle, Coinbase, Coinbase Pro, Coinfloor, Cryptopia, Cryptsy, Gatehub, OKEx, Poloniex, TradeSatoshi, Uphold.
- Explorer data files supported: Etherscan.

[Unreleased]: https://github.com/BittyTax/BittyTax/compare/v0.4.0...HEAD
[0.4.0]: https://github.com/BittyTax/BittyTax/compare/v0.3.3...v0.4.0
[0.3.3]: https://github.com/BittyTax/BittyTax/compare/v0.3.2...v0.3.3
[0.3.2]: https://github.com/BittyTax/BittyTax/compare/v0.3.0...v0.3.2
[0.3.0]: https://github.com/BittyTax/BittyTax/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/BittyTax/BittyTax/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/BittyTax/BittyTax/compare/v0.1.4...v0.2.0
[0.1.4]: https://github.com/BittyTax/BittyTax/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/BittyTax/BittyTax/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/BittyTax/BittyTax/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/BittyTax/BittyTax/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/BittyTax/BittyTax/releases/tag/v0.1.0
