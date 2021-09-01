import { useEffect } from 'react';
import memoize from 'memoize-one';
import { usePositionsQuery, PositionsQuery } from '../types';

import { NetworkStatus } from '@apollo/client/core/networkStatus';

const convert = memoize(
  (response?: PositionsQuery): any=>
    response?.positions?.map((position) => ({
      id: position.id,
      account: position.account,
      isLong: position.isLong,
      isActive: position.isActive,
      isLiquidated: position.isLiquidated,
      collateral: position.collateral,
      leverage: position.leverage,
    })) ?? [],
);

export const usePositions = () => {
  
  const { data, loading, startPolling, stopPolling, networkStatus } =
  usePositionsQuery();
  console.log("Position==>>",data)

  useEffect(() => {
    startPolling(10000);
    return stopPolling;
  }, [startPolling, stopPolling]);

  useEffect(() => {
    if (networkStatus === NetworkStatus.error) {
      console.log({ message: 'Network unavailable. Trying to connect...' });
    }
  }, [networkStatus]);

  return { positions: convert(data), loading };
}
