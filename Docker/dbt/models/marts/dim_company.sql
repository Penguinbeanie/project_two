{{ config(
    materialized = 'incremental',
    unique_key = 'company_id'
) }}

WITH src AS (
    SELECT
        cityHash64(symbol) AS company_id,
        symbol,
        company_name,
        sector,
        industry,
        headquarters_country,
        website_url,
        employee_count,
        exchange_code,
        today() AS valid_from,
        CAST(NULL AS Nullable(Date)) AS valid_to,
        CAST(1 AS UInt8) AS is_current
    FROM {{ ref('stg_company_details') }}
)

{% if is_incremental() %}

-- Only run this part when the table already exists
SELECT * FROM (
    SELECT s.*
    FROM src s
    LEFT JOIN {{ this }} t
        ON s.company_id = t.company_id AND t.is_current = 1
    WHERE
        t.company_id IS NULL OR
        (
            s.company_name         != t.company_name OR
            s.sector               != t.sector OR
            s.industry             != t.industry OR
            s.headquarters_country != t.headquarters_country OR
            s.employee_count       != t.employee_count OR
            s.website_url          != t.website_url OR
            s.exchange_code        != t.exchange_code
        )
) AS updates

UNION ALL

SELECT
    t.company_id,
    t.symbol,
    t.company_name,
    t.sector,
    t.industry,
    t.headquarters_country,
    t.website_url,
    t.employee_count,
    t.exchange_code,
    t.valid_from,
    today() AS valid_to,
    CAST(0 AS UInt8) AS is_current
FROM {{ this }} t
INNER JOIN (
    SELECT s.company_id
    FROM src s
    LEFT JOIN {{ this }} t
        ON s.company_id = t.company_id AND t.is_current = 1
    WHERE
        t.company_id IS NULL OR
        (
            s.company_name         != t.company_name OR
            s.sector               != t.sector OR
            s.industry             != t.industry OR
            s.headquarters_country != t.headquarters_country OR
            s.employee_count       != t.employee_count OR
            s.website_url          != t.website_url OR
            s.exchange_code        != t.exchange_code
        )
) u ON t.company_id = u.company_id
WHERE t.is_current = 1

{% else %}

-- First run: create full base table with is_current and valid_to
SELECT * FROM src

{% endif %}