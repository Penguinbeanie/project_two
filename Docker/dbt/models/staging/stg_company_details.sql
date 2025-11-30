{{ config(materialized='view') }}

SELECT DISTINCT
    symbol,
    company_name,
    sector,
    industry,
    headquarters_country,
    currency_code,
    company_summary,
    employee_count,
    website_url,
    exchange_code,
    exchange_timezone,
    ingestion_date AS valid_from
FROM {{ source('sp600_stocks', 'company_details') }}