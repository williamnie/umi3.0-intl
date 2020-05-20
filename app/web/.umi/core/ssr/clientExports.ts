import { IRouteComponentProps } from 'umi'

// only export isBrowser for user
export { isBrowser } from '/Users/xiaobei/Documents/aminer/umi-feat-ssr-umi3/examples/ssr-with-eggjs/node_modules/@umijs/utils/lib/ssr.js';

interface IParams extends Pick<IRouteComponentProps, 'match'> {
  isServer: Boolean;
}

export type IGetInitialProps = (params: IParams) => Promise<any>;
