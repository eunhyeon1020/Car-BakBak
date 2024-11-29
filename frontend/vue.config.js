const port = 8080;

module.exports = {
  publicPath: '/',
  devServer: {
    port,
  }, 
  configureWebpack: {
    externals: {
      jquery: 'jQuery'
    }
  }
}