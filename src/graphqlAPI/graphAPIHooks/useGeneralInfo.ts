import { useEffect } from 'react';
import memoize from 'memoize-one';
import { useGeneralInfosQuery, GeneralInfosQuery } from '../types';

import { NetworkStatus } from '@apollo/client/core/networkStatus';

const convert = memoize(
  (response?: GeneralInfosQuery): any=>
    response?.generalInfos?.map((info) => ({
      totalMarkets: info.totalMarkets,
      totalTraders: info.totalTraders,
      totalStakers: info.totalStakers,
      totalPositions: info.totalPositions,
      totalCollaterals: info.totalCollaterals,
      riskParams: info.riskParams,
    })) ?? [],
);

export const useGeneralInfo = () => {
  
  const { data, loading, startPolling, stopPolling, networkStatus } =
  useGeneralInfosQuery();
  console.log("monlogStakesData==>>",data)

  useEffect(() => {
    startPolling(10000);
    return stopPolling;
  }, [startPolling, stopPolling]);

  useEffect(() => {
    if (networkStatus === NetworkStatus.error) {
      console.log({ message: 'Network unavailable. Trying to connect...' });
    }
  }, [networkStatus]);

  return { generalInfos: convert(data), loading };
}
