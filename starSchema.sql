-- DataSet: yfinance.ticker
CREATE TABLE DimDate (
    DateID INT PRIMARY KEY AUTO_INCREMENT,
    FullDate DATE NOT NULL,
    Year SMALLINT NOT NULL,
    Month VARCHAR(10) NOT NULL,
    Day TINYINT NOT NULL,
    DayOfWeek VARCHAR(10) NOT NULL,
    Quarter TINYINT NOT NULL,

    CONSTRAINT CHK_DayOfWeek_Valid
            CHECK (DayOfWeek IN ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')),
    CONSTRAINT CHK_Month_Valid
            CHECK (Month IN ('January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December')),
    CONSTRAINT CHK_Day_Valid
            CHECK (Day BETWEEN 1 AND 31),
    CONSTRAINT CHK_Quarter_Valid
            CHECK (Quarter BETWEEN 1 AND 4)
    );

-- DataSet: yfinance.info AND wikipedia.components
CREATE TABLE DimCompany (
    CompanyID INT PRIMARY KEY AUTO_INCREMENT,
    Symbol VARCHAR(10) NOT NULL,
    CIK INT NOT NULL,                       -- wikipedia
    CompanyName VARCHAR(100) NOT NULL,
    HeadquartersCountry VARCHAR(100),
    WebsiteURL VARCHAR(255),
    Sector VARCHAR(50),
    Industry VARCHAR(50),
    EmployeeCount INT,
    CompanySummary TEXT,
    ValidFrom DATE NOT NULL,
    ValidTo DATE NOT NULL,

    UNIQUE(CIK),

    CONSTRAINT CHK_Company_ValidDates
            CHECK (ValidTo >= ValidFrom),

    CONSTRAINT CHK_EmployeeCount_Positive
            CHECK (EmployeeCount > 0)

    );

-- DataSet: wikipedia.exchange AND yfinance.info
CREATE TABLE DimExchange (
    ExchangeID INT PRIMARY KEY AUTO_INCREMENT,
    ExchangeCode VARCHAR(100) NOT NULL,             -- yfinance.info
    ExchangeTimezone VARCHAR(100),                  -- yfinance.info
    MIC VARCHAR(10) NOT NULL,
    ExRegion VARCHAR(100),
    ExCity VARCHAR(100),
    MarketCap BIGINT,
    MonthlyTradeVolume_USD BIGINT,
    OpenHours_Open TIME,
    OpenHours_Close TIME,
    IsCurrent BOOLEAN NOT NULL,
    ValidFrom DATE NOT NULL,
    ValidTo DATE NOT NULL,

    UNIQUE(MIC),

    CONSTRAINT CHK_Exchange_ValidDates
        CHECK (ValidTo >= ValidFrom),

    CONSTRAINT CHK_MarketCap_Positive
        CHECK (MarketCap >= 0),

    CONSTRAINT CHK_MonthlyTradeVolume_Positive
        CHECK (MonthlyTradeVolume_USD >= 0),

    CONSTRAINT CHK_Exchange_ValidHours
        CHECK (OpenHours_Close >= OpenHours_Open)
    );

CREATE TABLE FactStockPrice (
    SurrogateID BIGINT PRIMARY KEY AUTO_INCREMENT,

    -- Foreign Keys
    DateID INT NOT NULL,
    CompanyID INT NOT NULL,
    ExchangeID INT NOT NULL,

    -- Values
    High DECIMAL(19, 4) NOT NULL,
    Low DECIMAL(19, 4) NOT NULL,
    Open DECIMAL(19, 4) NOT NULL,
    Close DECIMAL(19, 4) NOT NULL,
    Volume BIGINT NOT NULL,

    UNIQUE (DateID, CompanyID),

    CONSTRAINT FK_Fact_Date
            FOREIGN KEY (DateID)
            REFERENCES DimDate (DateID),

    CONSTRAINT FK_Fact_Company
            FOREIGN KEY (CompanyID)
            REFERENCES DimCompany (CompanyID),

    CONSTRAINT FK_Fact_Exchange
            FOREIGN KEY (ExchangeID)
            REFERENCES DimExchange (ExchangeID),

    CONSTRAINT CHK_High_NonNegative
            CHECK (High >= 0),

    CONSTRAINT CHK_Low_NonNegative
            CHECK (Low >= 0),

    CONSTRAINT CHK_Open_NonNegative
            CHECK (Open >= 0),

    CONSTRAINT CHK_Close_NonNegative
            CHECK (Close >= 0),

    CONSTRAINT CHK_Volume_NonNegative
            CHECK (Volume >= 0),

    CONSTRAINT CHK_High_Low
            CHECK (High >= Low)
    );
