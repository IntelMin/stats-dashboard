// import { useState, useEffect } from 'react';
import { useMarkets } from 'graphqlAPI';
// import TablePagination from '@material-ui/core/TablePagination';
import { DataGrid } from '../../../components'
import { useParams } from 'react-router-dom';
// import { getStringFromTimestamp, BNtoNum } from '../../../utils/utils'
// import { config } from '../../../config';

const DetailView = () => {
  let { id } = useParams<{ id: string }>();
  // const [page, setPage] = useState<number>(0);
  // const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  // const [count, setCount ] = useState(1000);
  const { markets } = useMarkets(10, 0);
  console.log(id);
  // useEffect(() => {
  //   setCount(1000)
  //   if (markets) {
  //     console.log("markets->>",markets)
  //   }
  // }, [markets])

  // const handleChangePage = useCallback((event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
  //   if(event) {
  //     setPage(newPage);
  //   }
  // },[page]);

  // const handleChangeRowsPerPage = useCallback((
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  // },[rowsPerPage]);
  
  return (
    <div className="detail-wrapper">
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
        data={markets?.map((log) =>
          [
          <div>{ 1 }</div>,
          <div> { log.id} </div>
                   
        ])}
    />
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
        data={markets?.map((log) =>
          [
          <div>{ 1 }</div>,
          <div> { log.id} </div>
                   
        ])}
    />
    {/* <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    /> */}
  </div>
  );
};

export default DetailView;