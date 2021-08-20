import configurationObject from './config.json';

export type ChainID = 97 | 56;

type Config = {
  chainID: ChainID;
  graphAPIUrl: string
  views: {
    eventsLogs: boolean;
  };
  marketsNames: {
    [id: string]: {
      name: string;
      assetSymbol: string;
    };
  };
};


const chainID = (Number(configurationObject.chainID) as ChainID) ?? 97;

export const config = ((): Config => ({
  chainID,
  views: {
    eventsLogs: configurationObject.views.eventsLogs ?? true
  },
  graphAPIUrl: configurationObject.graphAPIUrl,
  marketsNames: configurationObject.marketsNames,
}))();


