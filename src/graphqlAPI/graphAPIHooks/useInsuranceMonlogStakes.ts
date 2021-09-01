import { useEffect, useState } from 'react';
import memoize from 'memoize-one';

// import { MonlogTrades } from 'model';
import { useInsuranceMonlogStakesQuery, InsuranceMonlogStakesQuery } from '../types';

import { NetworkStatus } from '@apollo/client/core/networkStatus';

const convert = memoize(
  (response?: InsuranceMonlogStakesQuery): any=>
    response?.insuranceMonlogStakes?.map((insuranceMonlogStake) => ({
      id: insuranceMonlogStake.id,
      kind: insuranceMonlogStake.kind,
      param1: insuranceMonlogStake.param1,
    })) ?? [],
);

export const useInsuranceMonlogStakes = (first, sk) => {
  
  const [filter, setFilter] = useState({})
  const { data, loading, startPolling, stopPolling, networkStatus } =
    useInsuranceMonlogStakesQuery(filter);
  console.log("InsuranceMonlogStakes==>>",data)
  useEffect(() => {

    let _filter = {};
    _filter['first'] = first;
    _filter['sk'] = sk
    console.log("Query Filter:", _filter);
    setFilter(_filter);

  },[first,sk])

  useEffect(() => {
    startPolling(10000);
    return stopPolling;
  }, [startPolling, stopPolling, filter]);

  useEffect(() => {
    if (networkStatus === NetworkStatus.error) {
      console.log({ message: 'Network unavailable. Trying to connect...' });
    }
  }, [networkStatus]);

  return { insuranceMonlogStakes: convert(data), loading };
}
