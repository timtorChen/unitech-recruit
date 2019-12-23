const common= require('./webpack.common')
const merge= require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = merge(common,{
    plugins:[
        new BundleAnalyzerPlugin({ analyzerPort: 8888, openAnalyzer: false }),
    ]
})