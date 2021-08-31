import { Grid, Typography } from "@material-ui/core";
import RiskParams from "components/RiskParams"
import StatisticsCard from "components/StatisticsCard"
import { useGeneralInfo } from 'graphqlAPI';

const GeneralInfo = () => {
    const { monlogStripsInfos } = useGeneralInfo();
    const riskParams = {
        "fundFeeRatio": "950000000000000000",
        "insuranceProfitOnPositionClosed": "50000000000000000",
        "liquidationMarginRatio": "35000000000000000",
        "liquidatorFeeRatio": "2000000000000000",
        "marketFeeRatio": "950000000000000000",
        "minimumPricePossible": "100000000000000"
      };
    console.log("monlogStripsInfos-->>",monlogStripsInfos)
    return (
        <>
            <Typography variant="h3" gutterBottom >Statistics</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={8} >
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={6} xl={4}>
                            <StatisticsCard subValue="null" value={monlogStripsInfos[0]?.totalTraders} title="Total Traders" index={1}/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} xl={4}>
                            <StatisticsCard subValue="null" value={monlogStripsInfos[0]?.totalStakers} title="Total Stakers" index={2}/>
                        </Grid>                    
                        <Grid item xs={12} md={12} lg={6} xl={4}>
                            <StatisticsCard subValue="null" value={monlogStripsInfos[0]?.totalCollaterals} title="Total Collaterals" index={4}/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} xl={4}>
                            <StatisticsCard subValue={monlogStripsInfos[0]?.totalShorts || 0} value={monlogStripsInfos[0]?.totalShortsHistorical } title="Total Shorts" index={3}/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} xl={4}>
                            <StatisticsCard subValue={ monlogStripsInfos[0]?.totalLongs || 0} value={monlogStripsInfos[0]?.totalLongsHistorical} title="Total Longs" index={3}/>
                        </Grid>
                    </Grid>                
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <RiskParams riskParams={riskParams} />
                </Grid>
            </Grid>  
        </>
               
    );
}

export default GeneralInfo;