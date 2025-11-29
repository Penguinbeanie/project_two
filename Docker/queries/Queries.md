## **1️⃣ Top 3 Most-Traded Companies per Sector (Q1 2025)**

**Query:**
```sql
SELECT c.sector, c.company_name, SUM(f.volume) AS total_volume
FROM fact_stock_price f
INNER JOIN dim_company c ON f.company_id = c.company_id
INNER JOIN dim_date d ON f.date_id = d.date_id
WHERE d.year=2025 AND d.quarter=1
GROUP BY c.sector, c.company_name
ORDER BY c.sector, total_volume DESC
LIMIT 3 BY c.sector;
```

**Results:**

| Sector | Company | Total Volume |
|--------|---------|--------------|
| **Basic Materials** | Hecla Mining Company | 1,153,165,600 |
| | Freeport-McMoRan Inc. | 964,415,700 |
| | Newmont Corporation | 617,209,700 |
| **Communication Services** | Alphabet Inc. | 3,059,700,500 |
| | AT&T Inc. | 2,527,613,900 |
| | Warner Bros. Discovery Inc. | 2,129,251,300 |
| **Consumer Cyclical** | Ford Motor Company | 6,018,623,500 |
| | Tesla, Inc. | 5,811,328,000 |
| | Amazon.com, Inc. | 2,402,912,500 |
| **Consumer Defensive** | Walmart Inc. | 1,225,172,500 |
| | The Coca-Cola Company | 1,092,430,700 |
| | Kenvue Inc. | 897,901,800 |
| **Energy** | Exxon Mobil Corporation | 968,237,200 |
| | The Williams Companies, Inc. | 927,376,000 |
| | SLB N.V. | 925,498,300 |
| **Financial Services** | Bank of America Corporation | 2,326,152,200 |
| | MARA Holdings, Inc. | 2,313,459,600 |
| | Robinhood Markets, Inc. | 2,160,466,100 |
| **Healthcare** | Pfizer Inc. | 2,719,008,500 |
| | Merck & Co., Inc. | 962,927,100 |
| | Viatris Inc. | 799,880,800 |
| **Industrials** | JetBlue Airways Corporation | 1,406,912,400 |
| | CSX Corporation | 889,661,400 |
| | Southwest Airlines Co. | 650,476,700 |
| **Real Estate** | Medical Properties Trust, Inc. | 748,574,600 |
| | Host Hotels & Resorts, Inc. | 529,731,400 |
| | VICI Properties Inc. | 432,861,300 |
| **Technology** | NVIDIA Corporation | 16,881,581,500 |
| | Intel Corporation | 5,987,377,600 |
| | Palantir Technologies Inc. | 5,936,378,100 |
| **Utilities** | PG&E Corporation | 1,417,848,900 |
| | The AES Corporation | 924,850,600 |
| | NextEra Energy, Inc. | 703,953,300 |

---

## **2️⃣ Change in Average Price by Sector (2024–2025)**

**Query:**
```sql
SELECT d.year, c.sector, AVG(f.close) AS avg_close_price
FROM fact_stock_price f
INNER JOIN dim_company c ON f.company_id=c.company_id
INNER JOIN dim_date d ON f.date_id=d.date_id
WHERE d.year BETWEEN 2024 AND 2025
GROUP BY d.year, c.sector
ORDER BY d.year, c.sector;
```

**Results:**

| Year | Sector | Avg Close Price |
|------|--------|-----------------|
| 2024 | Basic Materials | 114.97 |
| 2024 | Communication Services | 94.26 |
| 2024 | Consumer Cyclical | 188.85 |
| 2024 | Consumer Defensive | 85.64 |
| 2024 | Energy | 65.44 |
| 2024 | Financial Services | 98.78 |
| 2024 | Healthcare | 138.82 |
| 2024 | Industrials | 142.05 |
| 2024 | Real Estate | 58.08 |
| 2024 | Technology | 141.51 |
| 2024 | Utilities | 64.71 |
| 2025 | Basic Materials | 105.13 |
| 2025 | Communication Services | 113.86 |
| 2025 | Consumer Cyclical | 201.68 |
| 2025 | Consumer Defensive | 84.21 |
| 2025 | Energy | 69.56 |
| 2025 | Financial Services | 113.57 |
| 2025 | Healthcare | 127.31 |
| 2025 | Industrials | 155.65 |
| 2025 | Real Estate | 58.31 |
| 2025 | Technology | 148.29 |
| 2025 | Utilities | 77.44 |

---

## **3️⃣ Sector Composition of S&P 500 Companies (2024 & 2025)**

