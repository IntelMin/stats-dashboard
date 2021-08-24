import { useEffect, useState } from 'react';
import memoize from 'memoize-one';

import { MonlogTrades } from 'model';
import { useMonlogTradesQuery, MonlogTradesQuery } from '../types';

import { NetworkStatus } from '@apollo/client/core/networkStatus';

const convert = memoize(
  (response?: MonlogTradesQuery): MonlogTrades[] =>
    response?.monlogTrades?.map((monlogtrade) => ({
      id: monlogtrade.id,
      created: monlogtrade.created,
      kind: monlogtrade.kind,
      param1: monlogtrade.param1,
      param2: monlogtrade.param2,
      market: monlogtrade.market,
    })) ?? [],
);

export const useMonlogTrades = (market, kind) => {

  const [filter, setFilter] = useState({})
  const { data, loading, startPolling, stopPolling, networkStatus } =
    useMonlogTradesQuery(filter);
  
  useEffect(() => {

    let _filter = {};

    if(kind !== -1)
      _filter['kind'] = kind;
      
    if(market !== '')
      _filter['market'] = market;

    console.log("Query Filter:", _filter);
    setFilter(_filter);

  },[market,kind])

  useEffect(() => {
    startPolling(10000);
    return stopPolling;
  }, [startPolling, stopPolling, filter]);

  useEffect(() => {
    if (networkStatus === NetworkStatus.error) {
      console.log({ message: 'Network unavailable. Trying to connect...' });
    }
  }, [networkStatus]);

  return { monlogTrades: convert(data), loading };
}
