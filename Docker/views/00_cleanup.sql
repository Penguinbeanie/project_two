-- Drop users
DROP USER IF EXISTS full_analyst;
DROP USER IF EXISTS limited_analyst;

-- Drop roles
DROP ROLE IF EXISTS analyst_full;
DROP ROLE IF EXISTS analyst_limited;

-- Drop views (do this BEFORE dropping tables)
DROP VIEW IF EXISTS sp600_stocks.dim_company_v;
DROP VIEW IF EXISTS sp600_stocks.dim_company_limited_v;
DROP VIEW IF EXISTS sp600_stocks.dim_date_v;
DROP VIEW IF EXISTS sp600_stocks.dim_date_limited_v;
DROP VIEW IF EXISTS sp600_stocks.dim_exchange_v;
DROP VIEW IF EXISTS sp600_stocks.dim_exchange_limited_v;
DROP VIEW IF EXISTS sp600_stocks.fact_stock_price_v;
DROP VIEW IF EXISTS sp600_stocks.fact_stock_price_limited_v;

-- Note: We're NOT dropping the base tables, only the access control objects