// src/setupProxy.j

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/jisho', // This is the path on your React app that you'll use
    createProxyMiddleware({
      target: 'https://jisho.org',
      changeOrigin: true,
      pathRewrite: {
        '^/api/jisho': '/api/v1/search/words', // Rewrite the URL path
      },
    }),
  );
};
