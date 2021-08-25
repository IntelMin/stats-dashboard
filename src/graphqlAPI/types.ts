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

export type Markets = {
  __typename?: 'markets';
  /**  address of contract  */
  id: Scalars['ID'];
};

export type MonlogTradesQuery = (
  { __typename?: 'Query' }
  & { monlogTrades: Array<(
        { __typename?: 'MonlogTrade' }
        & Pick<MonlogTrade, 'id' | 'created' | 'kind' | 'param1' | 'param2' |'market'>
      )> 
      markets: Array<(
      { __typename?: 'Market' }
      & Pick<Markets, 'id'>
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
    query markets {
      markets (first:${op.first|10},skip:${op.sk|0}) {
        id
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
  & { markets: Array<(
      { __typename?: 'Market' }
      & Pick<Markets, 'id'>
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

