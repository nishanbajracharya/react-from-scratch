const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
