import { useState, useEffect } from 'react';
import memoize from 'memoize-one';

import { useMarketsQuery, MarketsQuery } from '../types';

import { NetworkStatus } from '@apollo/client/core/networkStatus';

const convert = memoize(
  (response?: MarketsQuery): any =>
    response?.monlogMarkets?.map((market) => ({
      id: market.id,
      demand: market.demand,
      marketPrice: market.marketPrice,
      ratio: market.ratio,
      stakedLiquidity: market.stakedLiquidity,
      supply: market.supply,
      totalLongs: market.totalLongs,
      totalLongsHistorical: market.totalLongsHistorical,
      totalShorts: market.totalShorts,
      totalShortsHistorical: market.totalLongsHistorical,
      totalStakers: market.totalStakers,
      totalTraders: market.totalTraders,
      unrealizedPNL: market.unrealizedPNL
    })) ?? [],
);
const convert1 = memoize(
    (response?: MarketsQuery): any =>
      response?.monlogTrades?.length ?? 0,
  );

export const useMarkets = (first, sk) => {
  const [pagination, setPagination] = useState({})

  const { data, loading, startPolling, stopPolling, networkStatus } =
    useMarketsQuery(pagination);
  
  useEffect(() => {
    let _pagination = {};
    _pagination['first'] = first;
    _pagination['sk'] = sk
    console.log("Query Filter:", _pagination);
    setPagination(_pagination);
  },[first, sk])
  useEffect(() => {
    startPolling(10000);
    return stopPolling;
  }, [startPolling, stopPolling, pagination]);

  useEffect(() => {
    if (networkStatus === NetworkStatus.error) {
      console.log({ message: 'Network unavailable. Trying to connect...' });
    }
  }, [networkStatus]);

  return { markets: convert(data), tradeLogsCount: convert1(data), loading };
}
