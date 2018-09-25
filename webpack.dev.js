const merge = require('webpack-merge');
const common = require('./webpack.common')('development');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  output: {
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    })
  ],
});