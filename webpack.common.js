const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
// function srcPath(subdir) {
//   return path.join(__dirname, subdir);
// }

module.exports = mode => ({
  entry: './src/index.tsx',
  mode,
  resolve: {
    // alias: { src: srcPath('src/') },
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          mode === 'development'
            ? 'style-loader'
            : require('mini-css-extract-plugin').loader,
          'css-loader'
        ]
      }
    ]
  }
});