import React from 'react';
import { formatMessage } from '../locales'

// import {
//   useIntl
// } from 'umi';

export default function () {
  // const intl = useIntl();
  return (
    <div>
      <p>这里是统一封装了一下，国际化的方法统一从locales里面引出来，</p>
      <p>但是如果在models里面也引用 import  formatMessage  from '../locales' 就会报错</p>
      <button type="primary">
        {formatMessage(
          {
            id: 'com.additional.locales.place.here-move.it.later',
            defaultMessage: 'dddd',
          }
        )}
      </button>
    </div>

  );
}
