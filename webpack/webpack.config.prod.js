const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  stats: 'normal',
  bail: true,
  plugins: [
    new Webpack.DefinePlugin({
      'KEY':JSON.stringify('routes--key'),
      'process.env.NODE_ENV': JSON.stringify('production'),
      'API_END_POINT': JSON.stringify('https://swapi.dev/api/'),
      'VERSION': JSON.stringify(require("../package.json").version)
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s?css/i,
        use : [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
});
