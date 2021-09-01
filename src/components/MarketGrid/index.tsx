import { useState } from 'react';
import { Grid, Accordion, AccordionDetails, AccordionSummary, Tooltip, Link, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { block, getShortAddress } from 'utils/utils';
import { getStringFromTimestamp, BNtoNum } from '../../utils/utils';
import { MarketName } from '../../components';
import { config } from 'config';
const b = block('market-grid');
export const MarketGrid = ({ data, page, rowsPerPage }) => {
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
        <span>Total Longs</span>
        <span>Total Shorts</span>
        
      </div>
      <div className={b('root')}>
        {data.map((market, index) => {
          return (
          <Accordion className={b('row')} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={b('icon')} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className="m-0"
            >
              <div className="row">
                <span>{page * rowsPerPage + index + 1}</span>
                {/* <span>{market.name}</span> */}
                <span><MarketName marketID={market.id} /></span>
                <span>{config.marketsNames[market.id].assetSymbol}</span>
                <span><Link href="https://www.google.com/" onClick={(e) => e.stopPropagation()} className={b('link')}>{getStringFromTimestamp(market.created)}</Link></span>
                <span><Tooltip title={<Typography className={b('tooltip')} >{market.id}</Typography>} arrow ><div>{getShortAddress(market.id)}</div></Tooltip></span>
                <span>{market.totalLongs}</span>
                <span>{market.totalShorts}</span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Grid className="sub-row" container spacing={3}>
                <Grid item xs={6} >
                  <span>{`Market Price: ${BNtoNum(market.marketPrice)}`}</span>
                  <span>{`Demand: ${BNtoNum(market.demand)}`}</span>
                  <span>{`Supply: ${BNtoNum(market.supply)}`}</span>
                  <span>{`Total Traders: ${(market.totalTraders)}`}</span>
                  <span>{`Total Stakers: ${(market.totalStakers)}`}</span>
                  <span className="hidden">{`Created At: ${getStringFromTimestamp(market.created)}`}</span>
                  <span className="hidden">{`Staked Liquidity: ${BNtoNum(market.stakedLiquidity)}`}</span>
                </Grid>
                <Grid item xs={6}>
                  <span>{`Total Longs: ${(market.totalLongs)}`}</span>
                  <span>{`Total Longs Historical: ${(market.totalLongsHistorical)}`}</span>
                  <span>{`Total Shorts: ${(market.totalShorts)}`}</span>
                  <span>{`Total Shorts Historical: ${(market.totalShortsHistorical)}`}</span>
                  <span>{`Staked Liquidity: ${BNtoNum(market.stakedLiquidity)}`}</span>
                  <span>{`Unrealized PNL: ${BNtoNum(market.unrealizedPNL)}`}</span>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>)
        })}
      </div>
    </>
  );
}
