// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      // automatically load scss path
      sass: {
        additionalData: '@import "@/assets/_shared.scss";',
      },
    },
  },
  devServer: {
    proxy: 'http://localhost:8000/'
  }
};
