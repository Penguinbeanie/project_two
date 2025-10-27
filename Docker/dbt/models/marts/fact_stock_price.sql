{{ config(
    materialized = 'incremental',
    unique_key = 'surrogate_id',
    incremental_strategy = 'insert_overwrite',
    on_schema_change = 'sync_all_columns'
) }}

WITH facts AS (
    SELECT
        cityHash64(d.date, d.ticker)      AS surrogate_id,
        toYYYYMMDD(d.date)                AS date_id,
        cityHash64(d.ticker)              AS company_id,
        de.exchange_id                    AS exchange_id,
        nullif(d.high, 0)                 AS high,
        nullif(d.low, 0)                  AS low,
        nullif(d.open, 0)                 AS open,
        nullif(d.close, 0)                AS close,
        nullif(d.volume, 0)               AS volume,
        d.date                            AS trade_date,
        now()                             AS load_ts
    FROM {{ ref('stg_daily_stock_data') }} d

    LEFT JOIN {{ ref('dim_company') }} dc
        ON dc.symbol = d.ticker
       AND dc.is_current = 1

    LEFT JOIN {{ ref('dim_exchange') }} de
        ON de.is_current = 1
       AND dc.exchange_code = de.exchange_code

    LEFT JOIN {{ ref('dim_date') }} dd
        ON dd.full_date = d.date
)

SELECT *
FROM facts
WHERE high   IS NOT NULL
  AND low    IS NOT NULL
  AND open   IS NOT NULL
  AND close  IS NOT NULL
  AND volume IS NOT NULL