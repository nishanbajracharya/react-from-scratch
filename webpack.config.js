const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = require('./webpack.common');

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [new OptimizeCSSAssetsPlugin({}), new CleanWebpackPlugin()],
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
    },
  },
});
