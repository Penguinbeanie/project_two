
INSERT INTO sp600_stocks.daily_stock_data (date, ticker, close, high, low, open, volume)
SELECT 
    toDate(Date), toString(Ticker), toFloat64(Close), toFloat64(High),
    toFloat64(Low), toFloat64(Open), toUInt64(Volume)
FROM file('daily/2025_10_21_daily_stock_data.csv', 'CSVWithNames')
LIMIT 10;


INSERT INTO sp600_stocks.sp600 (symbol, company, gics_sector, gics_sub_industry, headquarters_location, sec_filings, cik)
SELECT
    toString(Symbol),
    toString(Company),
    toString(`GICS Sector`),
    toString(`GICS Sub-Industry`), 
    toString(`Headquarters Location`), 
    toString(`SEC filings`), 
    toString(CIK)
FROM file('daily/sp600_components.csv', 'CSVWithNames')
LIMIT 10;


INSERT INTO sp600_stocks.sp500 (symbol, security, gics_sector, gics_sub_industry, headquarters_location, date_added, cik, founded)
SELECT
    Symbol, Security, `GICS Sector`, `GICS Sub-Industry`,
    `Headquarters Location`,
    toDate32(`Date added`),
    CIK,
    Founded
FROM file('daily/sp500_components.csv', 
          'CSVWithNames', 
          'Symbol String, Security String, `GICS Sector` String, `GICS Sub-Industry` String, `Headquarters Location` String, `Date added` String, CIK String, Founded String')
LIMIT 10;


INSERT INTO sp600_stocks.company_details (symbol, company_name, sector, industry, headquarters_country, currency_code, company_summary, employee_count, website_url, exchange_code, exchange_timezone)
SELECT
    toString(Symbol), toString(CompanyName), toString(Sector), toString(Industry),
    toString(HeadquartersCountry), toString(CurrencyCode), toString(CompanySummary),
    toUInt32(EmployeeCount), toString(WebsiteURL), toString(ExchangeCode), toString(ExchangeTimezone)
FROM file('monthly/2025_10_19_company_overview_data.csv.csv', 'CSVWithNames')
LIMIT 10;


INSERT INTO sp600_stocks.exchanges (
    stock_exchange, mic, region, city, market_cap_usd_tn, monthly_trade_volume_usd_bn, time_zone, utc_offset, dst_period, local_open_time, local_close_time, has_lunch_break, utc_winter_open_time, utc_winter_close_time
)
SELECT
    toString(`Stock exchange`),           -- lowercase 'e'
    toString(MIC),
    toString(Region),
    toString(City),
    toString(`Market cap (USD tn)`),      -- non-breaking space
    toUInt32(`Monthly trade volume (USD bn)`),  -- non-breaking space
    toString(`Time zone`),
    toString(`Δ`),
    toString(DST),
    toString(`Open hours (local time) (Open)`),
    toString(`Open hours (local time) (Close)`),
    toString(`Open hours (local time) (Lunch)`),
    toString(`UTC, winter only (Open)`),
    toString(`UTC, winter only (Close)`)
FROM file('monthly/wikipedia_exchange_information.csv', 'CSVWithNames')
LIMIT 10;


INSERT INTO sp600_stocks.before202510_stock_data (date, ticker, close, high, low, open, volume)
SELECT 
    toDate(Date), toString(Ticker), toFloat64(Close), toFloat64(High),
    toFloat64(Low), toFloat64(Open), toUInt64(Volume)
FROM file('historic/historic_daily_stock_data.csv', 'CSVWithNames')
LIMIT 10;