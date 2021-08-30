import { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Accordion, AccordionDetails, AccordionSummary, Tooltip,  Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getShortAddress } from 'utils/utils';
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
    },
    row: {
      backgroundColor: '#1e4061',
      color: 'white',
    },
    icon: {
      fill: 'white',
    },
    link: {
      color: 'white',
    },
    tooltip: {
      fontSize: '12pt',
    },
  }),
);  

export const StakerGrid = ({ data, page, rowsPerPage }) => {
  console.log(data, page, rowsPerPage)
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    console.log(event.target)
    setExpanded(isExpanded ? panel : false);
  };

  
  return (
    <>
      <div className="staker-header">
        <span>#</span>
        <span>Account</span>
        <span>Market</span>        
      </div>
      <div className={classes.root}>
        {data.map((staker, index) => {
          return (
          <Accordion className={classes.row} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.icon} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className="m-0"
            >
              <div className="staker-row">
                <span>{page * rowsPerPage + index + 1}</span> 
                <span><Tooltip title={<Typography className={classes.tooltip} >{staker.id}</Typography>} arrow ><div>{getShortAddress(staker.id)}</div></Tooltip></span>
                <span><Tooltip title={<Typography className={classes.tooltip} >{staker.market.id}</Typography>} arrow ><div>{getShortAddress(staker.market.id)}</div></Tooltip></span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Grid className="sub-row" container spacing={3}>
               
              </Grid>
            </AccordionDetails>
          </Accordion>)
        })}
      </div>
    </>
  );
}
