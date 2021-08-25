import { useState } from 'react';
import { IconButton  } from '@material-ui/core';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ListView from '../../features/markets/ListView'
const Markets = () => {
    const [viewModule,setViewModule] = useState(true);
    const toggleView = () =>{
        setViewModule(!viewModule)
    }
    return (
        <div >
            <div className="market_viewToolbar">
                <IconButton onClick={toggleView}><ViewModuleIcon  className={viewModule ? "marked_view_selected" : ""}/></IconButton>
                <IconButton onClick={toggleView}><ViewListIcon className={!viewModule ? "marked_view_selected" : ""}/></IconButton>
            </div>
            <div className="market_content">
                {viewModule ? (<h1>ViewModule</h1>)
                    :(<ListView></ListView>)
                }
            </div>
        </div>    
    );
}

export default Markets;