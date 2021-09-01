import { useEffect } from 'react';
import memoize from 'memoize-one';
import { useMarketStakesQuery, MarketStakesQuery } from '../types';

import { NetworkStatus } from '@apollo/client/core/networkStatus';

const convert = memoize(
  (response?: MarketStakesQuery): any=>
    response?.marketStakes?.map((marketStake) => ({
      id: marketStake.id,
      account: marketStake.account,
      market: marketStake.market,
      slpTotal: marketStake.slpTotal,
      collateralTotal: marketStake.collateralTotal,
      initialStakedPnl: marketStake.initialStakedPnl,
    })) ?? [],
);

export const useMarketStakes = () => {
  
  const { data, loading, startPolling, stopPolling, networkStatus } =
  useMarketStakesQuery();
  console.log("MarketStake==>>",data)

  useEffect(() => {
    startPolling(10000);
    return stopPolling;
  }, [startPolling, stopPolling]);

  useEffect(() => {
    if (networkStatus === NetworkStatus.error) {
      console.log({ message: 'Network unavailable. Trying to connect...' });
    }
  }, [networkStatus]);

  return { marketStakes: convert(data), loading };
}
