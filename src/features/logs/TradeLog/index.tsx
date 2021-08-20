import {
  DataGrid, 
} from '../../../components'
// import Pagination from '@material-ui/lab/Pagination';
import TablePagination from '@material-ui/core/TablePagination';
import {useState, useEffect} from 'react';
interface Props {
  tradeLogs?: any;
}
interface TradeLogs {
  id: string;
  kind: number;
  param1: string;
  param2: string;
  created:number;
}
const TradeLog = ({ tradeLogs }: Props) => {
  const [page, setPage] = useState(0);
  const [displayLogs, setDisplayLogs] = useState<TradeLogs[]>([])
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [count,setCount ] = useState(0)
  const getKindName = (kind) =>{
    var kindName = "";
            switch (kind) {
              case 0: kindName = "Close Position"; break;
              case 1: kindName = "Open Long Position"; break;
              case 2: kindName = "Open Short Position"; break;
              default: kindName = "Unknown Log"; break;
            }
    return kindName;
  }
  const getDisplayLogs = (rowsPerPage, page) => {
    const logs =  tradeLogs.slice(rowsPerPage*page,rowsPerPage*(page+1));
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
    console.log(tradeLogs)
    const logsLength = tradeLogs?.length || 0
    setCount(logsLength)
    setDisplayLogs(getDisplayLogs(rowsPerPage,page))
  }, [tradeLogs]);
  useEffect(() => {
    setDisplayLogs(getDisplayLogs(rowsPerPage,page))
  }, [page,rowsPerPage]);
  
  return (
    <>
      <DataGrid
        columns={[
          [
            { label: 'No' },
            { label: 'Kind' },
            { label: 'Param1' },
            { label: 'Param2' },
            { label: 'Time' }
          ]
        ]}
        data={displayLogs.map((log, index) =>
          [
          <div>{ index + 1 }</div>,
          <div>{getKindName(log.kind)}</div>,
          <div>{ log.param1 }</div>,
          <div>{ log.param2 }</div>,
          <div>{ new Date(Number(log.created)).toString() }</div>,
          
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