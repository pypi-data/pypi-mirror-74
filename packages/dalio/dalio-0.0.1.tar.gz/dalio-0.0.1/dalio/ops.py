"""Define various operations"""

import pandas as pd

# from dalio.base.constants import CATEGORY, IS_DELISTED, SCALE
from dalio.base.constants import SIC_CODE, TICKER


def risk_metrics(data, lam, ignore_first=True):
    """Apply the basic RiskMetrics (EWMA) continuous volatility measure to a
    a dataframe

    Args:
        lam (float): lambda parameter
        ignore_first (bool): whether to ignore the first row. This is often
            the case after a change pipe.

    Returns:
        A copy of data with the continuous volatility of each value
    """
    data = data.copy()**2
    last_ret = data.iloc[int(ignore_first)].copy()

    for i in range(1 + int(ignore_first), data.shape[0]):
        curr = data.iloc[i].copy()
        data.iloc[i] = lam*(data.iloc[i-1]) + (1-lam)*(last_ret)
        last_ret = curr

    return data


def index_cols(df, i=100):
    """Index columns at some value"""
    return (df / df.iloc[0]) * i


def get_comps_by_sic(data, ticker, max_ticks=None):
    """Get an equity's comps based on market cap and sic code similarity

    This has the major flaw of getting too many comps for common industries.

    Args:
        data (pd.DataFrame): data containing all possible comparisson
            candidates.
        ticker (str): ticker of main stock.
        max_ticks (int): maximum number of tickers to return.

    Raises:
        KeyError: if stock is not present in data.
    """
    # select most recent data
    # data not has a different format, with tickers as its index
    data = data.groupby(TICKER)\
        .apply(lambda group: group.iloc[0])

    try:
        # get row with ticker data
        ticker_data = data[data[TICKER] == ticker]
        # filter so that ticker is not its own comps
        data = data[data[TICKER] != ticker]
    except KeyError:
        raise KeyError("Ticker does not exist in dataset")

    # If scale column is present, get companies with similar scale
    # TODO: delete this and change to additional filtering options
    # if SCALE in data.columns:
    #     # keep only scale category number
    #     data[SCALE] = data[SCALE].apply(lambda n: int(str(n)[0]) \
    #         if n is not None else None)

    #     ticker_cap = int(ticker_data[SCALE])

    #     # keep only data of companies with similar market cap
    #     data = data[data[SCALE] >= ticker_cap-1][data[SCALE] <= ticker_cap+1]

    # such that one digit is revealed at a time
    i = 0
    comps = pd.DataFrame()

    while (len(comps) < 3) and (i <= 3):

        # make sic code become broader until there are at least three comps
        # or first sic code digit
        sic_subset = (int(ticker_data[SIC_CODE]) // (10**i))
        sic_data = data[SIC_CODE].apply(lambda x: x // (10**i) if x else x)
        comps = data[sic_subset == sic_data]

        i += 1

    # if too many comps and {max_ticks} specified, return a random sample
    # of {max_ticks} rows
    if max_ticks is not None and len(comps) > max_ticks:
        # TODO: get additional filtering options
        # this filtering will be based on specified columns and their dtypes
        # if too many tickers, get similar categories/numbers etc
        comps = comps.sample(max_ticks, random_state=42)

    return [ticker] + comps.ticker.to_list()


# TODO: implement this function to filter data for similar numbers
def _similar_number(data, col, n, range=0.2):
    pass


# TODO: implement this function to filter data for similar categories
def _similar_category(data, col, cat):
    pass
