const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = require('./webpack.common');

module.exports = merge(config, {
  mode: 'production',
  plugins: [
    new OptimizeCSSAssetsPlugin({}),
    new CleanWebpackPlugin(),
  ],
});
