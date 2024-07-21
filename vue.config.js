module.exports = {
  crossorigin: 'anonymous',
  devServer: {
    allowedHosts: 'all'
  },
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './server'
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('svg-url-loader')
      .loader('svg-url-loader')
  }
};
