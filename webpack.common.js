const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.resolve('src'),
  entry: {
    index: './index.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      // use babel-loader handle .jsx and tsx file
      {
        test: /\.(j|t)sx|ts|js$/,
        //we definitely don't want babel to transpile all the files in 
        //node_modules. That would take a long time.
        exclude: /node_modules/,
        //transpile es6 to es5 with babel loader
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/env',
              '@babel/react',
              '@babel/typescript',
            ],
            plugins: [
              // for async 
              ["@babel/plugin-transform-runtime", { regenerator: true }],
              "@babel/plugin-transform-async-to-generator",
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
              "@babel/plugin-proposal-object-rest-spread",
              "emotion"
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanStaleWebpackAssets: false,
    }),
    // HtmlWebpackPlugin copy html from template path to filename path with adding chunks 
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      filename: 'index.html',
      chunks: ['index'],
    }),
  ]
}

