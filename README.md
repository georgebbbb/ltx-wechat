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


defer和async的区别

先来试个一句话解释仨，当浏览器碰到 script 脚本的时候：

<script src="script.js"></script>
没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。

<script async src="script.js"></script>
有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。

<script defer src="myscript.js"></script>
有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。

然后从实用角度来说呢，首先把所有脚本都丢到 </body> 之前是最佳实践，因为对于旧浏览器来说这是唯一的优化选择，此法可保证非脚本的其他一切元素能够以最快的速度得到加载和解析。

接着，我们来看一张图咯：



蓝色线代表网络读取，红色线代表执行时间，这俩都是针对脚本的；绿色线代表 HTML 解析。

此图告诉我们以下几个要点：

defer 和 async 在网络读取（下载）这块儿是一样的，都是异步的（相较于 HTML 解析）
它俩的差别在于脚本下载完之后何时执行，显然 defer 是最接近我们对于应用脚本加载和执行的要求的
关于 defer，此图未尽之处在于它是按照加载顺序执行脚本的，这一点要善加利用
async 则是一个乱序执行的主，反正对它来说脚本的加载和执行是紧紧挨着的，所以不管你声明的顺序如何，只要它加载完了就会立刻执行
仔细想想，async 对于应用脚本的用处不大，因为它完全不考虑依赖（哪怕是最低级的顺序执行），不过它对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适的，最典型的例子：Google Analytics
