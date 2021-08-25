import { useEffect, useState } from 'react';
import memoize from 'memoize-one';

// import { MonlogTrades } from 'model';
import { useMonlogTradesQuery, MonlogTradesQuery } from '../types';

import { NetworkStatus } from '@apollo/client/core/networkStatus';

const convert = memoize(
  (response?: MonlogTradesQuery): any=>
    response?.monlogTrades?.map((monlogtrade) => ({
      id: monlogtrade.id,
      created: monlogtrade.created,
      kind: monlogtrade.kind,
      param1: monlogtrade.param1,
      param2: monlogtrade.param2,
      market: monlogtrade.market,
    })) ?? [],
);

const convert1 = memoize(
  (response?: MonlogTradesQuery): any=>
    response?.markets?.map((market) => ({
      id: market.id
    })) ?? [],
);

export const useMonlogTrades = (market, kind, first, sk) => {
  
  const [filter, setFilter] = useState({})
  const { data, loading, startPolling, stopPolling, networkStatus } =
    useMonlogTradesQuery(filter);
  console.log("monlogData==>>",data)
  useEffect(() => {

    let _filter = {};
    _filter['filter'] = {};
    if(kind !== -1)
      _filter['filter']['kind'] = kind;
      
    if(market !== '-')
      _filter['filter']['market'] = market;

    _filter['first'] = first;
    _filter['sk'] = sk
    console.log("Query Filter:", _filter);
    setFilter(_filter);

  },[market,kind,first,sk])

  useEffect(() => {
    startPolling(10000);
    return stopPolling;
  }, [startPolling, stopPolling, filter]);

  useEffect(() => {
    if (networkStatus === NetworkStatus.error) {
      console.log({ message: 'Network unavailable. Trying to connect...' });
    }
  }, [networkStatus]);

  return { monlogTrades: convert(data), markets: convert1(data), loading };
}
