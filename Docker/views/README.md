1. analyst_full:
   - Full SELECT access to all base tables and views
   - Can see all columns including sensitive data

2. analyst_limited:
   - Column-level grants on dim_company (excludes 3 sensitive columns)
   - Cannot access company_name, headquarters_country, website_url directly
   - Cannot perform SELECT * on dim_company (attempts to access restricted columns)
   - Must query through dim_company_limited_v for complete data

Technical Implementation:
- Views use SQL SECURITY DEFINER (ClickHouse 24.4+ feature)
- This allows views to access restricted columns while users cannot
- Provides true column-level security, not just policy-based control

Pseudonymized Columns (3):
1. company_name → First 3 characters + "***"
2. headquarters_country → First 2 characters + "**"
3. website_url → Domain masked with "***"
