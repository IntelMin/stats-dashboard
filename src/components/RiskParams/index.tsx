import Typography from '@material-ui/core/Typography';
import { CardHeader, Card, CardContent } from '@material-ui/core';
import { block, BNtoNum } from '../../utils/utils'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const b = block("risk-params");
const RiskParams = ( riskParams :any) => {
  console.log("riskParams--->>",riskParams)
  return (
    <Card className={b('root')}>
      <CardHeader
        title={<div><ErrorOutlineIcon className={b('header-icon')} />Risk Params</div>}
        className={b('header')}
      />
      <CardContent>
        <Typography className={b('card-body')} >
          <span> {"Fund Fee Ratio: "} </span><span>{BNtoNum(riskParams.riskParams.fundFeeRatio)}</span>
        </Typography>
        <Typography className={b('card-body')} >
          <span> {"Insurance Profit On Position Closed: "} </span> <span>{BNtoNum(riskParams.riskParams.insuranceProfitOnPositionClosed)}</span>
        </Typography>
        <Typography className={b('card-body')} >
          <span> {"Liquidation Margin Ratio: "} </span> <span>{ BNtoNum(riskParams.riskParams.liquidationMarginRatio) }</span>
        </Typography>
        <Typography className={b('card-body')} >
          <span> {"Liquidator Fee Ratio: "} </span> <span>{ BNtoNum(riskParams.riskParams.liquidatorFeeRatio) }</span>
        </Typography>
        <Typography className={b('card-body')} >
          <span> {"Market Fee Ratio: "} </span> <span>{ BNtoNum(riskParams.riskParams.marketFeeRatio)}</span>
        </Typography>
        <Typography className={b('card-body')} >
          <span> {"Minimum Price Possible: "} </span> <span>{ BNtoNum(riskParams.riskParams.minimumPricePossible) }</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RiskParams;