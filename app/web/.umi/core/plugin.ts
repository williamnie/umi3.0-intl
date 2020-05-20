import { Plugin } from '/Users/xiaobei/Documents/aminer/umi-feat-ssr-umi3/examples/ssr-with-eggjs/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','ssr','dva','getInitialState','locale','locale','request',],
});
plugin.register({
  apply: require('/Users/xiaobei/Documents/aminer/umi-feat-ssr-umi3/examples/ssr-with-eggjs/app/web/.umi/plugin-dva/runtime.tsx'),
  path: '/Users/xiaobei/Documents/aminer/umi-feat-ssr-umi3/examples/ssr-with-eggjs/app/web/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('/Users/xiaobei/Documents/aminer/umi-feat-ssr-umi3/examples/ssr-with-eggjs/app/web/.umi/plugin-locale/runtime.tsx'),
  path: '/Users/xiaobei/Documents/aminer/umi-feat-ssr-umi3/examples/ssr-with-eggjs/app/web/.umi/plugin-locale/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});
plugin.register({
  apply: require('/Users/xiaobei/Documents/aminer/umi-feat-ssr-umi3/examples/ssr-with-eggjs/app/web/.umi/plugin-helmet/runtime.ts'),
  path: '/Users/xiaobei/Documents/aminer/umi-feat-ssr-umi3/examples/ssr-with-eggjs/app/web/.umi/plugin-helmet/runtime.ts',
});

export { plugin };
