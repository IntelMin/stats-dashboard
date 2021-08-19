import BN from 'bignumber.js';

export const DECIMAL_PLACES = 18;

BN.config({ EXPONENTIAL_AT: 64, DECIMAL_PLACES });

const power = new BN(DECIMAL_PLACES);
const multiplier = new BN(10).pow(power);

export const zero = new BN(0);

export const format = (
  value: BN,
  decimals = DECIMAL_PLACES,
  roundMode = BN.ROUND_UP,
) => value.decimalPlaces(decimals, roundMode).toString();

export const formatPercent = (value: BN) =>
  value.times(100).decimalPlaces(2).toString();

export const to256 = (value: number | string | BN) => {
  return new BN(value)
    .decimalPlaces(DECIMAL_PLACES, BN.ROUND_DOWN)
    .multipliedBy(multiplier);
};

export const from256 = (value: number | string | BN) => {
  return new BN(value)
    .div(multiplier)
    .decimalPlaces(DECIMAL_PLACES, BN.ROUND_DOWN);
};

export { BN };
