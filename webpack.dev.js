const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const config = require('./webpack.common');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
