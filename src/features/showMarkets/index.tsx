// import { useQuery } from 'react-query';
// import { Market } from 'model';
// import Currency from 'components/LegacyCurrency';
import {
  Widget,
} from 'components';
import { useMonlogTrades } from 'graphqlAPI';

import style from './style.module.scss';


export const Markets = () => {
  const { monlogTrades } = useMonlogTrades();
  console.log(monlogTrades)
  

  return (
    <Widget.Component>
      <div>
        <div className={style.header}>
          <h2 className={style.heading}>Markets</h2>
        </div>
        {/* <DataGrid
          columns={[
            [
              { label: 'id' },
              { label: 'created' },
              { label: 'kind', colSpan: 2 },
              { label: 'param1', colSpan: 2 },
              { label: 'Staked Liquidity', sortable: true },
              { label: '24h Turnover', sortable: true },
              { label: '' },
            ],
            [
              { label: '' },
              { label: '' },
              { label: 'Current' },
              { label: '24h Change' },
              { label: 'Current' },
              { label: '24h Change' },
              { label: '' },
              { label: '' },
              { label: '' },
            ],
          ]}
          data={markets.map((market) => [
            <MarketName marketID={market.id} />,
            config.marketsNames[market.id].assetSymbol,
            <NumberTooltip.Component
              title={
                <Text typography="text-s">
                  {fractionToPercent(getRate('fixed', market), {
                    fractionDigits: 'all',
                  })}
                </Text>
              }
              placement="right"
            >
              {fractionToPercent(getRate('fixed', market))}
            </NumberTooltip.Component>,
            '-',
            <NumberTooltip.Component
              title={
                <Text typography="text-s">
                  {fractionToPercent(getRate('floating', market), {
                    fractionDigits: 'all',
                  })}
                </Text>
              }
              placement="right"
            >
              {fractionToPercent(getRate('floating', market))}
            </NumberTooltip.Component>,
            '-',
            <Currency amount={market.liquidity} code="BUSD" />,
            '-',
            <Button size="small" onClick={() => onTradeClick(market)}>
              Trade
            </Button>,
          ])} */}
        {/* /> */}
      </div>
    </Widget.Component>
  );
};

export default Markets;
