import { useState, useEffect } from 'react';
import { useMonlogStakes } from 'graphqlAPI';
import Select from '@material-ui/core/Select';
import TablePagination from '@material-ui/core/TablePagination';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import { DataGrid, MarketName } from '../../../components'
import { getStringFromTimestamp, BNtoNum } from '../../../utils/utils'
import { config } from '../../../config';

const StakeLog = () => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [count, setCount ] = useState(1000);
  const [market, setMarket] = useState<string>('-');
  const [kind, setKind] = useState<number>(-1);
  const { monlogStakes, markets } = useMonlogStakes(market, kind, rowsPerPage, page*rowsPerPage);

  useEffect(() => {
    setCount(1000)
    if (markets) {
      console.log("markets->>",markets)
    }
  }, [markets])

  const handleChangeMarket = (event) => {
    console.log("Market selected:", event.target.value)
    setMarket(event.target.value);
  }

  const handleChangeKind = (event) => {
    console.log("Kind selected:", event.target.value)
    setKind(Number(event.target.value));
  }

  const kinds  = [{value:-1,text:"-"},
                  {value:0,text:"Stake"},
                  {value:1,text:"Unstake"},];
  console.log(monlogStakes);

  const getKindName = (kind) => {
    var kindName = "";
    switch (kind) {
      case 0: kindName = "Stake"; break;
      case 1: kindName = "Unstake"; break;
      default: kindName = "Unknown Log"; break;
    }
    return kindName;
  }

  const getMarketName = (id) => {
    console.log(id)
    let marketName;
    marketName = config.marketsNames[id]?.name;
    return marketName;
  }

  const formatParams = (kind,param1) =>{
    var data = "";
    switch (kind) {
      case 0: data = `Amount: ${BNtoNum(param1)}`; break;
      case 1: data = `Amount: ${BNtoNum(param1)}`; break;
      default: data = "Unknown Log"; break;
    }
    return data;
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if(event) {
      setPage(newPage);
    }
  }

  const handleChangeRowsPerPage = ( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  }
  
  return (
    <>
      <SearchIcon className='logs-search-icon'/>
    
      <FormControl className="logs-market-filter">
        <InputLabel htmlFor="market-native">Market</InputLabel>
        <Select
            native
            disableUnderline
            value={market}
            onChange={handleChangeMarket}
            inputProps={{
              name: 'value',
              id: 'market-native',
            }}
            >
            <option className="logs-option" value={'-'}>-</option>
            { markets.map((market, index) => (
               <option key={index} className="logs-option" value={market.id}>{getMarketName(market.id)}</option>
              ))
            }
        </Select>
      </FormControl>
      <FormControl className="logs-kind-filter">
        <InputLabel htmlFor="kind-native">Kind</InputLabel>
        <Select
          native
          disableUnderline
          value={kind}
          onChange={handleChangeKind}
          inputProps={{
            name: 'value',
            id: 'kind-native',
          }}
        >
          {kinds.map((kind,index)=>(
            <option key={index} className="logs-option" value={kind.value}>{kind.text}</option>
          ))}
        </Select>
      </FormControl>
      <DataGrid
        columns={[
          [
            { label: 'No' },
            { label: "Market"},
            { label: 'Kind' },
            { label: 'Data' },
            { label: 'Time' }
          ]
        ]}
        data={monlogStakes?.map((log, index) =>
          [
          <div>{ rowsPerPage*(page)+ index + 1 }</div>,
          <MarketName marketID={log.market.id} />,
          <div>{ getKindName(log.kind) }</div>,
          <div>{ formatParams(log.kind, log.param1) }</div>,
          <div>{ getStringFromTimestamp(log.created)}</div>,          
        ])}
    />
    <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </>
  );
};

export default StakeLog;