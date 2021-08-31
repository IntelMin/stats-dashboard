import { Typography } from "@material-ui/core";
import ListView from '../../features/stakers/ListView';
const Stakers = () => {
    return (
        <div >
            <Typography variant="h3" gutterBottom >Stakers</Typography>
            <div className="market_content">
                <ListView />
            </div>
        </div>    
    );
}

export default Stakers;