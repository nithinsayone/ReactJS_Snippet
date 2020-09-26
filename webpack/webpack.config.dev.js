const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    inline: true,
    host: '0.0.0.0',
    open: 'chrome',
    historyApiFallback: true,
  },
  plugins: [
    new Webpack.DefinePlugin({
      'KEY':JSON.stringify('routes--key'),
      'process.env.NODE_ENV': JSON.stringify('development'),
      'API_END_POINT': JSON.stringify('https://swapi.dev/api/'),
      'VERSION': JSON.stringify(require("../package.json").version)
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: Path.resolve(__dirname, '../src'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        }
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader']
      },
      {
        test: /\.(js)$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      }
    ]
  }
});
