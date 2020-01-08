const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: path.join(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.js$/,
        use: 'source-map-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: 'svg-loader',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'public/index.html'),
    }),
  ],
};