**Query:**
```sql
SELECT d.year, c.sector,
       countDistinct(c.company_id) AS company_count,
       round(countDistinct(c.company_id) / sum(countDistinct(c.company_id)) OVER (PARTITION BY d.year) * 100, 2) AS pct_share
FROM fact_stock_price f
INNER JOIN dim_company c ON f.company_id=c.company_id
INNER JOIN dim_date d ON f.date_id=d.date_id
WHERE d.year IN (2025, 2024)
GROUP BY d.year, c.sector
ORDER BY d.year, pct_share DESC;
```

**Results:**

| Year | Sector | Company Count | % Share |
|------|--------|---------------|---------|
| 2024 | Financial Services | 172 | 15.62 |
| 2024 | Technology | 157 | 14.26 |
| 2024 | Industrials | 155 | 14.08 |
| 2024 | Consumer Cyclical | 140 | 12.72 |
| 2024 | Healthcare | 132 | 11.99 |
| 2024 | Real Estate | 92 | 8.36 |
| 2024 | Consumer Defensive | 64 | 5.81 |
| 2024 | Energy | 53 | 4.81 |
| 2024 | Basic Materials | 48 | 4.36 |
| 2024 | Communication Services | 45 | 4.09 |
| 2024 | Utilities | 43 | 3.91 |
| 2025 | Financial Services | 172 | 15.58 |
| 2025 | Technology | 159 | 14.40 |
| 2025 | Industrials | 155 | 14.04 |
| 2025 | Consumer Cyclical | 140 | 12.68 |
| 2025 | Healthcare | 132 | 11.96 |
| 2025 | Real Estate | 93 | 8.42 |
| 2025 | Consumer Defensive | 64 | 5.80 |
| 2025 | Energy | 53 | 4.80 |
| 2025 | Basic Materials | 48 | 4.35 |
| 2025 | Communication Services | 45 | 4.08 |
| 2025 | Utilities | 43 | 3.89 |

---

## **4️⃣ Highest Average Relative Volatility (Q1 2025)**

**Query:**
```sql
SELECT c.company_name, c.sector,
       AVG((f.high - f.low)/f.open) AS avg_relative_volatility
FROM fact_stock_price f
INNER JOIN dim_company c ON f.company_id=c.company_id
INNER JOIN dim_date d ON f.date_id=d.date_id
WHERE d.year=2025 AND d.quarter=1 AND f.open>0
GROUP BY c.company_name, c.sector
ORDER BY avg_relative_volatility DESC
LIMIT 5;
```

**Results:**

| Company | Sector | Avg Relative Volatility |
|---------|--------|-------------------------|
| Super Micro Computer, Inc. | Technology | 0.0897 |
| SolarEdge Technologies, Inc. | Technology | 0.0847 |
| Sandisk Corporation | Technology | 0.0830 |
| Viasat, Inc. | Technology | 0.0815 |
| CleanSpark, Inc. | Financial Services | 0.0808 |

---

## **5️⃣ Top 10 Companies by Price Growth (Q1 2025)**

**Query:**
```sql
WITH q1 AS (
    SELECT c.company_id,
           any(c.company_name) AS company_name,
           any(c.sector) AS sector,
           anyIf(f.close, d.month='Jan') AS jan_close,
           anyIf(f.close, d.month='Mar') AS mar_close
    FROM fact_stock_price f
    INNER JOIN dim_company c ON f.company_id=c.company_id
    INNER JOIN dim_date d ON f.date_id=d.date_id
    WHERE d.year=2025 AND d.quarter=1
    GROUP BY c.company_id
)
SELECT company_name, sector, jan_close, mar_close,
       (mar_close - jan_close)/jan_close*100 AS pct_growth
FROM q1
WHERE jan_close>0 AND mar_close IS NOT NULL
ORDER BY pct_growth DESC
LIMIT 10;
```

**Results:**

| Company | Sector | Jan Close | Mar Close | % Growth |
|---------|--------|-----------|-----------|----------|
| Corsair Gaming, Inc. | Technology | 6.98 | 10.97 | 57.16 |
| CVS Health Corporation | Healthcare | 42.75 | 63.54 | 48.63 |
| Pitney Bowes Inc. | Industrials | 7.08 | 10.47 | 47.92 |
| Medical Properties Trust, Inc. | Real Estate | 3.83 | 5.50 | 43.78 |
| Stride, Inc. | Consumer Defensive | 106.34 | 139.44 | 31.13 |
| Philip Morris International Inc. | Consumer Defensive | 118.03 | 154.77 | 31.12 |
| Tapestry, Inc. | Consumer Cyclical | 64.81 | 83.04 | 28.13 |
| CSG Systems International, Inc. | Technology | 49.80 | 63.36 | 27.22 |
| Privia Health Group, Inc. | Healthcare | 19.64 | 24.96 | 27.09 |
| Dana Incorporated | Consumer Cyclical | 11.06 | 14.00 | 26.58 |