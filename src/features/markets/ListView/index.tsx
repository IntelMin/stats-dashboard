import { useState, useEffect, useCallback} from 'react';
import { useMarkets } from 'graphqlAPI';
import TablePagination from '@material-ui/core/TablePagination';
import { MarketGrid } from 'components/MarketGrid';
// import { getStringFromTimestamp, BNtoNum } from '../../../utils/utils'
// import { config } from '../../../config';

const ListView = () => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [count, setCount ] = useState(1000);
  const { markets } = useMarkets(rowsPerPage, page*rowsPerPage);

  useEffect(() => {
    setCount(1000)
    if (markets) {
      console.log("markets->>",markets)
    }
  }, [markets])

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
  const marketData = [
    {
      "assetSymbol": "USDT",
      "created": "1629800072",
      "createdAtBlock": "13",
      "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
      "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
      "liquidity": "1000841300332631042752305",
      "name": "�MUN",
      "price": {
        "id": "162980037917",
        "marketPrice": "201240000000000000",
        "oraclePrice": "223600000000000000",
        "timestamp": "1629800379"
      },
      "priceDailyChange": null,
      "stakedPnl": "841120945826916",
      "token": {
        "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
        "symbol": "SLP",
        "totalSupply": "1000000000000000000000000"
      }
    },
    {
      "assetSymbol": "ETH",
      "created": "1629800072",
      "createdAtBlock": "13",
      "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
      "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
      "liquidity": "1000841300332631042752305",
      "name": "�MUN",
      "price": {
        "id": "162980037917",
        "marketPrice": "201240000000000000",
        "oraclePrice": "223600000000000000",
        "timestamp": "1629800379"
      },
      "priceDailyChange": null,
      "stakedPnl": "841120945826916",
      "token": {
        "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
        "symbol": "SLP",
        "totalSupply": "1000000000000000000000000"
      }
    },  
  ]
  return (
    <>
      <MarketGrid data={marketData} page={page} rowsPerPage={rowsPerPage} />
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