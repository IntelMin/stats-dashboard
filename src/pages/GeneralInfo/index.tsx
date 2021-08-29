import { Grid, Typography } from "@material-ui/core";
import RiskParams from "components/RiskParams"
import StatisticsCard from "components/StatisticsCard"

const GeneralInfo = () => {
    return (
        <>
            <Typography variant="h3" gutterBottom >Statistics</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={8} >
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={6} xl={4}>
                            <StatisticsCard value={3} title="Total Markets" index={0}/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} xl={4}>
                            <StatisticsCard value={151} title="Total Traders" index={1}/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} xl={4}>
                            <StatisticsCard value={3} title="Total Stakers" index={2}/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} xl={4}>
                            <StatisticsCard value={3} title="Total Positions" index={3}/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} xl={4}>
                            <StatisticsCard value={3} title="Total Collaterals" index={4}/>
                        </Grid>
                    </Grid>                
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                <RiskParams />

                </Grid>
            </Grid>  
        </>
          
    );
}

export default GeneralInfo;