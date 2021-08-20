import BN from 'bignumber.js';

export const getStringFromTimestamp = (value: BN) =>{
    const newDate = new Date(Number(value) * 1000)
    var date = ('0' + newDate.getDate()).slice(-2);
    var year = ('0' + newDate.getFullYear()).slice(-2);
    var month = ('0' + (newDate.getMonth() + 1)).slice(-2);
    var h = ('0' + newDate.getHours()).slice(-2);
    var m= ('0' + newDate.getMinutes()).slice(-2);
    var s = ('0' + newDate.getSeconds()).slice(-2);
    return (month + "/" + date + "/" + year + " " + h +":" + m + ":" + s)
}

export const BNtoNum = (value, decimal = 18) => {
    return new BN(value).shiftedBy(-decimal).toNumber();
}

export const NumToBN = (value, decimal = 18) => {
    return new BN(value).shiftedBy(decimal);
}