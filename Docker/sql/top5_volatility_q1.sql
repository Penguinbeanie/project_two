/* Top 5 avg relative volatility in Q1 2025
   rel_vol = (High - Low) / ((High + Low)/2) */
WITH
  toDate('2025-01-01') AS q1_start,
  toDate('2025-03-31') AS q1_end,
  ['sp500','sp600']    AS wanted_indexes,

  latest_membership AS (
    SELECT index_name, max(snapshot_date) AS snap
    FROM analytics.index_membership_snapshots
    WHERE index_name IN wanted_indexes AND snapshot_date <= q1_end
    GROUP BY index_name
  ),
  universe AS (
    SELECT DISTINCT m.Symbol
    FROM analytics.index_membership_snapshots m
    ANY INNER JOIN latest_membership l
      ON m.index_name = l.index_name AND m.snapshot_date = l.snap
  ),
  comp_q1 AS (
    SELECT Symbol, anyLast(CompanyName) AS CompanyName, anyLast(Sector) AS Sector
    FROM (
      SELECT Symbol, CompanyName, Sector, snapshot_date,
             row_number() OVER (PARTITION BY Symbol ORDER BY snapshot_date DESC) rn
      FROM analytics.company_overview_snapshots
      WHERE snapshot_date <= q1_end
    )
    WHERE rn = 1
    GROUP BY Symbol
  )
SELECT
  d.Ticker,
  c.CompanyName,
  c.Sector,
  round( avg( (d.High - d.Low) / nullIf( (d.High + d.Low)/2, 0 ) ), 6 ) AS avg_rel_volatility
FROM analytics.daily_stock_prices d
ANY INNER JOIN universe u ON u.Symbol = d.Ticker
LEFT JOIN comp_q1 c       ON c.Symbol = d.Ticker
WHERE d.Date BETWEEN q1_start AND q1_end
GROUP BY d.Ticker, c.CompanyName, c.Sector
ORDER BY avg_rel_volatility DESC
LIMIT 5;
