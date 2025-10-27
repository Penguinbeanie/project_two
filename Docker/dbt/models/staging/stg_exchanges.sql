{{ config(materialized='view') }}

SELECT
    stock_exchange,
    mic,
    region,
    city,
    -- Clean market cap text → float (in trillions → USD)
    toFloat64OrZero(replaceRegexpAll(toString(market_cap_usd_tn), '[^0-9.]', '')) * 1e12 AS market_cap_usd,
    -- Convert billions → USD
    monthly_trade_volume_usd_bn * 1e9 AS monthly_trade_volume_usd,
    time_zone,
    utc_offset,
    dst_period,
    local_open_time,
    local_close_time,
    has_lunch_break,
    utc_winter_open_time,
    utc_winter_close_time,
    ingestion_date AS valid_from
FROM {{ source('sp600_stocks', 'exchanges') }}