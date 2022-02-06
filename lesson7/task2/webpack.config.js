const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: ["babel-loader"]
      },
      // {
      //   test: /\.html$/,
      //   loader: 'html-loader'
      // },
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
      },
      {
        test: /.(jpg|png)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    outputPath: 'images'
                }
            }
        ]
    }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};