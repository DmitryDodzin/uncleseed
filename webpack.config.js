const path = require('path');
const webpack = require('webpack');

const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: path.join(__dirname, 'client'),

  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './index'
  ],

  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin()
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [{
      test: /(\.js|\.jsx)$/,
      loaders: ['react-hot-loader', 'babel-loader'],
      include: path.join(__dirname, 'client')
    }]
  }
};