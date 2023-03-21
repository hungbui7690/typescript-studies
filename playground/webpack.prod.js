const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // (***)

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
  },
  plugins: [new CleanWebpackPlugin()], // (***)
}
