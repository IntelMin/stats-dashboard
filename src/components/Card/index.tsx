import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button, Tooltip, Typography } from '@material-ui/core';
import { getShortAddress } from 'utils/utils';
import { getStringFromTimestamp, BNtoNum } from '../../utils/utils';
import { MarketName } from '../../components';
import { config } from 'config';
const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
  },
  tooltip: {
    fontSize: '12pt',
  },
  link: {
    color: 'white',
  },
  action: {
    color: '#eed35d',
    textTransform: 'capitalize'
  },
  content: {
    paddingBottom: '12px !important'
  }
});

const StatisticsCard = ( {market} ) => {
  console.log("market-->", market)
  const classes = useStyles();
  const [showDetail, setShowDetail] = useState<boolean>(false);

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
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
          <span><a href="https://www.google.com/" className={classes.link}>{getStringFromTimestamp(market.created)}</a></span>
        </div>
        <div className="flex">
          <span>Address:</span>
          <span><Tooltip title={<Typography className={classes.tooltip} >{market.id}</Typography>} arrow ><div>{getShortAddress(market.id)}</div></Tooltip></span>
        </div>
        
        <div className="flex">
          <span>Staked Liquidity:</span>
          <span>{BNtoNum(market.stakedLiquidity)}</span>
        </div>
        <div className="card-footer">
          <Button className={classes.action} onClick={() => setShowDetail(!showDetail)}>
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
            <span>Total Longs:</span>
            <span>{market.totalLongs}</span>
          </div>
          <div className="flex">
            <span>Total Longs:</span>
            <span>{market.totalLongs}</span>
          </div>
          <div className="flex">
            <span>Total Longs Historical:</span>
            <span>{market.totalLongsHistorical}</span>
          </div>
          <div className="flex">
            <span>Total Shorts:</span>
            <span>{market.totalShorts}</span>
          </div>
          <div className="flex">
            <span>Total Shorts Historical:</span>
            <span>{market.totalShortsHistorical}</span>
          </div>
          <div className="flex">
            <span>Total Traders:</span>
            <span>{market.totalTraders}</span>
          </div>
          <div className="flex">
            <span>Total Stakers:</span>
            <span>{market.totalStakers}</span>
          </div>
        </div>}
      </CardContent>
    </Card>
  );
}
export default StatisticsCard;