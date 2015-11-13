var plan = require("flightplan")
var glob=require("glob")


plan.target('staging', {
  host: '120.55.125.236',
  username: 'root',
  password:"vO5TKznhv0fyl4"
  // privateKey: '/Users/jarvan/.ssh/id_rsa',
  // agent: process.env.SSH_AUTH_SOCK
})



plan.local(function(local){
  local.exec("npm run deploy");
  local.exec("git add ./")
  local.exec("git commit -m 'neversion'")
  local.exec("git push origin master")

});

plan.remote(function(remote){

    remote.exec("cd /alidata/server/tomcat-public/webapps/ROOT/ltx-wechat &&  git pull origin master")


})
