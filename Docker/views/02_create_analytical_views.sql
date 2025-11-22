-- ============================================
-- FULL ACCESS VIEWS (for analyst_full)
-- ============================================

CREATE OR REPLACE VIEW sp600_stocks.dim_company_v AS
SELECT *
FROM sp600_stocks.dim_company;

CREATE OR REPLACE VIEW sp600_stocks.dim_date_v AS
SELECT *
FROM sp600_stocks.dim_date;

CREATE OR REPLACE VIEW sp600_stocks.dim_exchange_v AS
SELECT *
FROM sp600_stocks.dim_exchange;

CREATE OR REPLACE VIEW sp600_stocks.fact_stock_price_v AS
SELECT *
FROM sp600_stocks.fact_stock_price;

-- ============================================
-- LIMITED ACCESS VIEWS (for analyst_limited)
-- Uses SQL SECURITY DEFINER (ClickHouse 24.4+)
-- ============================================

CREATE OR REPLACE VIEW sp600_stocks.dim_company_limited_v
SQL SECURITY DEFINER  -- This allows view to access columns that user cannot
AS
SELECT 
    company_id,
    symbol,
    sector,
    industry,
    employee_count,
    exchange_code,
    valid_from,
    valid_to,
    is_current,

    -- PSEUDONYMIZED COLUMNS (3 required)
    -- These use sensitive columns internally but output masked versions
    concat(substring(company_name, 1, 3), '***') AS company_name,
    
    CASE 
        WHEN headquarters_country IS NOT NULL 
        THEN concat(substring(headquarters_country, 1, 2), '**')
        ELSE NULL
    END AS headquarters_country,

    CASE 
        WHEN website_url IS NOT NULL THEN 
            concat('https://***', 
                   substring(
                       website_url,
                       length(website_url) - position('.' IN reverse(website_url)) + 1
                   )
            )
        ELSE NULL
    END AS website_url

FROM sp600_stocks.dim_company;

CREATE OR REPLACE VIEW sp600_stocks.dim_date_limited_v AS
SELECT * FROM sp600_stocks.dim_date;

CREATE OR REPLACE VIEW sp600_stocks.dim_exchange_limited_v AS
SELECT * FROM sp600_stocks.dim_exchange;

CREATE OR REPLACE VIEW sp600_stocks.fact_stock_price_limited_v AS
SELECT * FROM sp600_stocks.fact_stock_price;

-- ============================================
-- Notes:
-- ============================================
-- SQL SECURITY DEFINER means the view executes with the permissions
-- of the user who CREATED it (admin_user), not the user querying it.
-- This allows analyst_limited to see masked data without having
-- direct access to sensitive columns.