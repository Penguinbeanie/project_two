{{ config(
    materialized = 'incremental',
    incremental_strategy = 'insert_overwrite',
    on_schema_change = 'sync_all_columns',
    partition_by = ['toYYYYMM(trade_date)']
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
        d.date                            AS trade_date
    FROM {{ ref('stg_daily_stock_data') }} d

    LEFT ANY JOIN {{ ref('dim_company') }} dc
        ON dc.symbol = d.ticker
       AND dc.is_current = 1

    LEFT ANY JOIN {{ ref('dim_exchange') }} de
        ON de.is_current = 1
       AND dc.exchange_code = de.exchange_code

    LEFT ANY JOIN {{ ref('dim_date') }} dd
        ON dd.full_date = d.date
)

SELECT *
FROM facts
WHERE high   IS NOT NULL
  AND low    IS NOT NULL
  AND open   IS NOT NULL
  AND close  IS NOT NULL
  AND volume IS NOT NULL