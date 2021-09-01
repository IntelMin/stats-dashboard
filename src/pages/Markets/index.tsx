import { useState } from 'react';
import { IconButton  } from '@material-ui/core';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ListView from '../../features/markets/ListView'
import ModuleView from '../../features/markets/ModuleView'
const Markets = () => {
    const [viewModule,setViewModule] = useState(false);
    const toggleView = () =>{
        setViewModule(!viewModule)
    }
    return (
        <div >
            <div className="market_viewToolbar">
                <IconButton onClick={toggleView}><ViewListIcon className={!viewModule ? "market_view_selected" : ""}/></IconButton>
                <IconButton onClick={toggleView}><ViewModuleIcon  className={viewModule ? "market_view_selected" : ""}/></IconButton>
            </div>
            <div className="market_content">
                {viewModule ? (<ModuleView/>):(<ListView/>)
                }
            </div>
        </div>    
    );
}

export default Markets;