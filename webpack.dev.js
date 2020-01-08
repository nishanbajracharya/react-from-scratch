const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./webpack.common');

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
  },
  output: {
    filename: 'js/[name].[hash:8].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
