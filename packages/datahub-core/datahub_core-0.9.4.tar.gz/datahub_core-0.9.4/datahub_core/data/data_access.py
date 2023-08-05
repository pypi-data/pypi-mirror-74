from ..libs.data_access import country_data_access
from ..libs.data_access import sic_raw_data_access

def regions():
    """

    Reurns a list of regions

    # Returns:
        list, str

    # Example:

        from datahub_core import data
        regions = data.regions

        print(regions)

        >> ['NAM', 'EMEA', 'LATAM', 'APAC' ]

    """
    return ['NAM', 'EMEA', 'LATAM', 'APAC']

def countries(region=None):
    """

    Returns a list of countries, optional by a region (see regions())

    # Returns:
        list, datahub_core.datasets.Country

        list {
            short_name: str
            alpha2_code: str
            alpha3_code: str
            locale: str
            currency: str
            region: str
            country_id: str
        }

    # Example:

        from datahub_core.data import countries

        all_countries = countries()

        nam_countries = countries('NAM')
        emea_countries = countries('EMEA')
        apac_countries = countries('APAC')
        latam_countries = countries('LATAM')


    """
    if region:
        return country_data_access.CountryDataAccess().get(region)

    return country_data_access.COUNTRIES

def resolve_country(country):

    if not isinstance(country, str):
        # if it's not a string assume it's a country object
        return country

    for x in countries():
        if x.alpha2_code == country:
            return x
        if x.alpha3_code == country:
            return x
        if x.short_name == country:
            return x
        if x.locale == country:
            return x
        if x.country_id == country:
            return x

    raise Exception(f'Uknown country ${country}')

def client_types():
    return CLEINT_TYPES

def sic_ranges():
    return sic_raw_data_access.SIC_RANGES

def sic_codes(sic_range=None):
    """
    Returns a list of Industries for a given sector.

    # Arguments:

    sic_range, datahub_core.datasets.SicRange, optional:

        SicRange object which represents an overal industry sector s
        such as Banking, Mining, Health Care

        {
            start int,
            end int,
            name str
        }

    # Returns:

        datahub_core.datasets.SicCode

        {
            code int,
            name str
        }

    """
    data = sic_raw_data_access.SicRawDataAccess().get_sic_data()

    if not sic_range:
        return data

    out = []

    for x in data:
        if x.sic_range == sic_range:
            out.append(data)
    return out

CLEINT_TYPES = [
    "BROKER/DEALER",
    "CENTRAL BANK",
    "CLOSELY HELD NON-OPERATING COMPANY",
    "COMMERCIAL CORPORATION",
    "COMMODITY SUBSIDIARY",
    "COMMON INVESTMENT FUND",
    "CORPORATE ACQUISITION VEHICLE",
    "CREDIT UNION/THRIFT",
    "CURRENCY DEALER/EXCHANGE/MONEY REMITTER",
    "EDUCATIONAL",
    "ENDOWMENT",
    "FCP",
    "FINANCE/MORTGAGE COMPANY",
    "FOUNDATION",
    "FUND OF FUNDS",
    "FUTURES COMMISSION MERCHANT",
    "GOVERNMENT AGENCY",
    "HEDGE FUND",
    "INDIVIDUAL",
    "INSURANCE",
    "INSURER",
    "INTERMEDIARY",
    "INTERNATIONAL ORGANIZATION",
    "INVESTMENT ADVISOR",
    "INVESTMENT TRUST",
    "KVG",
    "MONEY MANAGER",
    "MONEY MANAGER CORPORATE",
    "MUTUAL - 40 ACT",
    "MUTUAL - CANADIAN",
    "MUTUAL - CLOSED ENDED",
    "MUTUAL - ETF",
    "MUTUAL FUND",
    "NON-US BANK",
    "NON-US TRUST",
    "OTHER NON-US FIDUCIARY VEHICLE",
    "PARTNERSHIP",
    "PENSION",
    "PENSION - CONTRIBUTION",
    "PENSION - CORPORATION",
    "PENSION - PUBLIC",
    "PERSONAL HOLDING/INVESTMENT COMPANY",
    "POOLED FUND",
    "PRIVATE EQUITY",
    "PRIVATE INVESTMENT COMPANY (PIC)",
    "PUBLIC CHARITY",
    "REIT (REAL ESTATE INVESTMENT TRUST)",
    "RETAIL",
    "SICAV",
    "SICAV-SIF",
    "SPECIAL PURPOSE VEHICLE (SPV)",
    "UCITS FUND",
    "UNIT TRUST",
    "US BANK",
    "CORPORATE JOINT VENTURE",
    "DEFINED BENEFIT PLAN",
    "FGR",
    "ICVC",
    "LIMITED LIABILITY COMPANY (LLC)",
    "LIMITED PARTNERSHIP (LP)",
    "PENSION - DEFINED BENEFIT",
    "PENSION - DUTCH",
    "PENSION - ERISA",
    "PRIVATE CHARITY",
    "US TRUST",
    "COMMINGLED FUND",
    "NON-FOR PROFIT",
    "RELIGIOUS",
    "TENDER OPTION BONDS",
    "VENTURE CAPITAL"
]
