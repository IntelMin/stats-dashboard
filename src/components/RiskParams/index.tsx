import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Card, CardContent } from '@material-ui/core';
import { BNtoNum } from '../../utils/utils'
const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white'
  },
  number: {
    fontSize: 44,
  },
  body: {
    fontSize: 20,
    color: '#e0e0e0'
  },
  header: {
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
  }
});
const RiskParams = ( riskParams :any) => {
  const classes = useStyles();
  console.log("riskParams--->>",riskParams)
  return (
    <Card className={classes.root}>
      <CardHeader
        title="Risk Params"
        className={classes.header}
      />
      <CardContent>
        <Typography className={classes.body} >
          <span> {"Fund Fee Ratio: "} </span> {BNtoNum(riskParams.riskParams.fundFeeRatio)}
        </Typography>
        <Typography className={classes.body} >
          <span> {"Insurance Profit On Position Closed: "} </span> {BNtoNum(riskParams.riskParams.insuranceProfitOnPositionClosed)}
        </Typography>
        <Typography className={classes.body} >
          <span> {"Liquidation Margin Ratio: "} </span> { BNtoNum(riskParams.riskParams.liquidationMarginRatio) }
        </Typography>
        <Typography className={classes.body} >
          <span> {"Liquidator Fee Ratio: "} </span> { BNtoNum(riskParams.riskParams.liquidatorFeeRatio) }
        </Typography>
        <Typography className={classes.body} >
          <span> {"Market Fee Ratio: "} </span> { BNtoNum(riskParams.riskParams.marketFeeRatio)}
        </Typography>
        <Typography className={classes.body} >
          <span> {"Minimum Price Possible: "} </span> { BNtoNum(riskParams.riskParams.minimumPricePossible) }
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RiskParams;