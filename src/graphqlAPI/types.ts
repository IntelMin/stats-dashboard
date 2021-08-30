import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { stringifyWithoutQuotes } from '../utils/utils';
import { MonlogTrades } from 'model';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export const MonlogTradesDocument = (op) => {
  const query = `
    query monlogTrades {
      monlogTrades (where:${stringifyWithoutQuotes(op.filter||{})},first:${op.first},skip:${op.sk}) {
        id
        created
        kind
        param1
        param2
        market{
          id
        }
      }
      markets {
        id
      }
    }
  `;
  console.log("Query: ", query);
  return gql(query);
} 

/**
 * __useMarketsQuery__
 *
 * To run a query within a React component, call `useMarketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: useMonlogTradesQueryhttps://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketsQuery({
 *   variables: {
 *   },
 * });
 */

export type MonlogTrade = {
  __typename?: 'monlogTrades';
  /**  address of contract  */
  id: Scalars['ID'];
  created: Scalars['BigInt'];
  kind: Scalars['Int'];
  param1: Scalars['BigDecimal'];
  param2: Scalars['BigDecimal'];
  market:{
    id:Scalars['ID']
  }

};

export type MonlogMarkets = {
  __typename?: 'monlogMarkets';
  /**  address of contract  */
  id: Scalars['ID'];
  totalTraders: Scalars['Int'];
  totalStakers: Scalars['Int'];
  totalLongs: Scalars['Int'];
  totalShorts: Scalars['Int'];
  totalLongsHistorical: Scalars['Int'];
  totalShortsHistorical: Scalars['Int'];
  ratio : Scalars['Int'];
  demand: Scalars['Int'];
  supply: Scalars['Int'];
  stakedLiquidity: Scalars['Int'];
  unrealizedPNL: Scalars['Int'];
  initialPrice: Scalars['Int'];
  marketPrice: Scalars['Int'];
  created: Scalars['BigInt'];
};

export type MonlogTradesQuery = (
  { __typename?: 'Query' }
  & { monlogTrades: Array<(
        { __typename?: 'MonlogTrade' }
        & Pick<MonlogTrade, 'id' | 'created' | 'kind' | 'param1' | 'param2' |'market'>
      )> 
      markets: Array<(
      { __typename?: 'Market' }
      & Pick<MonlogMarkets, 'id'>
      )> 
    }
);

export type MonlogTradesQueryVariables = any;

export const useMonlogTradesQuery = (baseOptions?: Apollo.QueryHookOptions<MonlogTradesQuery, MonlogTradesQueryVariables>) => {
  const options = {...defaultOptions, ...baseOptions}
  
  console.log("options-->",options)
  return Apollo.useQuery<MonlogTradesQuery, MonlogTradesQueryVariables>(MonlogTradesDocument(options), options);
}
export const useMonlogTradesLazyQuery = (baseOptions?: Apollo.LazyQueryHookOptions<MonlogTradesQuery, MonlogTradesQueryVariables>) => {
  const options = {...defaultOptions, ...baseOptions}
  
  return Apollo.useLazyQuery<MonlogTradesQuery, MonlogTradesQueryVariables>(MonlogTradesDocument(options), options);
}
export type MarketsQueryHookResult = ReturnType<typeof useMonlogTradesQuery>;
export type MarketsLazyQueryHookResult = ReturnType<typeof useMonlogTradesLazyQuery>;
export type MarketsQueryResult = Apollo.QueryResult<MonlogTradesQuery, MonlogTradesQueryVariables>;

export const MarketsDocument = (op) => {
  console.log("op-->>",op)
  const query = `
    query monlogMarkets  {
      monlogMarkets (first:${op.first|10},skip:${op.sk|0}) {
        id
        demand
        marketPrice
        ratio
        stakedLiquidity
        supply
        totalLongs
        totalLongsHistorical
        totalShorts
        totalShortsHistorical
        totalStakers
        totalTraders
        unrealizedPNL
        created
      }
      monlogTrades{
        id
      }
    }
  `;
  return gql(query);
} 

export type MarketsQuery = (
  {
  __typename?: 'Query' }
  & { monlogMarkets: Array<(
      { __typename?: 'monlogMarkets' }
      & Pick<MonlogMarkets, 'id' | 'demand' | 'marketPrice' | 'ratio' | 'stakedLiquidity' | 'supply' | 'totalLongs' | 'totalLongsHistorical' | 'totalShorts' | 'totalShortsHistorical' | 'totalStakers' | 'totalTraders' | 'unrealizedPNL' | 'created'>
      )> 
     monlogTrades: Array<(
      { __typename?: 'MonlogTrades' }
      & Pick<MonlogTrades, 'id'>
     )>
})
export type MarketsQueryVariables = any;
export const useMarketsQuery = (baseOptions?: Apollo.QueryHookOptions<MarketsQuery, MarketsQueryVariables>) => {
  const options = {...defaultOptions, ...baseOptions}
  
  console.log("options-->",options)
  return Apollo.useQuery<MarketsQuery, MarketsQueryVariables>(MarketsDocument(options), options);
}


export type MonlogStake = {
  __typename?: 'monlogTrades';
  id: Scalars['ID'];
  created: Scalars['BigInt'];
  kind: Scalars['Int'];
  param1: Scalars['BigDecimal'];
  market:{
    id:Scalars['ID']
  }
};

