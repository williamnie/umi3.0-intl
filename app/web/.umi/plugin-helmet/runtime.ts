let ssr = {};
// remove when client bundle umi.js
if (process.env.__IS_SERVER) {
  ssr = {
    modifyServerHTML: (html, { cheerio }) => {
      const { Helmet } = require('/Users/xiaobei/Documents/aminer/umi-feat-ssr-umi3/examples/ssr-with-eggjs/node_modules/react-helmet');
      const helmet = Helmet.renderStatic();
      if (!helmet) return html;
      const title = helmet.title.toString();
      const htmlAttributes = helmet.htmlAttributes.toComponent();
      const meta = helmet.meta.toString();
      const link = helmet.link.toString();
      const $ = cheerio.load(html);
      if (title) {
        $('head').prepend(title);
      }
      if (meta) {
        $('head').append(meta);
      }
      if (link) {
        $('link').append(link);
      }
      if (Object.keys(htmlAttributes)) {
        Object.keys(htmlAttributes).forEach(attrKey => {
          $('html').attr(attrKey, htmlAttributes[attrKey]);
        });
      }
      return $.html();
    }
  };
}

export {
  ssr
};
