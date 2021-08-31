import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import StoreMallDirectoryTwoToneIcon from '@material-ui/icons/StoreMallDirectoryTwoTone';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import EmojiPeopleTwoToneIcon from '@material-ui/icons/EmojiPeopleTwoTone';
import { block } from 'utils/utils';

const b = block('statistics-card');

const StatisticsCard = ( {value, subValue, title, index} ) => {
  const colors = ['rgb(26, 188, 156)', 'rgb(46, 204, 113)', 'rgb(52, 152, 219)', 'rgb(255, 117, 136)', 'rgb(241, 196, 15)']
  const items = [
    <StoreMallDirectoryTwoToneIcon className={b('icon')} style={{color: colors[0]}} />,
    <TransferWithinAStationIcon className={b('icon')} style={{color: colors[1]}} />,
    <EmojiPeopleTwoToneIcon className={b('icon')} style={{color: colors[2]}} />,
    <LocationOnTwoToneIcon className={b('icon')} style={{color: colors[3]}} />,
    <ThumbUpAltTwoToneIcon className={b('icon')} style={{color: colors[4]}} />,
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