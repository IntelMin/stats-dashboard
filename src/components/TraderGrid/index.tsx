import { useState } from 'react';
import { Grid, Accordion, AccordionDetails, AccordionSummary, Tooltip,  Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { block, getShortAddress } from 'utils/utils';
const b = block('trader-grid');
export const TraderGrid = ({ data, page, rowsPerPage }) => {
  console.log(data, page, rowsPerPage)
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
      <div className={b('root')}>
        {data.map((trader, index) => {
          return (
          <Accordion className={b('row')} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={b('icon')} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className="m-0"
            >
              <div className="staker-row">
                <span>{page * rowsPerPage + index + 1}</span> 
                <span><Tooltip title={<Typography className={b('tooltip')} >{trader.id}</Typography>} arrow ><div>{getShortAddress(trader.id)}</div></Tooltip></span>
                <span><Tooltip title={<Typography className={b('tooltip')} >{trader.market.id}</Typography>} arrow ><div>{getShortAddress(trader.market.id)}</div></Tooltip></span>

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
