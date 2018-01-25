const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './client/index.jsx',
    html: './index.html'
  },
  output: {
    path: __dirname + '/build',
    publicPath: 'build/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
        }],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        exclude: /node_modules/,
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: 'client/assets',
        to: 'assets'
      }
    ], {
        copyUnmodified: true
      })
  ]
}
