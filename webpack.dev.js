const merge = require("webpack-merge");
const common = require("./webpack.common")("development");
const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = merge(common, {
  output: {
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    clientLogLevel: 'none',
    historyApiFallback: true,
    overlay: true,
    port: 3000

  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    })
  ],
});