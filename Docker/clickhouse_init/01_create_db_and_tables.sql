CREATE DATABASE IF NOT EXISTS sp600_stocks;

-- daily tables
CREATE TABLE IF NOT EXISTS sp600_stocks.daily_stock_data (
    date Date,
    ticker String,
    close Float64,
    high Float64,
    low Float64,
    open Float64,
    volume UInt64,
    ingestion_date Date DEFAULT today()
)
ENGINE = MergeTree()
PARTITION BY toYYYYMM(date)
ORDER BY (date, ticker);

CREATE TABLE IF NOT EXISTS sp600_stocks.sp600 (
    symbol String,
    company String,
    gics_sector String,
    gics_sub_industry String,
    headquarters_location String,
    sec_filings String,
    cik String,
    ingestion_date Date DEFAULT today()
)
ENGINE = MergeTree()
ORDER BY (symbol);

CREATE TABLE IF NOT EXISTS sp600_stocks.sp500 (
    symbol String,
    security String,
    gics_sector String,
    gics_sub_industry String,
    headquarters_location String,
    date_added Date,
    cik String,
    founded String,
    ingestion_date Date DEFAULT today()
)
ENGINE = MergeTree()
ORDER BY (symbol);

-- Monthly tables
CREATE TABLE IF NOT EXISTS sp600_stocks.company_details (
    symbol String,
    company_name String,
    sector String,
    industry String,
    headquarters_country String,
    currency_code String,
    company_summary String,
    employee_count UInt32,
    website_url String,
    exchange_code String,
    exchange_timezone String,
    ingestion_date Date DEFAULT today()
)
ENGINE = MergeTree()
ORDER BY (symbol);

CREATE TABLE IF NOT EXISTS sp600_stocks.exchanges (
    stock_exchange String,
    mic String,
    region String,
    city String,
    market_cap_usd_tn String,
    monthly_trade_volume_usd_bn UInt32,
    time_zone String,
    utc_offset String,
    dst_period String,
    local_open_time String,
    local_close_time String,
    has_lunch_break String,
    utc_winter_open_time String,
    utc_winter_close_time String,
    ingestion_date Date DEFAULT today()
)
ENGINE = MergeTree()
ORDER BY (mic);
