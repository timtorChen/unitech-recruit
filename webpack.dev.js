const common = require('./webpack.common')
const merge = require('webpack-merge')


module.exports = merge(common, {
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    hot: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    writeToDisk: true,
    inline: true,
  }
})
