import { memo, useMemo } from 'react';
import block from 'bem-cn-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import nerveLogo from 'assets/market_nerve.png';
import { config } from 'config';


type Props = {
  marketID: string;
  withAssetSymbol?: boolean;
};

const b = block('market-name');

const MarketName = ({ marketID, withAssetSymbol }: Props) => {
  console.log(marketID, config);
  const logo = useMemo(
    () => (config.marketsNames[marketID] ? nerveLogo : ''),
    [marketID],
  );
  console.log("marketId->>",marketID)
  return (
    <div className={b()}>
      <img
        src={logo}
        alt={config.marketsNames[marketID]?.name}
        className={b('icon')}
      />
      <div className={b('name')}>{config.marketsNames[marketID]?.name}</div>
      {withAssetSymbol && (
        <>
          <FontAwesomeIcon
            icon={faAngleRight}
            className={b('arrow')}
            size="sm"
          />
          <div className={b('symbol')}>
            {config.marketsNames[marketID]?.assetSymbol}
          </div>
        </>
      )}
    </div>
  );
};

const Component = memo(MarketName);
export { Component as MarketName };
