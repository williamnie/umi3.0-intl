/* eslint-disable import/no-mutable-exports */

import {
  setLocale, getLocale, getIntl, useIntl,
  formatMessage as fm
} from 'umi'; // * SSR must from here.


console.log('----------------locale', getIntl);


const formatMessage = getIntl && getLocale ? getIntl(getLocale()).formatMessage : fm;



export {
  formatMessage
};
