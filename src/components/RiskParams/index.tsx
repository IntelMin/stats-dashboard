import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Card, CardContent } from '@material-ui/core';
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

const RiskParams = ( {} ) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Risk Params"
        className={classes.header}
      />
      <CardContent>
        <Typography className={classes.body} >
          {"hello"}
        </Typography>
        <Typography className={classes.body} >
          {"hello"}
        </Typography>
        <Typography className={classes.body} >
          {"hello"}
        </Typography>
        <Typography className={classes.body} >
          {"hello"}
        </Typography>
        <Typography className={classes.body} >
          {"hello"}
        </Typography>
        <Typography className={classes.body} >
          {"hello"}
        </Typography>
        <Typography className={classes.body} >
          {"hello"}
        </Typography>
        <Typography className={classes.body} >
          {"hello"}
        </Typography>
        <Typography className={classes.body} >
          {"hello"}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RiskParams;