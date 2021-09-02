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
          <Accordion key={index} className={b('row')} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
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
                <span>{config.marketsNames[market.id]?.assetSymbol || "Unknown"}</span>
                <span><Link href="https://www.google.com/" onClick={(e) => e.stopPropagation()} className={b('link')}>{getStringFromTimestamp(market.created)}</Link></span>
                <span><Tooltip title={<Typography className={b('tooltip')} >{market.id}</Typography>} arrow ><div>{getShortAddress(market.id)}</div></Tooltip></span>
                <span>{market.totalLongs}</span>
                <span>{market.totalShorts}</span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Grid className="sub-row" container spacing={10}>
                <Grid item xs={12} md={6} >
                  <div className="flex"><span>Market Price:</span><span>{BNtoNum(market.marketPrice)}</span></div>
                  <div className="flex"><span>Demand:</span><span>{BNtoNum(market.demand)}</span></div>
                  <div className="flex"><span>Supply:</span><span>{BNtoNum(market.supply)}</span></div>
                  <div className="flex"><span>Total Traders:</span><span>{(market.totalTraders)}</span></div>
                  <div className="flex"><span>Total Stakers:</span><span>{(market.totalStakers)}</span></div>
                  <div className="flex hidden"><span>Created At:</span><span>{getStringFromTimestamp(market.created)}</span></div>
                  <div className="flex hidden"><span>Staked Liquidity:</span><span>{BNtoNum(market.stakedLiquidity)}</span></div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="flex"><span>Total Longs:</span><span>{(market.totalLongs)}</span></div>
                  <div className="flex"><span>Total Longs Historical: </span><span>{(market.totalLongsHistorical)}</span></div>
                  <div className="flex"><span>Total Shorts:</span><span>{(market.totalShorts)}</span></div>
                  <div className="flex"><span>Total Shorts Historical:</span><span>{(market.totalShortsHistorical)}</span></div>
                  <div className="flex"><span>Staked Liquidity:</span><span>{BNtoNum(market.stakedLiquidity)}</span></div>
                  <div className="flex"><span>Unrealized PNL:</span><span>{BNtoNum(market.unrealizedPNL)}</span></div>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>)
        })}
      </div>
    </>
  );
}
