import { useEffect, useState } from 'react';
import { useMarkets } from 'graphqlAPI';
import Card from '../../../components/Card';
import InfiniteScroll from 'react-infinite-scroll-component';

const ModuleView = () => {
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const { markets } = useMarkets(rowsPerPage, page * rowsPerPage);
  const [marketsDisplay, setMarketsDisplay] = useState<any>([]);
  useEffect(()=>{
    loadMoreMarket(page)
    setRowsPerPage(10)
  }, [])
  useEffect(()=>{
    if(page * 10 > markets.length)
      setHasMore(false)
  }, [page, markets])
  
  const loadMoreMarket = (page) => {
    
    setTimeout(() => {
      setMarketsDisplay( markets.slice(0, (page + 1) * 10) );
      setPage(page + 1)
    }, 1500);
    console.log("data-->>", marketsDisplay)
  }


  return (
    <>
      <InfiniteScroll
        dataLength={marketsDisplay.length}
        next={ () => loadMoreMarket(page)}
        hasMore={hasMore}
        loader={<div className="lazy-loading"><div className="lds-ripple"><div></div><div></div></div></div>}
        scrollableTarget="scrollableDiv"
        className="card-grid"
      >
        {marketsDisplay.map((market, index) => {
          return <Card market={market} key={index} />
        })}
      </InfiniteScroll>
    </>
  );
};

export default ModuleView;
