import { Typography } from "@material-ui/core";
import ListView from '../../features/traders/ListView'
const Traders = () => {
    return (
        <div >
            <Typography variant="h3" gutterBottom >Traders</Typography>
            <div className="market_content">
                <ListView />
            </div>
        </div>    
    );
}

export default Traders;