import { useEffect } from 'react';
import memoize from 'memoize-one';
import { useGeneralInfosQuery, GeneralInfosQuery } from '../types';

import { NetworkStatus } from '@apollo/client/core/networkStatus';

const convert = memoize(
  (response?: GeneralInfosQuery): any=>
    response?.monlogStripsInfos?.map((info) => ({
      totalTraders: info.totalTraders,
      totalStakers: info.totalStakers,
      totalLongs: info.totalLongs,
      totalShorts: info.totalShorts,
      totalShortsHistorical: info.totalShortsHistorical,
      totalCollaterals: info.totalCollaterals,
    })) ?? [],
);

export const useGeneralInfo = () => {
  
  const { data, loading, startPolling, stopPolling, networkStatus } =
  useGeneralInfosQuery();
  console.log("monlogStripsInfos==>>",data)

  useEffect(() => {
    startPolling(10000);
    return stopPolling;
  }, [startPolling, stopPolling]);

  useEffect(() => {
    if (networkStatus === NetworkStatus.error) {
      console.log({ message: 'Network unavailable. Trying to connect...' });
    }
  }, [networkStatus]);

  return { monlogStripsInfos: convert(data), loading };
}
