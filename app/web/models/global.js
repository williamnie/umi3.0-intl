
// 如果这里统一从locals里面引用，就直接报错了，
// import { formatMessage } from '../locales'
// 这里从umi里面引用,也是undefined的，但是页面是没问题的
import { formatMessage, getIntl } from 'umi'

console.log('getIntl', formatMessage, getIntl);

export default {
  namespace: 'global',

  state: {
  },

  effects: {
  },

  reducers: {

  },
};
