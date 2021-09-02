import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Tooltip,  Typography, Chip } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { block, getShortAddress } from 'utils/utils';
import { BNtoNum } from '../../utils/utils';
const b = block('trader-grid');
export const TraderGrid = ({ data, page, rowsPerPage, positions }) => {
  console.log(data, page, rowsPerPage)
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    console.log(event.target)
    setExpanded(isExpanded ? panel : false);
  };
  const getPosition = (id) => {
    if(positions.length === 0) return "N/A";
    const position = positions.find(e => e.account.id === id)
    console.log("this is position", position);
    if(!position) return "N/A"
    return <div className="chip-wrapper">IsActive: {position.isActive ? <Chip label="Yes" color="primary" /> : <Chip label="No" color="secondary" />} IsLong: {position.isLong ? <Chip label="Yes" color="primary" /> : <Chip label="No" color="secondary" />} IsLiquidated: {position.isLiquidated ? <Chip label="Yes" color="primary" /> : <Chip label="No" color="secondary" />} Collateral: <Chip color="primary" label={BNtoNum(position.collateral)} /> Leverage: <Chip color="primary" label={position.leverage} /></div>;
  }
  
      
  return (
    <>
      <div className="trader-header">
        <span>#</span>
        <span>Account</span>
        <span>Market</span>
        <span>Position</span>    
      </div>
      <div className={b('root')}>
        {data.map((trader, index) => {
          return (
          <Accordion key={index} className={b('row')} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={b('icon')} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className="m-0"
            >
              <div className="trader-row">
                <span>{page * rowsPerPage + index + 1}</span> 
                <span><Tooltip title={<Typography className={b('tooltip')} >{trader.id}</Typography>} arrow ><div>{getShortAddress(trader.id)}</div></Tooltip></span>
                <span><Tooltip title={<Typography className={b('tooltip')} >{trader.market.id}</Typography>} arrow ><div>{getShortAddress(trader.market.id)}</div></Tooltip></span>
                <span>{getPosition(trader.id)}</span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              {/* <Grid className="sub-row" container spacing={3}>
               
              </Grid> */}
            </AccordionDetails>
          </Accordion>)
        })}
      </div>
    </>
  );
}
