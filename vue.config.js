module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/scss/setting/_variables.scss";'
      }
    }
  }
};
