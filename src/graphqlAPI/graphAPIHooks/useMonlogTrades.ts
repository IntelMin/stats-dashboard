import { useEffect } from 'react';
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

export function useMonlogTrades() {
  const { data, loading, startPolling, stopPolling, networkStatus } =
  useMonlogTradesQuery({});

  useEffect(() => {
    startPolling(10000);
    return stopPolling;
  }, [startPolling, stopPolling]);

  useEffect(() => {
    if (networkStatus === NetworkStatus.error) {
      console.log({ message: 'Network unavailable. Trying to connect...' });
    }
  }, [networkStatus]);

  return { monlogTrades: convert(data), loading };
}
