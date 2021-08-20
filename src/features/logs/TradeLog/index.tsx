import { useState, useEffect, useCallback} from 'react';
import { useMonlogTrades } from 'graphqlAPI';
import Select from '@material-ui/core/Select';
import TablePagination from '@material-ui/core/TablePagination';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import { DataGrid, MarketName } from '../../../components'
import  { BN } from  '../../../utils/bigNumber'
import { getStringFromTimestamp, BNtoNum } from '../../../utils/utils'

interface Market {
  id: string
}

interface TradeLogs {
  id: string;
  created: BN;
  kind: number;
  param1: BN;
  param2: BN;  
  market: Market;
}

const TradeLog = () => {
  const { monlogTrades } = useMonlogTrades();
  const [page, setPage] = useState(0);
  const [displayLogs, setDisplayLogs] = useState<TradeLogs[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [count, setCount ] = useState(0);
  const [market, setMarket] = useState<{ value: string | number; name: string }>({
    value: 20,
    name: '',
  });
  const [kind, setKind] = useState<{ value: string | number; name: string }>({
    value: 20,
    name: '',
  });

  const handleChangeMarket = useCallback((event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof market;
    console.log(name,event.target.value)
    setMarket({
      ...market,
      [name]: event.target.value,
    });
  },[market])

  const handleChangeKind = useCallback((event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof kind;
    console.log(name,event.target.value)
    setKind({
      ...market,
      [name]: event.target.value,
    });
  }, [kind]);

  const kinds  = [{value:-1,text:"-"},
                  {value:0,text:"Close Position"},
                  {value:1,text:"Open Long Position"},
                  {value:2,text:"Open Short Position"},
                  {value:3,text:"Liquidate Position"},
                  {value:4, text:"Add Collateral"},
                  {value:5, text:"Remove Collateral"}];
  console.log(monlogTrades);

  const getKindName = (kind) =>{
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

  const getData = (kind,param1, param2) =>{
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
  const getDisplayLogs = (rowsPerPage, page) => {
    const logs =  monlogTrades.slice(rowsPerPage*page,rowsPerPage*(page+1));
    return logs;
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if(event) {
      setPage(newPage);
    }
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    console.log(monlogTrades)
    const logsLength = monlogTrades.length || 0
    setCount(logsLength);
    const logs = getDisplayLogs(rowsPerPage,page);
    setDisplayLogs(logs)
  }, [monlogTrades]);

  useEffect(() => {
    setDisplayLogs(getDisplayLogs(rowsPerPage,page))
  }, [page,rowsPerPage]);
  
  return (
    <>
      <SearchIcon className='logs-search-icon'/>
    
      <FormControl className="logs-market-filter">
        <InputLabel htmlFor="market-native">Market</InputLabel>
        <Select
            native
            disableUnderline
            value={market.value}
            onChange={handleChangeMarket}
            inputProps={{
              name: 'value',
              id: 'market-native',
            }}
            >
            <option className="logs-option" value={10}>-</option>
            <option className="logs-option" value={20}>Nerve</option>
        </Select>
      </FormControl>
      <FormControl className="logs-kind-filter">
        <InputLabel htmlFor="kind-native">Kind</InputLabel>
        <Select
          native
          disableUnderline
          value={kind.value}
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
        data={displayLogs?.map((log, index) =>
          [
          <div>{ index + 1 }</div>,
          <MarketName marketID={log.market.id} />,
          <div>{ getKindName(log.kind) }</div>,
          <div>{ getData(log.kind, log.param1,log.param2) }</div>,
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