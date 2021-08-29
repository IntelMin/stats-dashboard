import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import StoreMallDirectoryTwoToneIcon from '@material-ui/icons/StoreMallDirectoryTwoTone';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import EmojiPeopleTwoToneIcon from '@material-ui/icons/EmojiPeopleTwoTone';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    padding: 24,
  },
  number: {
    fontSize: 44,
  },
  title: {
    fontSize: 22,
    color: '#ffffff'
  },
  icon: {
    fontSize: 75,
    // color: ,
  }
});

//    
const StatisticsCard = ( {value, title, index} ) => {
  const classes = useStyles();
  const colors = ['rgb(26, 188, 156)', 'rgb(46, 204, 113)', 'rgb(52, 152, 219)', 'rgb(255, 117, 136)', 'rgb(241, 196, 15)']
  const items = [
    <StoreMallDirectoryTwoToneIcon className={classes.icon} style={{color: colors[0]}} />,
    <TransferWithinAStationIcon className={classes.icon} style={{color: colors[1]}} />,
    <EmojiPeopleTwoToneIcon className={classes.icon} style={{color: colors[2]}} />,
    <LocationOnTwoToneIcon className={classes.icon} style={{color: colors[3]}} />,
    <ThumbUpAltTwoToneIcon className={classes.icon} style={{color: colors[4]}} />,
  ]
  return (
    <Card className={classes.root}>
      {/* <CardContent> */}
        <div className="flex">
          <div>
            <CountUp redraw useEasing style={{color: colors[index]}} className={classes.number} end={value} duration={2} />
            <Typography className={classes.title} >
              {title}
            </Typography>
          </div>
          {items[index]}
        </div>
      {/* </CardContent> */}
    </Card>
  );
}

export default StatisticsCard;