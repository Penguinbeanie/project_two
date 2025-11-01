/* Top 3 most-traded companies (by total Volume) per sector in Q1 2025 */
WITH
  toDate('2025-01-01') AS q1_start,
  toDate('2025-03-31') AS q1_end,
  /* universe from latest snapshots (sp500+sp600) */
  universe AS (
    SELECT DISTINCT Symbol
    FROM analytics.index_membership_snapshots
    WHERE (index_name, snapshot_date) IN (
      SELECT index_name, max(snapshot_date)
      FROM analytics.index_membership_snapshots
      WHERE index_name IN ('sp500','sp600')
      GROUP BY index_name
    )
  ),
  /* latest company snapshot overall (simplest choice for labeling) */
  comp_q1 AS (
    SELECT Symbol, anyLast(CompanyName) AS CompanyName, anyLast(Sector) AS Sector
    FROM (
      SELECT Symbol, CompanyName, Sector, snapshot_date,
             row_number() OVER (PARTITION BY Symbol ORDER BY snapshot_date DESC) rn
      FROM analytics.company_overview_snapshots
    )
    WHERE rn = 1
    GROUP BY Symbol
  ),
  /* aggregate once, then rank in outer query */
  volumes AS (
    SELECT
      c.Sector   AS Sector,
      d.Ticker   AS Ticker,
      c.CompanyName AS CompanyName,
      sum(d.Volume) AS total_volume
    FROM analytics.daily_stock_prices d
    ANY INNER JOIN universe u ON u.Symbol = d.Ticker
    LEFT JOIN comp_q1 c       ON c.Symbol = d.Ticker
    WHERE d.Date BETWEEN q1_start AND q1_end
    GROUP BY c.Sector, d.Ticker, c.CompanyName
  )
SELECT Sector, Ticker, CompanyName, total_volume
FROM (
  SELECT
    v.*,
    row_number() OVER (PARTITION BY v.Sector ORDER BY v.total_volume DESC) AS rn
  FROM volumes v
)
WHERE rn <= 3
ORDER BY Sector, total_volume DESC
FORMAT CSVWithNames;