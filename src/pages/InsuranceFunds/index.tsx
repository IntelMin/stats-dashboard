import { Grid, TablePagination, Tooltip, Typography } from "@material-ui/core";
import { DataGrid } from "components";
// import { StakerGrid } from "components/StakerGrid"; TablePagination,
import StatisticsCard from "components/StatisticsCard"
import { useInsuranceFunds, useInsuranceStakers, useInsuranceMonlogStakes } from 'graphqlAPI';
import { useEffect } from "react";
import { useState } from "react";
import { BNtoNum, getShortAddress } from "utils/utils";

const InsuranceFunds = () => {
    const { insuranceFunds } = useInsuranceFunds();
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [count, setCount ] = useState(1000);
    const [stakePage, setStakePage] = useState<number>(0);
    const [rowsPerStakePage, setRowsPerStakePage] = useState<number>(10);
    const [stakeCount, setStakeCount ] = useState(1000);
    // setCount(1000);
    
    const { insuranceStakers } = useInsuranceStakers(rowsPerPage, page*rowsPerPage);
    const { insuranceMonlogStakes } = useInsuranceMonlogStakes(rowsPerStakePage, stakePage*rowsPerStakePage);
    useEffect( () => {
        if(insuranceStakers.length)
            setCount(insuranceStakers.length);
    }, [insuranceStakers])
    useEffect( () => {
        if(insuranceMonlogStakes.length)
            setStakeCount(insuranceMonlogStakes.length);
    }, [insuranceStakers])
    
    console.log("insuranceFunds-->>",insuranceFunds)
    console.log("insuranceStakers-->>", insuranceStakers)
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if(event) {
        setPage(newPage);
    }
    }

    const handleChangeRowsPerPage = ( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    }
    const handleChangeStakePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        if(event) {
            setStakePage(newPage);
        }
    }
    
    const handleChangeRowsPerStakePage = ( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setRowsPerStakePage(parseInt(event.target.value, 10));
    }

    const getKindName = (kind) => {
        let kindName = ''
        switch(kind){
            case 0: kindName = 'Stake'; break;
            case 1: kindName = 'Unstake'; break;
            default: kindName = 'Unknown'; break;
        }
        return kindName;

    }
    
    return (
        <>
            <Typography variant="h3" gutterBottom >Insurance Funds</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} lg={4} xl={4}>
                    <StatisticsCard subValue="null" value={BNtoNum(insuranceFunds[0]?.liquidity)} title="Liquidity" index={5}/>
                </Grid>
                <Grid item xs={12} sm={12} lg={4} xl={4}>
                    <StatisticsCard subValue="null" value={BNtoNum(insuranceFunds[0]?.stakedPnl)} title="StakedPnl" index={6}/>
                </Grid>                    
                <Grid item xs={12} sm={12} lg={4} xl={4}>
                    <StatisticsCard subValue="null" value={insuranceFunds[0]?.totalStakers} title="Total Stakers" index={2}/>
                </Grid>
            </Grid>
            <Grid className="mt-2" container spacing={3}>
                <Grid item xs={12} md={12} lg={6}>
                    <Typography variant="h4" gutterBottom >Insurance Stakers</Typography>
                    <DataGrid
                        columns={[
                            [
                                { label: '#' },
                                { label: "id"},
                                { label: 'amount' },
                            ]
                        ]}
                        data={insuranceStakers?.map((row, index) =>
                            [
                            <div>{ rowsPerPage*(page)+ index + 1 }</div>,
                            <div><Tooltip title={<Typography >{row.id}</Typography>} arrow ><div>{getShortAddress(row.id)}</div></Tooltip></div>,
                            <div>{ BNtoNum(row.amount) }</div>,          
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
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                    <Typography variant="h4" gutterBottom >Insurance Monlog Stakes</Typography>
                    <DataGrid
                        columns={[
                            [
                                { label: '#' },
                                { label: "id"},
                                { label: 'kind' },
                                { label: 'Amount' },
                            ]
                        ]}
                        data={insuranceMonlogStakes?.map((row, index) =>
                            [
                            <div>{ rowsPerPage*(page)+ index + 1 }</div>,
                            <div><Tooltip title={<Typography >{row.id}</Typography>} arrow ><div>{getShortAddress(row.id)}</div></Tooltip></div>,
                            <div>{ getKindName(row.kind) }</div>,
                            <div>{ BNtoNum(row.param1) }</div>,        
                        ])}
                    />
                    <TablePagination
                        component="div"
                        count={stakeCount}
                        page={stakePage}
                        onPageChange={handleChangeStakePage}
                        rowsPerPage={rowsPerStakePage}
                        onRowsPerPageChange={handleChangeRowsPerStakePage}
                    />
                </Grid>
            </Grid>            
        </>
               
    );
}

export default InsuranceFunds;