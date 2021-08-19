import { BN } from 'utils/bigNumber';

export type PositionKind = 'long' | 'short';
export type CurrencyID = 'busd' | 'slp' | 'sip';

export type MonlogTrades = {
  id: string;
  created: BN;
  kind: number;
  param1: BN;
  param2: BN;
};

