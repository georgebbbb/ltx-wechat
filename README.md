{
  "stage": 0,
  "loose": "all"
}

如果 webpack 报错 “Error: Cannot find module 'less'”
npm install -g less
npm install less


当做弹窗效果时，希望弹窗出现的时候网页不可再上下滚动、翻页，可以用body{overflow:hidden}，可是做手机站的时候，就不兼容了。

试了很多次都没有用，后来找到了解决的办法，就是要html,body同时设为overflow:hidden。

具体实现范例代码：

css样式部分：
.ovfHiden{overflow: hidden;height: 100%;}

jquery部分：
$('html,body').addClass('ovfHiden'); //使网页不可滚动 有问题ios fixed
$('html,body').removeClass('ovfHiden'); //使网页恢复可滚动



//得看看
document.documentElement
