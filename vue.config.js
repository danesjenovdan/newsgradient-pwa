module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },
};
