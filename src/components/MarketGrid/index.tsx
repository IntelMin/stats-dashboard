import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Accordion, AccordionDetails, AccordionSummary, Tooltip, Link, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';
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

export const MarketGrid = ({ data, page, rowsPerPage }) => {
  console.log(data, page, rowsPerPage)
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    console.log(event.target)
    setExpanded(isExpanded ? panel : false);
  };

  
  return (
    <>
      <div className="market-header">
        <span>#</span>
        <span>Name</span>
        <span>Asset Symbol</span>
        <span>Created At</span>
        <span>Address</span>
        <span>Liquidity</span>
        <span>Staked Liquidity</span>
        
      </div>
      <div className={classes.root}>
        {data.map((market, index) => {
          return (
          <Accordion className={classes.row} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.icon} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className="m-0"
            >
              <div className="row">
                <span>{page * rowsPerPage + index + 1}</span>
                <span>{market.name}</span>
                <span>{market.assetSymbol}</span>
                <span><Link href="https://www.google.com/" onClick={(e) => e.stopPropagation()} className={classes.link}>{market.created}</Link></span>
                <span><Tooltip title={<Typography className={classes.tooltip} >{market.id}</Typography>} arrow ><div>{getShortAddress(market.id)}</div></Tooltip></span>
                <span>{market.liquidity}</span>
                <span>{market.stakedPnl}</span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Grid className="sub-row" container spacing={3}>
                <Grid item xs={6} >
                  <span>{`Market Price: ${market.price.marketPrice}`}</span>
                  <span>{`Oracle Price: ${market.price.oraclePrice}`}</span>
                  <span>{`Demand: ${"0"}`}</span>
                  <span>{`Supply: ${"0"}`}</span>
                  <span>{`Positions: ${"0"}`}</span>
                  <span className="hidden">{`Created At: ${"0"}`}</span>
                  <span className="hidden">{`Liquidity: ${"0"}`}</span>
                  <span className="hidden">{`Staked Liquidity: ${"0"}`}</span>
                </Grid>
                <Grid item xs={6}>
                  <span>{`Total Fee: ${"0"}`}</span>
                  <span>{`Total Traders: ${"0"}`}</span>
                  <span>{`Total Stakers: ${"0"}`}</span>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>)
        })}
      </div>
    </>
  );
}
