-- Create roles for different access levels
CREATE ROLE IF NOT EXISTS analyst_full;
CREATE ROLE IF NOT EXISTS analyst_limited;

-- Create test users for demonstration
CREATE USER IF NOT EXISTS full_analyst IDENTIFIED BY 'secure_password_123';
CREATE USER IF NOT EXISTS limited_analyst IDENTIFIED BY 'secure_password_456';

-- Assign roles to users
GRANT analyst_full TO full_analyst;
GRANT analyst_limited TO limited_analyst;

-- ============================================
-- ANALYST_FULL: Full access to everything
-- ============================================
GRANT SELECT ON sp600_stocks.dim_company        TO analyst_full;
GRANT SELECT ON sp600_stocks.dim_date           TO analyst_full;
GRANT SELECT ON sp600_stocks.dim_exchange       TO analyst_full;
GRANT SELECT ON sp600_stocks.fact_stock_price   TO analyst_full;
GRANT SELECT ON sp600_stocks.dim_company_v      TO analyst_full;
GRANT SELECT ON sp600_stocks.dim_date_v         TO analyst_full;
GRANT SELECT ON sp600_stocks.dim_exchange_v     TO analyst_full;
GRANT SELECT ON sp600_stocks.fact_stock_price_v TO analyst_full;

-- ============================================
-- ANALYST_LIMITED: Column-level restrictions
-- ============================================

-- For dim_company: Grant ONLY non-sensitive columns
-- This prevents direct access to company_name, headquarters_country, website_url
GRANT SELECT(
    company_id,
    symbol,
    sector,
    industry,
    employee_count,
    exchange_code,
    valid_from,
    valid_to,
    is_current
) ON sp600_stocks.dim_company TO analyst_limited;

-- Full access to other dimension/fact tables (no sensitive data)
GRANT SELECT ON sp600_stocks.dim_date           TO analyst_limited;
GRANT SELECT ON sp600_stocks.dim_exchange       TO analyst_limited;
GRANT SELECT ON sp600_stocks.fact_stock_price   TO analyst_limited;

-- Grant access to LIMITED views
-- The views use SQL SECURITY DEFINER, so they can access
-- sensitive columns even though the user cannot
GRANT SELECT ON sp600_stocks.dim_company_limited_v      TO analyst_limited;
GRANT SELECT ON sp600_stocks.dim_date_limited_v         TO analyst_limited;
GRANT SELECT ON sp600_stocks.dim_exchange_limited_v     TO analyst_limited;
GRANT SELECT ON sp600_stocks.fact_stock_price_limited_v TO analyst_limited;

-- Explicitly do NOT grant access to full views
-- (This is implicit, but we document it here for clarity)
-- REVOKE SELECT ON sp600_stocks.dim_company_v FROM analyst_limited;