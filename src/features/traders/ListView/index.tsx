import { useState, useEffect, useCallback} from 'react';
import { useTraders, usePositions } from 'graphqlAPI';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import TablePagination from '@material-ui/core/TablePagination';
import { TraderGrid } from 'components/TraderGrid';
import { config } from 'config';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import { useParams } from 'react-router';

type Params = {
  id: string,
}

const ListView = () => {
  
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [count, setCount ] = useState(1000);
  const [market, setMarket] = useState<string>('-');
  const {traders, markets } = useTraders(market,rowsPerPage, page*rowsPerPage);
  const { positions } =  usePositions();
  const handleChangeMarket = (event) => {
    console.log("Market selected:", event.target.value)
    setMarket(event.target.value);
  }
  const getMarketName = (id) => {
    console.log(id)
    let marketName;
    marketName = config.marketsNames[id]?.name;
    return marketName;
  }
  useEffect(() => {
    setCount(1000)
    if (markets) {
      console.log("markets->>",markets)
    }
    if(positions) {
      console.log("positions-->>", positions)
    }
  }, [markets, positions])

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
 
  const marketId = useParams<Params>();
  useEffect( () => {
    if(marketId.hasOwnProperty('id'))
      setMarket(getMarketName(marketId.id))
  }, [marketId])
  
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
      <TraderGrid data={traders} page={page} rowsPerPage={rowsPerPage} positions={positions} />
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

export default ListView;