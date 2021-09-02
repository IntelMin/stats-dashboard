import { useEffect, useState } from 'react';
import memoize from 'memoize-one';

// import { MonlogTrades } from 'model';
import { useMonlogStakesQuery, MonlogStakesQuery } from '../types';

import { NetworkStatus } from '@apollo/client/core/networkStatus';

const convert = memoize(
  (response?: MonlogStakesQuery): any=>
    response?.monlogStakes?.map((monlogStake) => ({
      id: monlogStake.id,
      created: monlogStake.created,
      kind: monlogStake.kind,
      param1: monlogStake.param1,
      market: monlogStake.market,
      account: monlogStake.account
    })) ?? [],
);

const convert1 = memoize(
  (response?: MonlogStakesQuery): any=>
    response?.markets?.map((market) => ({
      id: market.id
    })) ?? [],
);
export const useMonlogStakes = (market, kind, first, sk) => {
  
  const [filter, setFilter] = useState({})
  const { data, loading, startPolling, stopPolling, networkStatus } =
  useMonlogStakesQuery(filter);
  console.log("monlogStakesData==>>",data)
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

  return { monlogStakes: convert(data), markets: convert1(data), loading };
}