export const MonlogStakesDocument = (op) => {
  const query = `
    query monlogStakes {
      monlogStakes (where:${stringifyWithoutQuotes(op.filter||{})},first:${op.first},skip:${op.sk}) {
        id
        created
        kind
        param1
        market{
          id
        }
      }
      markets {
        id
      }
    }
  `;
  console.log("Query: ", query);
  return gql(query);
} 



export type MonlogStakesQueryVariables = any;

export const useMonlogStakesQuery = (baseOptions?: Apollo.QueryHookOptions<MonlogStakesQuery, MonlogStakesQueryVariables>) => {
  const options = {...defaultOptions, ...baseOptions}
  
  console.log("options-->",options)
  return Apollo.useQuery<MonlogStakesQuery, MonlogStakesQueryVariables>(MonlogStakesDocument(options), options);
}
export type MonlogStakesQuery = (
  { __typename?: 'Query' }
  & { monlogStakes: Array<(
        { __typename?: 'MonlogStake' }
        & Pick<MonlogStake, 'id' | 'created' | 'kind' | 'param1' |'market'>
      )> 
      markets: Array<(
        { __typename?: 'Market' }
        & Pick<MonlogMarkets, 'id'>
        )> 
    }
);

export type GeneralInfo = {
  __typename?: 'monlogStripsInfos';
  id: Scalars['ID'];
  totalTraders: Scalars['BigDecimal'];
  totalStakers: Scalars['BigDecimal'];
  totalLongs: Scalars['BigDecimal'];
  totalLongsHistorical: Scalars['BigDecimal'];
  totalShorts: Scalars['BigDecimal'];
  totalShortsHistorical: Scalars['BigDecimal'];
  totalCollaterals: Scalars['BigDecimal'];
  riskParams: {

  }
};
export const GeneralInfosDocument = () => {
  const query = `
    query monlogStripsInfos {
      monlogStripsInfos {
        id
        totalTraders
        totalStakers
        totalLongs
        totalLongsHistorical
        totalShorts
        totalShortsHistorical
        totalCollaterals
      }
    }
  `;
  console.log("Query: ", query);
  return gql(query);
} 

export type GeneralInfosQueryVariables = any;
export const useGeneralInfosQuery = (baseOptions?: Apollo.QueryHookOptions<GeneralInfosQuery, GeneralInfosQueryVariables>) => {
  const options = {...defaultOptions, ...baseOptions}
  
  console.log("options-->",options)
  return Apollo.useQuery<GeneralInfosQuery, GeneralInfosQueryVariables>(GeneralInfosDocument(), options);
}
export type GeneralInfosQuery = (
  { __typename?: 'Query' }
  & { monlogStripsInfos: Array<(
        { __typename?: 'GeneralInfo' }
        & Pick<GeneralInfo, 'id' | 'totalTraders' | 'totalStakers' | 'totalLongs' | 'totalLongsHistorical' | 'totalShorts' | 'totalShortsHistorical' | 'totalCollaterals' >
      )> 
    }
);

export type Trader = {
  __typename?: 'traders';
  id: Scalars['ID'];
  market: {
    id: Scalars['ID'];
  }
};
export const TradersDocument = (op) => {
  const query = `
    query traders {
      traders(where:${stringifyWithoutQuotes(op.filter||{})},first:${op.first},skip:${op.sk}){
        id
        market{
          id
        }
      }
      markets {
        id
      }
    }
  `;
  console.log("Query: ", query);
  return gql(query);
} 

export type TradersQueryVariables = any;
export const useTradersQuery = (baseOptions?: Apollo.QueryHookOptions<TradersQuery, TradersQueryVariables>) => {
  const options = {...defaultOptions, ...baseOptions}
  
  console.log("options-->",options)
  return Apollo.useQuery<TradersQuery, TradersQueryVariables>(TradersDocument(options), options);
}
export type TradersQuery = (
  { __typename?: 'Query' }
  & { traders: Array<(
        { __typename?: 'Traders' }
        & Pick<Trader, 'id' | 'market'>
      )> 
      markets: Array<(
        { __typename?: 'Market' }
        & Pick<MonlogMarkets, 'id'>
        )> 
    }
);

export type Staker = {
  __typename?: 'stakers';
  id: Scalars['ID'];
  market: {
    id: Scalars['ID'];
  }
};
export const StakersDocument = (op) => {
  const query = `
    query stakers {
      stakers(where:${stringifyWithoutQuotes(op.filter||{})},first:${op.first},skip:${op.sk}){
        id
        market{
          id
        }
      }
      markets {
        id
      }
    }
  `;
  console.log("Query: ", query);
  return gql(query);
} 

export type StakersQueryVariables = any;
export const useStakersQuery = (baseOptions?: Apollo.QueryHookOptions<StakersQuery, StakersQueryVariables>) => {
  const options = {...defaultOptions, ...baseOptions}
  
  console.log("options-->",options)
  return Apollo.useQuery<StakersQuery, StakersQueryVariables>(StakersDocument(options), options);
}
export type StakersQuery = (
  { __typename?: 'Query' }
  & { stakers: Array<(
        { __typename?: 'Stakers' }
        & Pick<Staker, 'id' | 'market'>
      )> 
      markets: Array<(
        { __typename?: 'Market' }
        & Pick<MonlogMarkets, 'id'>
        )> 
    }
);



