module.exports = mode => ({
  entry: './src/index.tsx',
  mode,
  resolve: {
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