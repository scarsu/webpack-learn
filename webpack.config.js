const path = require('path');
const MiniCssExtractor = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractor.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractor.loader, 'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
			title: "My App",
			filename: "index.html",
			template: "./src/index.html"
		}),
    new CleanWebpackPlugin(),
    new MiniCssExtractor({
      filename: 'main-[hash:6].css'
    }),
  ]
}