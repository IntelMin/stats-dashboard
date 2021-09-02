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
        account{
          id
        }
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
  account: {
    id: Scalars['ID']
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
        & Pick<MonlogTrade, 'id' | 'created' | 'kind' | 'param1' | 'param2' |'market' | 'account'>
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
  market: {
    id: Scalars['ID']
  }
  account: {
    id: Scalars['ID']
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
        account{
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
        & Pick<MonlogStake, 'id' | 'created' | 'kind' | 'param1' |'market' | 'account'>
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
    insuranceProfitOnPositionClosed: Scalars['BigDecimal'];
    minimumPricePossible: Scalars['BigDecimal'];
    liquidationMarginRatio: Scalars['BigDecimal'];
    liquidatorFeeRatio: Scalars['BigDecimal'];
    fundFeeRatio: Scalars['BigDecimal'];
    marketFeeRatio: Scalars['BigDecimal'];
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
        riskParams {
          insuranceProfitOnPositionClosed
          minimumPricePossible
          liquidationMarginRatio
          liquidatorFeeRatio
          fundFeeRatio
          marketFeeRatio
        }
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
        & Pick<GeneralInfo, 'id' | 'totalTraders' | 'totalStakers' | 'totalLongs' | 'totalLongsHistorical' | 'totalShorts' | 'totalShortsHistorical' | 'totalCollaterals' |'riskParams'>
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

export type InsuranceFunds = {
  __typename?: 'insuranceFunds';
  id: Scalars['ID'];
  liquidity: Scalars['BigDecimal'];
  stakedPnl: Scalars['BigDecimal'];
  totalStakers: Scalars['BigDecimal'];
};
export const InsuranceFundsDocument = () => {
  const query = `
    query insuranceFunds {
      insuranceFunds {
        id
        liquidity
        stakedPnl
        totalStakers
      }
    }
  `;
  console.log("Query: ", query);
  return gql(query);
} 

export type InsuranceFundsQueryVariables = any;
export const useInsuranceFundsQuery = (baseOptions?: Apollo.QueryHookOptions<InsuranceFundsQuery, InsuranceFundsQueryVariables>) => {
  const options = {...defaultOptions, ...baseOptions}
  
  console.log("options-->",options)
  return Apollo.useQuery<InsuranceFundsQuery, InsuranceFundsQueryVariables>(InsuranceFundsDocument(), options);
}
export type InsuranceFundsQuery = (
  { __typename?: 'Query' }
  & { insuranceFunds: Array<(
        { __typename?: 'InsuranceFunds' }
        & Pick<InsuranceFunds, 'id' | 'liquidity' | 'stakedPnl' | 'totalStakers' >
      )> 
    }
);

export type InsuranceStakers = {
  __typename?: 'insuranceStakers';
  id: Scalars['ID'];
  amount: Scalars['BigDecimal'];
};
export const InsuranceStakersDocument = (op) => {
  const query = `
    query insuranceStakers {
      insuranceStakers(first:${op.first},skip:${op.sk}){
        id
        amount
      }
    }
  `;
  console.log("Query: ", query);
  return gql(query);
} 

export type InsuranceStakersQueryVariables = any;
export const useInsuranceStakersQuery = (baseOptions?: Apollo.QueryHookOptions<InsuranceStakersQuery, InsuranceStakersQueryVariables>) => {
  const options = {...defaultOptions, ...baseOptions}
  
  console.log("options-->",options)
  return Apollo.useQuery<InsuranceStakersQuery, InsuranceStakersQueryVariables>(InsuranceStakersDocument(options), options);
}
export type InsuranceStakersQuery = (
  { __typename?: 'Query' }
  & { insuranceStakers: Array<(
        { __typename?: 'InsuranceStakers' }
        & Pick<InsuranceStakers, 'id' | 'amount'>
      )> 
    }
);

export type InsuranceMonlogStake = {
  __typename?: 'insuranceMonlogStakes';
  id: Scalars['ID'];
  kind: Scalars['Int'];
  param1: Scalars['BigDecimal'];
};
export const InsuranceMonlogStakesDocument = (op) => {
  const query = `
    query insuranceMonlogStakes {
      insuranceMonlogStakes(first:${op.first},skip:${op.sk}){
        id
        kind
        param1
      }
    }
  `;
  console.log("Query: ", query);
  return gql(query);
} 

export type InsuranceMonlogStakesQueryVariables = any;
export const useInsuranceMonlogStakesQuery = (baseOptions?: Apollo.QueryHookOptions<InsuranceMonlogStakesQuery, InsuranceMonlogStakesQueryVariables>) => {
  const options = {...defaultOptions, ...baseOptions}
  
  console.log("options-->",options)
  return Apollo.useQuery<InsuranceMonlogStakesQuery, InsuranceMonlogStakesQueryVariables>(InsuranceMonlogStakesDocument(options), options);
}
export type InsuranceMonlogStakesQuery = (
  { __typename?: 'Query' }
  & { insuranceMonlogStakes: Array<(
        { __typename?: 'InsuranceMonlogStakes' }
        & Pick<InsuranceMonlogStake, 'id' | 'kind' | 'param1'>
      )> 
    }
);

export type Position = {
  __typename?: 'positions';
  id: Scalars['ID'];
  account: {
    id: Scalars['ID'];
  }
  isLong: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  isLiquidated: Scalars['Boolean'];
  collateral: Scalars['BigDecimal'];
  leverage: Scalars['BigDecimal'];
};
export const PositionsDocument = () => {
  const query = `
    query positions {
      positions {
        id
        account {
          id
        }
        isLong
        isActive
        isLiquidated
        collateral
        leverage
      }
    }
  `;
  console.log("Query: ", query);
  return gql(query);
} 

export type PositionsQueryVariables = any;
export const usePositionsQuery = (baseOptions?: Apollo.QueryHookOptions<PositionsQuery, PositionsQueryVariables>) => {
  const options = {...defaultOptions, ...baseOptions}
  
  console.log("options-->",options)
  return Apollo.useQuery<PositionsQuery, PositionsQueryVariables>(PositionsDocument(), options);
}
export type PositionsQuery = (
  { __typename?: 'Query' }
  & { positions: Array<(
        { __typename?: 'positions' }
        & Pick<Position, 'id' | 'account' | 'isLong' | 'isActive' | 'isLiquidated' | 'collateral' | 'leverage' >
      )> 
    }
);


export type MarketStake = {
  __typename?: 'marketStakes';
  id: Scalars['ID'];
  account: {
    id: Scalars['ID'];
  }
  market:  {
    id: Scalars['ID'];
  }
  slpTotal: Scalars['BigDecimal'];
  collateralTotal: Scalars['BigDecimal'];
  initialStakedPnl: Scalars['BigDecimal'];
};
export const MarketStakesDocument = () => {
  const query = `
    query marketStakes {
      marketStakes {
        id
        account {
          id
        }
        market {
          id
        }
        slpTotal
        collateralTotal
        initialStakedPnl

      }
    }
  `;
  console.log("Query: ", query);
  return gql(query);
} 

export type MarketStakesQueryVariables = any;
export const useMarketStakesQuery = (baseOptions?: Apollo.QueryHookOptions<MarketStakesQuery, MarketStakesQueryVariables>) => {
  const options = {...defaultOptions, ...baseOptions}
  
  console.log("options-->",options)
  return Apollo.useQuery<MarketStakesQuery, MarketStakesQueryVariables>(MarketStakesDocument(), options);
}
export type MarketStakesQuery = (
  { __typename?: 'Query' }
  & { marketStakes: Array<(
        { __typename?: 'marketStakes' }
        & Pick<MarketStake, 'id' | 'account' | 'market' | 'slpTotal' | 'collateralTotal' | 'initialStakedPnl' >
      )> 
    }
);