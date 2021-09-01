import { useEffect, useState } from 'react';
import memoize from 'memoize-one';

// import { MonlogTrades } from 'model';
import { useInsuranceStakersQuery, InsuranceStakersQuery } from '../types';

import { NetworkStatus } from '@apollo/client/core/networkStatus';

const convert = memoize(
  (response?: InsuranceStakersQuery): any=>
    response?.insuranceStakers?.map((insuranceStaker) => ({
      id: insuranceStaker.id,
      amount: insuranceStaker.amount,
    })) ?? [],
);

export const useInsuranceStakers = (first, sk) => {
  
  const [filter, setFilter] = useState({})
  const { data, loading, startPolling, stopPolling, networkStatus } =
    useInsuranceStakersQuery(filter);
  console.log("insuranceStakers==>>",data)
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

  return { insuranceStakers: convert(data), loading };
}
