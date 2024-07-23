module.exports = {
  crossorigin: "anonymous",
  devServer: {
    allowedHosts: "all",
  },
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: "./server",
    },
  },
};
