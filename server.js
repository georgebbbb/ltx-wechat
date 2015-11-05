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
            target: 'http://120.55.125.236',
            port: "8098",
            secure: false
        },
    }

});
server.listen(8080);
