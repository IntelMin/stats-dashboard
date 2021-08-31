import { useEffect, useState } from 'react';
import memoize from 'memoize-one';

import { useTradersQuery, TradersQuery } from '../types';

import { NetworkStatus } from '@apollo/client/core/networkStatus';

const convert = memoize(
  (response?: TradersQuery): any=>
    response?.traders?.map((trader) => ({
      id: trader.id,
      market: trader.market
    })) ?? [],
);

const convert1 = memoize(
  (response?: TradersQuery): any=>
    response?.markets?.map((market) => ({
      id: market.id
    })) ?? [],
);

export const useTraders = (market, first, sk) => {
  
  const [filter, setFilter] = useState({})
  const { data, loading, startPolling, stopPolling, networkStatus } =
  useTradersQuery(filter);
  console.log("Traders==>>",data)
  useEffect(() => {
    let _filter = {};
    _filter['filter'] = {};     
    if(market !== '-')
      _filter['filter']['market'] = market;

    _filter['first'] = first;
    _filter['sk'] = sk
    console.log("Query Filter:", _filter);
    setFilter(_filter);

  },[market,first,sk])

  useEffect(() => {
    startPolling(10000);
    return stopPolling;
  }, [startPolling, stopPolling, filter]);

  useEffect(() => {
    if (networkStatus === NetworkStatus.error) {
      console.log({ message: 'Network unavailable. Trying to connect...' });
    }
  }, [networkStatus]);

  return { traders: convert(data), markets: convert1(data), loading };
}
