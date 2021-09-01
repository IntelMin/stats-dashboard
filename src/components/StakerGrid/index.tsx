import { useState } from 'react';
import { Grid, Accordion, AccordionDetails, AccordionSummary, Tooltip,  Typography, Chip } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { block, BNtoNum, getShortAddress } from 'utils/utils'; 
const b = block('staker-grid');
export const StakerGrid = ({ data, page, rowsPerPage, marketStakes }) => {
  console.log(data, page, rowsPerPage)
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    console.log(event.target)
    setExpanded(isExpanded ? panel : false);
  };

  const getMarketStake = (id) => {
    if(marketStakes.length === 0) return "N/A";
    const marketStake = marketStakes.find(e => e.account.id === id)
    if(!marketStake) return "N/A"
    return <div className="chip-wrapper">SlpTotal: <Chip color="primary" label={BNtoNum(marketStake.slpTotal)} /> CollateralTotal: <Chip color="primary" label={BNtoNum(marketStake.collateralTotal)} /> InitialStakedPnl: <Chip color="primary" label={BNtoNum(marketStake.initialStakedPnl)} /></div>
  }
  return (
    <>
      <div className="staker-header">
        <span>#</span>
        <span>Account</span>
        <span>Market</span>
        <span>MarketStake</span>
      </div>
      <div className={b('root')}>
        {data.map((staker, index) => {
          return (
          <Accordion key={index} className={b('row')} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={b('icon')} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className="m-0"
            >
              <div className="staker-row">
                <span>{page * rowsPerPage + index + 1}</span> 
                <span><Tooltip title={<Typography className={b('tooltip')} >{staker.id}</Typography>} arrow ><div>{getShortAddress(staker.id)}</div></Tooltip></span>
                <span><Tooltip title={<Typography className={b('tooltip')} >{staker.market.id}</Typography>} arrow ><div>{getShortAddress(staker.market.id)}</div></Tooltip></span>
                <span >{getMarketStake(staker.id)}</span>
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
