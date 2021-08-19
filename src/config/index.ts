import configurationObject from './config.json';

export type ChainID = 97 | 56;

type Config = {
  chainID: ChainID;
  graphAPIUrl: string
  views: {
    overview: boolean;
    exchange: boolean;
    liquidity: boolean;
    insurance: boolean;
    receiveSUSD: boolean;
    feedbackContest: boolean;
    leverageYieldFarm: boolean;
  };

};

const configuration = getConfigWithLowerCasedIDs(configurationObject);

const chainID = (Number(configuration.chainID) as ChainID) ?? 97;

export const config = ((): Config => ({
  chainID,
  views: {
    insurance: configuration.views.insurance ?? true,
    liquidity: configuration.views.liquidity ?? true,
    overview: configuration.views.overview ?? true,
    exchange: configuration.views.exchange ?? true,
    receiveSUSD: configuration.views.receiveSUSD ?? true,
    feedbackContest: configuration.views.feedbackContest ?? true,
    leverageYieldFarm: configuration.views.leverageYieldFarm ?? true,
  },
  graphAPIUrl: configuration.graphAPIUrl,
}))();

function getConfigWithLowerCasedIDs(configObject: object) {
  const entries: [string, any][] = Object.entries(configObject).map(
    ([key, value]) => {
      const isID = (value: unknown) => {
        return typeof value === 'string' && value.startsWith('0x');
      };
      const newKey = isID(key) ? key.toLowerCase() : key;
      const newValue =
        value && typeof value === 'object'
          ? getConfigWithLowerCasedIDs(value)
          : isID(value)
          ? value.toLowerCase()
          : value;
      return [newKey, newValue];
    },
  );
  return Object.fromEntries(entries);
}

export const useConfig = () => {
  return getConfigWithLowerCasedIDs(configuration);
};
