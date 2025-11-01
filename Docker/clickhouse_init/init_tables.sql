CREATE DATABASE IF NOT EXISTS sp600_stocks;

CREATE TABLE IF NOT EXISTS sp600_stocks.daily_stock_data
(
    date Date,
    ticker String,
    close Float64,
    high Float64,
    low Float64,
    open Float64,
    volume UInt64,
    ingestion_date DateTime DEFAULT now()
)
ENGINE = MergeTree()
PARTITION BY toYYYYMM(date)
ORDER BY (ticker, date);

CREATE TABLE IF NOT EXISTS sp600_stocks.sp500_components
(
    symbol String,
    security String,
    gics_sector String,
    gics_sub_industry String,
    headquarters_location String,
    date_added Date32,
    cik String,
    founded String,
    ingestion_date DateTime DEFAULT now()
)
ENGINE = MergeTree()
ORDER BY symbol;

CREATE TABLE IF NOT EXISTS sp600_stocks.sp600_components
(
    symbol String,
    company String,
    gics_sector String,
    gics_sub_industry String,
    headquarters_location String,
    sec_filings String,
    cik String,
    ingestion_date DateTime DEFAULT now()
)
ENGINE = MergeTree()
ORDER BY symbol;
