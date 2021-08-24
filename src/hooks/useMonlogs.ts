import { useContext } from "react";
import  MonlogTradesContext from '../contexts/MonlogTradesContext'

const useMonlogs = () => {
    const context = useContext(MonlogTradesContext)
    if(context){
        return context;
    }
    throw Error("Context Provider is not provided!")
}

export default useMonlogs;