{{ config(materialized='view') }}

SELECT
    toDate(date)              AS date,
    ticker,
    nullif(toFloat64(close), 0) AS close,
    nullif(toFloat64(high), 0)  AS high,
    nullif(toFloat64(low), 0)   AS low,
    nullif(toFloat64(open), 0)  AS open,
    nullif(toUInt64(volume), 0) AS volume,
    ingestion_date
FROM {{ source('sp600_stocks', 'daily_stock_data') }}
WHERE ticker IS NOT NULL