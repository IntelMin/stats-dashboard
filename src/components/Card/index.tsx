import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button, Tooltip, Typography } from '@material-ui/core';
import { getShortAddress } from 'utils/utils';
import { useState } from 'react';

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
  const classes = useStyles();
  const [showDetail, setShowDetail] = useState<boolean>(false);

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div className="flex">
          <span>Name:</span>
          <span>{market.name}</span>
        </div>
        <div className="flex">
          <span>Asset Symbol:</span>
          <span>{market.assetSymbol}</span>
        </div>
        <div className="flex">
          <span>Created At:</span>
          <span><a href="https://www.google.com/" className={classes.link}>{market.created}</a></span>
        </div>
        <div className="flex">
          <span>Address:</span>
          <span><Tooltip title={<Typography className={classes.tooltip} >{market.id}</Typography>} arrow ><div>{getShortAddress(market.id)}</div></Tooltip></span>
        </div>
        <div className="flex">
          <span>Liquidity:</span>
          <span>{market.liquidity}</span>
        </div>
        <div className="flex">
          <span>Staked Liquidity:</span>
          <span>{market.stakedPnl}</span>
        </div>
        <div className="card-footer">
          <Button className={classes.action} onClick={() => setShowDetail(!showDetail)}>
            {!showDetail ? "Detail" : "hide"}
          </Button>
        </div>
        {showDetail && <div>
          <div className="flex">
            <span>Market Price:</span>
            <span>{market.price.marketPrice}</span>
          </div>
          <div className="flex">
            <span>Oracle Price:</span>
            <span>{market.price.oraclePrice}</span>
          </div>
          <div className="flex">
            <span>Demand:</span>
            <span>{0}</span>
          </div>
          <div className="flex">
            <span>Supply:</span>
            <span>{0}</span>
          </div>
          <div className="flex">
            <span>Positions:</span>
            <span>{0}</span>
          </div>
          <div className="flex">
            <span>Total Fee:</span>
            <span>{0}</span>
          </div>
          <div className="flex">
            <span>Total Traders:</span>
            <span>{0}</span>
          </div>
          <div className="flex">
            <span>Total Stakers:</span>
            <span>{0}</span>
          </div>
        </div>}
      </CardContent>
    </Card>
  );
}
export default StatisticsCard;