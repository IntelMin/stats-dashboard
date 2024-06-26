import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button, Tooltip, Typography } from '@material-ui/core';
import { block, getShortAddress } from 'utils/utils';
import { getStringFromTimestamp, BNtoNum } from '../../utils/utils';
import { MarketName } from '../../components';
import { config } from 'config';
const b = block('module-card');

const ModuleCard = ( {market} ) => {
  console.log("market-->", market)
  const [showDetail, setShowDetail] = useState<boolean>(false);

  return (
    <Card className={b('root')}>
      <CardContent className={b('content')}>
        <div className="flex">
          {/* <span>Name:</span> */}
          <span><MarketName marketID={market.id} /></span>
        </div>
        <div className="flex">
          <span>Asset Symbol:</span>
          <span>{config.marketsNames[market.id].assetSymbol}</span>
        </div>
        <div className="flex">
          <span>Created At:</span>
          <span><a href="https://www.google.com/" className={b('link')}>{getStringFromTimestamp(market.created)}</a></span>
        </div>
        <div className="flex">
          <span>Address:</span>
          <span><Tooltip title={<Typography className={b('tooltip')} >{market.id}</Typography>} arrow ><div>{getShortAddress(market.id)}</div></Tooltip></span>
        </div>
        
        <div className="flex">
          <span>Staked Liquidity:</span>
          <span>{BNtoNum(market.stakedLiquidity)}</span>
        </div>
        <div className="card-footer">
          <Button className={b('action')} onClick={() => setShowDetail(!showDetail)}>
            {!showDetail ? "Detail" : "hide"}
          </Button>
        </div>
        {showDetail && <div>
          <div className="flex">
            <span>Market Price:</span>
            <span>{BNtoNum(market.marketPrice)}</span>
          </div>
          <div className="flex">
            <span>Demand:</span>
            <span>{BNtoNum(market.demand)}</span>
          </div>
          <div className="flex">
            <span>Supply:</span>
            <span>{BNtoNum(market.supply)}</span>
          </div>
          <div className="flex">
            <span>Total Traders:</span>
            <span>{market.totalTraders}</span>
          </div>
          <div className="flex">
            <span>Total Stakers:</span>
            <span>{market.totalStakers}</span>
          </div>
          <div className="flex">
            <span>Total Longs:</span>
            <span>{BNtoNum(market.totalLongs)}</span>
          </div>
          <div className="flex">
            <span>Total Shorts:</span>
            <span>{BNtoNum(market.totalShorts)}</span>
          </div>
          <div className="flex">
            <span>Total Longs Count (Historical):</span>
            <span>{market.totalLongsHistorical}</span>
          </div>
          <div className="flex">
            <span>Total Shorts Count (Historical):</span>
            <span>{market.totalShortsHistorical}</span>
          </div>
       
        </div>}
      </CardContent>
    </Card>
  );
}
export default ModuleCard;