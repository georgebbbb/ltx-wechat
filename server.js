var config = require("./webpack.config.js");
var webpack = require("webpack")
var webpackDevServer=require("webpack-dev-server")

config.entry.unshift("webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server");
var compiler = webpack(config);





var server = new webpackDevServer(compiler, {
  contentBase: "build",
  hot: true,
  inline: true,
  proxy: {
        '/api/*': {
            target: 'http://www.loutianxia.cn',
            // port: "8098",
            secure: false
        },
        '/getCityAreas2.action':{
          target: 'http://www.iwjw.com/',
          secure: false
        }

    }

});
server.listen(8080);
