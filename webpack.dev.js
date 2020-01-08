const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./webpack.common');

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    hot: true,
  },
  output: {
    filename: 'js/[name].[hash:8].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
      chunkFilename: 'css/[id].[hash:8].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
