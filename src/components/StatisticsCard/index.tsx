import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import StoreMallDirectoryTwoToneIcon from '@material-ui/icons/StoreMallDirectoryTwoTone';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import GavelTwoToneIcon from '@material-ui/icons/GavelTwoTone';
import ThumbsUpDownTwoToneIcon from '@material-ui/icons/ThumbsUpDownTwoTone';
import OpacityTwoToneIcon from '@material-ui/icons/OpacityTwoTone';
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';

import { block } from 'utils/utils';

const b = block('statistics-card');

const StatisticsCard = ( {value, subValue, title, index} ) => {
  const colors = ['rgb(26, 188, 156)', 'rgb(46, 204, 113)', 'rgb(52, 152, 219)', 'rgb(255, 117, 136)', 'rgb(241, 196, 15)', 'rgb(26, 188, 156)', 'rgb(241, 196, 15)', 'rgb(26, 188, 156)']
  const items = [
    <StoreMallDirectoryTwoToneIcon className={b('icon')} style={{color: colors[0]}} />,
    <TransferWithinAStationIcon className={b('icon')} style={{color: colors[1]}} />,
    <GavelTwoToneIcon className={b('icon')} style={{color: colors[2]}} />,
    <AddShoppingCartTwoToneIcon className={b('icon')} style={{color: colors[3]}} />,
    <ThumbUpAltTwoToneIcon className={b('icon')} style={{color: colors[4]}} />,
    <OpacityTwoToneIcon className={b('icon')} style={{color: colors[5]}} />,
    <ThumbsUpDownTwoToneIcon className={b('icon')} style={{color: colors[6]}} />,
    <WorkTwoToneIcon className={b('icon')} style={{color: colors[7]}} />,
  ]
  return (
    <Card className={b('root')}>
        <div className="flex">
          <div>
            <CountUp redraw useEasing style={{color: colors[index]}} className={b('number')} end={value} duration={2} />
            {subValue!='null' ? 
              <span className={b('opened')} style={{color: colors[index]}} >
                (<CountUp redraw useEasing end={subValue} duration={2} /> 
                <span className={b('opened')}>Opened</span>) 
              </span> 
            : ""}
            <Typography className={b('title')} >
              {title}
            </Typography>
          </div>
          {items[index]}
        </div>
    </Card>
  );
}

export default StatisticsCard;