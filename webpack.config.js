const webpack = require('webpack');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./webpack.common');

module.exports = merge(config, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
