import { useEffect } from 'react';
import memoize from 'memoize-one';
import { useInsuranceFundsQuery, InsuranceFundsQuery } from '../types';

import { NetworkStatus } from '@apollo/client/core/networkStatus';

const convert = memoize(
  (response?: InsuranceFundsQuery): any=>
    response?.insuranceFunds?.map((info) => ({
      id: info.id,
      liquidity: info.liquidity,
      stakedPnl: info.stakedPnl,
      totalStakers: info.totalStakers,
    })) ?? [],
);

export const useInsuranceFunds = () => {
  
  const { data, loading, startPolling, stopPolling, networkStatus } =
  useInsuranceFundsQuery();
  console.log("insurancefunds==>>",data)

  useEffect(() => {
    startPolling(10000);
    return stopPolling;
  }, [startPolling, stopPolling]);

  useEffect(() => {
    if (networkStatus === NetworkStatus.error) {
      console.log({ message: 'Network unavailable. Trying to connect...' });
    }
  }, [networkStatus]);

  return { insuranceFunds: convert(data), loading };
}
