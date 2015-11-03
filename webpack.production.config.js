var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReactRouter = path.resolve(node_modules, 'react-router/umd/ReactRouter.min.js');
var pathToReduxRouter = path.resolve(node_modules, 'react-router/umd/ReactRouter.min.js');
var config = {
  entry: {
    app: path.resolve(__dirname, 'app/main.js'),

    // Since react is installed as a node module, node_modules/react,
    // we can point to it directly, just like require('react');
    // 当 React 作为一个 node 模块安装的时候，
    // 我们可以直接指向它，就比如 require('react')
    //把数组里面的js 打成vendors
    vendors: ['react','redux','react-dom','react-router','redux-router','react-imageloader']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  //暂时先不用了
  // resolve: {
  // alias: {
  //   'react-router': pathToReactRouter
  // }
  // },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [node_modules_dir],
      loader: 'babel',
      query: {stage: 0}
    },{
      test: /\.css$/,
      loader: 'style!css'
    },{
      test: /\.less$/,
      loader: 'style!css!less'
    },{
      test: /\.(png|jpg)$/,
      loader: 'file-loader'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new HtmlWebpackPlugin() //https://github.com/ampedandwired/html-webpack-plugin 此处可配置
  ]
};

module.exports = config;
