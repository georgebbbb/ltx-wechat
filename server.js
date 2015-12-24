var config = require("./webpack.config.js");
var webpack = require("webpack")
var webpackDevServer=require("webpack-dev-server")

config.entry.unshift("webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server");
var compiler = webpack(config);
var request = require('request');




var server = new webpackDevServer(compiler, {
  contentBase: "build",
  hot: true,
  inline: true,
  historyApiFallback: true,
  //  headers: { 'Access-Control-Allow-Origin': '*' },
  proxy: {
        // '/api/*': {
        //     target: 'http://www.loutianxia.cn/',
        //     // port: "80",
        //     secure: false
        // },
        '/api/*': {
            target: 'http://localhost:8088/',
            // port: "80",
            secure: false
        },

    }

});

// console.log(server);
server.listen(8080);
