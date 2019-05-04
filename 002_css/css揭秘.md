# 效果网址 #
[http://play.csssecrets.io/](http://play.csssecrets.io/)

**可维护性、灵活性、轻量级**

**本书核心目的就是教你如何用css解决难题**

**适合中级向高级进阶的css开发者**
# css模块 #
**css语法**

**css层叠与继承**

**css颜色**

**css选择器**

**css背景与边框**

**css值与单位**

**css文本排版**

**css装饰效果**

**css字体**

**css基本UI特性**

**css变形**

**css图像混合效果**

**css滤镜效果**

**css遮罩**

**css伸缩盒模型**

**css网格布局**

# 浏览器前缀 #
> Firefox => -moz-
> 
> IE=>-ms-
> 
> Opera=>-o-
> 
> Safari 和 Chrome=>-webkit-

# 帮助你加css前缀 #
[http://pleeease.io/play/](http://pleeease.io/play/)或者[http://css3please.com/](http://css3please.com/)（已经过气）

Autoprefixer[https://github.com/ai/autoprefixer](https://github.com/ai/autoprefixer)本地完成编译，类似处理器

-prefix-free[http://leaverou.github.io/prefixfree](http://leaverou.github.io/prefixfree)浏览器中特性检测，来决定哪些事需要的好处=>几乎不需要更新，因为所有的信息都是用一份属性清单在真实的浏览器环境中跑出来的结果

# line-height行高 #
**不带单位的时候是字体的xx倍**

# CSS 中有史以来的第一个变量 #
**currentColor**虽然功能有限，但它真的是一个变量，它本身就是很多css颜色属性的初始值

# 关于响应式网页设计 #
> 每个媒体查询都会增加成本
> 
> 添加的媒体查询越多，你的css代码就变的越来越经不起折腾
> 
> 只应该把它作为最后的手段
> 媒体查询不能以一种连续的范式来修复问题，他的工作原理基于某几个特定的阶梯（断点）
> 
> **建议避免不必要的媒体查询**
> 
> 使用百分比长度来代替固定长度也可以用视口单位（vw wh vmin vmax）
> 
> 需要在较大分辨率下得到固定宽度，使用max-width
> 
> 不要忘记为替换元素（比如img ,object,video,iframe等）设置 一个max-width值为100%
> 
> 背景图片铺满整个容易用background-size: cover，带宽不是无限的移动端把大图缩小不明智
> 
> 多列文本中column-width（ 列 宽 ）而不是column-count（列数）这样在较小屏幕上自动显示单列布局
> 

# SourceMap #
 存储源代码与编译代码对应位置映射的信息文件

**主要解决	:**

a代码压缩混淆；

b利用sass,typeScript等其他编译成css或js后

c利用webpack等打包工具进行多文件合并后

**字体和行高是有依赖关系，可表示出来，行高写倍数**

**页面真正渲染前，百分比值是无法解析**

**每年网页设计开发有点24种方式https://24ways.org/**

# 多重边框 #
（1）box-shadow第四个参数，扩张半径；好处：它支持逗号分隔语法，我们可以创建任意数量的投影。不会影响鼠标事件

（2）两层边框：常规+outline描边：优点样式边框非常灵活box-shadow模拟实线边框 outline-offset元素边缘之间间距



