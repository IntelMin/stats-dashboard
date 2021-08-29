import BN from 'bignumber.js';
import { withNaming } from '@bem-react/classname';

export const block = withNaming({ e: '__', m: '_' });

export { classnames } from '@bem-react/classnames';

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

export const stringifyWithoutQuotes = (object) => {
    return JSON.stringify(object).replace(/"([^"]+)":/g, '$1:');
}

export const classes = (...list: any[]): string => {
    if (list.length === 1 && Object(list[0]) === list[0]) {
      return Object
        .keys(list[0])
        .filter(key => {
          return list[0][key] === true;
        })
        .join(' ');
    }
  
    return list
      .map(item => {
        if (Object(item) === item) {
          return classes(item);
        }
        return item;
      })
      .filter(item => typeof(item) === 'string')
      .filter(item => item.length > 0)
      .join(' ');
  }

  export const getShortAddress = (address) => {
    return `${address.slice(0, 6)}....${address.slice(address.length - 4, address.length)}`;
  }