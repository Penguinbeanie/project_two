CREATE DATABASE IF NOT EXISTS analytics;

CREATE TABLE IF NOT EXISTS analytics.daily_stock_prices
(
    Date Date,
    Ticker String,
    Open Float64,
    High Float64,
    Low Float64,
    Close Float64,
    AdjClose Float64,
    Volume UInt64
)
ENGINE = MergeTree
PARTITION BY toYYYYMM(Date)
ORDER BY (Ticker, Date);
