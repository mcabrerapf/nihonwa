const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/jisho',
    createProxyMiddleware({
      target: 'https://jisho.org',
      changeOrigin: true,
    }),
  );
};
