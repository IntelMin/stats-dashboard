import { useState, useEffect, useCallback} from 'react';
import { useMonlogTrades } from 'graphqlAPI';
import Select from '@material-ui/core/Select';
import TablePagination from '@material-ui/core/TablePagination';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import { DataGrid, MarketName } from '../../../components'
import { getStringFromTimestamp, BNtoNum } from '../../../utils/utils'
import { config } from '../../../config';

const TradeLog = () => {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [count, setCount ] = useState(1000);
  const [market, setMarket] = useState<string>('-');
  const [kind, setKind] = useState<number>(-1);
  const { monlogTrades, markets } = useMonlogTrades(market, kind, rowsPerPage, page*rowsPerPage);

  useEffect(() => {
    setCount(1000)
    if (markets) {
      console.log("markets->>",markets)
    }
  }, [markets])

  const handleChangeMarket = useCallback((event) => {
    console.log("Market selected:", event.target.value)
    setMarket(event.target.value);
  }, [market])

  const handleChangeKind = useCallback((event) => {
    console.log("Kind selected:", event.target.value)
    setKind(Number(event.target.value));
  }, [kind]);

  const kinds  = [{value:-1,text:"-"},
                  {value:0,text:"Close Position"},
                  {value:1,text:"Open Long Position"},
                  {value:2,text:"Open Short Position"},
                  {value:3,text:"Liquidate Position"},
                  {value:4, text:"Add Collateral"},
                  {value:5, text:"Remove Collateral"}];
  console.log(monlogTrades);

  const getKindName = (kind) => {
    var kindName = "";
    switch (kind) {
      case 0: kindName = "Close Position"; break;
      case 1: kindName = "Open Long Position"; break;
      case 2: kindName = "Open Short Position"; break;
      case 3: kindName = "Liquidate Position"; break;
      case 4: kindName = "Add Collateral"; break;
      case 5: kindName = "Remove Collateral"; break;
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

  const formatParams = (kind,param1, param2) =>{
    var data = "";
    switch (kind) {
      case 0: data = "CloseRatio: " + BNtoNum(param1) ; break;
      case 1: data = "Collateral: " + BNtoNum(param1) + ", " + "Leverage: " + param2; break;
      case 2: data = "Collateral: " + BNtoNum(param1) + ", " + "Leverage: " + param2; break;
      case 3: data = "0" ; break;
      case 4: data = "Collateral: " + BNtoNum(param1) ; break;
      case 5: data = "Collateral: " + BNtoNum(param1) ; break;
      default: data = "Unknown Log"; break;
    }
    return data;
  }

  const handleChangePage = useCallback((event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if(event) {
      setPage(newPage);
    }
  },[page]);

  const handleChangeRowsPerPage = useCallback((
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  },[rowsPerPage]);
  
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
        data={monlogTrades?.map((log, index) =>
          [
          <div>{ rowsPerPage*(page)+ index + 1 }</div>,
          <MarketName marketID={log.market.id} />,
          <div>{ getKindName(log.kind) }</div>,
          <div>{ formatParams(log.kind, log.param1,log.param2) }</div>,
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

export default TradeLog;