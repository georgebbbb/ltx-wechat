var config = require("./webpack.config.js");
var webpack = require("webpack")
var webpackDevServer=require("webpack-dev-server")
var express = require('express');
config.entry.unshift("webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server");
var compiler = webpack(config);
var request = require('request');
var app = express();

    app.get("/api/*",function(req, res){
      var path = req.path;
      console.log(path);
      request.get('http://120.55.125.236:8098'+path,
        function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var obj = JSON.parse(body)
            res.json(obj);
          }
        });
    });
    app.listen(8088);



var server = new webpackDevServer(compiler, {
  contentBase: "build",
  hot: true,
  inline: true,
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
        // '/getCityAreas2.action':{
        //   target: 'http://www.iwjw.com/',
        //   secure: false
        // }

    }

});
server.listen(8080);
