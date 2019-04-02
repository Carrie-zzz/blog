    _proto_ object  new XXXX()
	prototype Function 构造器的属性
	constructor  object  type
# 克隆 #
> 对象扩展操作符（...）
> 
> JSON.parse(JSON.stringify(obj))可以用来克隆对象，但是他是CPU密集型，并且只接受合法的JSON（因此他会跳过函数，而且不允许循环引用）
> 
> Object.assign({},obj)
> 
> Object.keys(obj).reduce((acc, key) => (acc[key] = obj[key], acc), {})

# 闭包？什么是闭包，你可以举一个 有用的例子吗？ #
> 闭包就是能够读取其它函数内部变量的函数
> 
> 在Javascript语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成**“定义在一个函数内部的函数”**
> 
> **用途**
> （1）读取函数内部的变量（2）让这些变量始终保持在内存中
> 
> **注意**（1）会导致内存泄露，慎用（2）闭包会修改内部变量的值，所以在使用闭包作为对象的公用方法时要谨慎
> 
> **应用**单例模式
> ![](https://i.imgur.com/oY03pbb.png)

# ajax原理 #
> ajax 的全称是Asynchronous JavaScript and XML，其中，Asynchronous 是异步的意思，它有别于传统web开发中采用的同步的方式。
> 
> ajax并非一种新的技术，而是几种原有技术的结合体。它由下列技术组合而成。
> 1.使用CSS和XHTML来表示。 2. 使用DOM模型来交互和动态显示。 3.使用XMLHttpRequest来和服务器进行异步通信。 4.使用javascript来绑定和调用。
> 
> Ajax的原理简单来说通过XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用javascript来操作DOM而更新页面。这其中最关键的一步就是从服务器获得请求数据。
> **XMLHttpRequest原理**
> 
> 对于XmlHttpRequest的两个方法，open和send，其中open方法指定了：a、向服务器提交数据的类型，即post还是get。b、请求的url地址和传递的参数。c、传输方式，false为同步，true为异步

# 尽量使用尽可能多的方式实现子元素的垂直水平居中 #
> **行内元素**text-align + line-height
> 
> **定宽定高**absolute + margin
> 
> **不定高**absolute + translate
> 
> **不定高**：flex （margin:auto)/(justify-content: center; align-items: center;)
> 
> **table方式**：(.father{display: table; }.child{display: table-cell;text-align: center;vertical-align: middle;})