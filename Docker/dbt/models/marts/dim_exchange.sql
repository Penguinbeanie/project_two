{{ config(
    materialized = 'incremental',
    unique_key = 'exchange_id'
) }}

WITH src AS (
    SELECT
        cityHash64(stock_exchange) AS exchange_id,
        stock_exchange             AS exchange_code,
        time_zone                  AS exchange_timezone,
        mic,
        region                     AS ex_region,
        city                       AS ex_city,
        market_cap_usd             AS market_cap,
        monthly_trade_volume_usd   AS monthly_trade_volume_usd,
        utc_winter_open_time       AS open_hours_open,
        utc_winter_close_time      AS open_hours_close,
        today()                    AS valid_from,
        CAST(NULL AS Nullable(Date)) AS valid_to,
        CAST(1 AS UInt8)           AS is_current
    FROM {{ ref('stg_exchanges') }}
)

{% if is_incremental() %}

SELECT * FROM (
    SELECT s.*
    FROM src s
    LEFT JOIN {{ this }} t
        ON s.exchange_id = t.exchange_id AND t.is_current = 1
    WHERE
        t.exchange_id IS NULL OR
        (
            s.exchange_code            != t.exchange_code OR
            s.exchange_timezone        != t.exchange_timezone OR
            s.mic                      != t.mic OR
            s.ex_region                != t.ex_region OR
            s.ex_city                  != t.ex_city OR
            s.market_cap               != t.market_cap OR
            s.monthly_trade_volume_usd != t.monthly_trade_volume_usd OR
            s.open_hours_open          != t.open_hours_open OR
            s.open_hours_close         != t.open_hours_close
        )
) AS updates

UNION ALL

SELECT
    t.exchange_id,
    t.exchange_code,
    t.exchange_timezone,
    t.mic,
    t.ex_region,
    t.ex_city,
    t.market_cap,
    t.monthly_trade_volume_usd,
    t.open_hours_open,
    t.open_hours_close,
    t.valid_from,
    today() AS valid_to,
    CAST(0 AS UInt8) AS is_current
FROM {{ this }} t
INNER JOIN (
    SELECT s.exchange_id
    FROM src s
    LEFT JOIN {{ this }} t
        ON s.exchange_id = t.exchange_id AND t.is_current = 1
    WHERE
        t.exchange_id IS NULL OR
        (
            s.exchange_code            != t.exchange_code OR
            s.exchange_timezone        != t.exchange_timezone OR
            s.mic                      != t.mic OR
            s.ex_region                != t.ex_region OR
            s.ex_city                  != t.ex_city OR
            s.market_cap               != t.market_cap OR
            s.monthly_trade_volume_usd != t.monthly_trade_volume_usd OR
            s.open_hours_open          != t.open_hours_open OR
            s.open_hours_close         != t.open_hours_close
        )
) u ON t.exchange_id = u.exchange_id
WHERE t.is_current = 1

{% else %}

SELECT * FROM src

{% endif %}