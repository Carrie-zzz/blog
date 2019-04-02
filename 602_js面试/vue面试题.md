# MVVM如何实现模板绑定 ，依赖是如何收集的#
# vue2中的diff算法是怎样实现的？ #
# 请详细说出vue生命周期的执行过程 #
# vue组件间的交互有7种，你知道几种？ #
>**（1）** props和$emit （父组件向子组件传递数据是通过prop传递的，子组件传递数据给父组件是通过$emit触发事件来做到的）
> 
>**（2）** $attrs和$listeners 由A传递给C（不是直接父子关系）
> 
>**（3）** 中央事件总线 
> 
> **（4）** provide和inject （父组件中通过provider来提供变量，然后在子组件中通过inject来注入变量。无论子组件有多深，只要调用了inject那么就可以注入provider中的数据）
> 
>**（5）**  v-model 
>  
>**（6）**  $parent和$children
>  
> **（7）** boradcast和dispatch （vue1.0提供了这种方式，但是vue2.0没有）
>  
> **（8）** vuex处理组件之间的数据交互 
# vue-cli3.0如何实现的？ #
# 说说hash路由和history路由，你能自己编写一个前端路由吗？ #
# 你能手写vuex状态管理吗 #
# 你能开发自己的组件库吗（树组件，日期组件，表格组件） #
# v-show 与 v-if 区别 #
> **相同点**v-if与v-show都可以动态控制dom元素显示隐藏
> 
> **不同点**v-if显示隐藏是将dom元素整个添加或删除，而v-show隐藏则是为该元素添加css--display:none，dom元素还在。
> 
> **手段**v-if是动态的向DOM树内添加或者删除DOM元素；v-show是通过设置DOM元素的display样式属性控制显隐；
> 
> .**编译过程：**v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单的基于css切换；
> 
> **编译条件**v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译（编译被缓存？编译被缓存后，然后再切换的时候进行局部卸载); v-show是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且DOM元素保留；
> 
> **性能消耗**v-if有更高的切换消耗；v-show有更高的初始渲染消耗；
> 
> **使用场景**v-if适合运营条件不大可能改变；v-show适合频繁切换。

# 动态绑定class的方法 #
> 对象方法：:class="{ 'active': isActive }"
> 
> 数组方法：:class="[isActive,isSort]"

# 计算属性和 watch 的区别 #
> watch就是用于监听数据变化，比如监控页面一个变量值的改变需要进行的操作
> 
> computed时用于处理复杂的逻辑运算的，它不必每次都像methods一样调用，它有一个缓存机制，只有在做出改变的时候才会执行，并且还可以把方法封装到里面，只返回一个数据
> 
> 计算属性是自动监听依赖值的变化，从而动态返回内容，监听是一个过程，在监听的值变化时，可以触发一个回调，并做一些事情。所以区别来源于用法，只是需要动态值，那就用计算属性；需要知道值的改变后执行业务逻辑，才用 watch，用反或混用虽然可行，但都是不正确的用法。
> 
>**总结**：
>
>当有一些数据需要随着另外一些数据变化时，建议使用computed。 当有一个通用的响应数据变化的时候，要执行一些业务逻辑或异步操作的时候建议使用watcher



# 怎样理解单向数据流 #
> 这个概念出现在组件通信。父组件是通过 prop 把数据传递到子组件的，但是这个 prop 只能由父组件修改，子组件不能修改，否则会报错。子组件想修改时，只能通过 $emit 派发一个自定义事件，父组件接收到后，由父组件修改。
一般来说，对于子组件想要更改父组件状态的场景，可以有两种方案：
在子组件的 data 中拷贝一份 prop，data 是可以修改的，但 prop 不能：
# keep-alive #
> 是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。
> 
> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition> 相似，<keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。
# 自定义组件的语法糖 v-model 是怎样实现的 #
# 生命周期 #
> 创建前后 beforeCreate/created 在beforeCreate 阶段，vue实例的挂载元素el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象有了，el还没有。
> 
> 载入前后 beforeMount/mounted 在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前未虚拟的DOM节点，data尚未替换。 在mounted阶段，vue实例挂载完成，data成功渲染。
> 
> 更新前后 beforeUpdate/updated 当data变化时，会触发beforeUpdate和updated方法。这两个不常用，不推荐使用。
> 
> 销毁前后beforeDestory/destoryed beforeDestory是在vue实例销毁前触发，一般在这里要通过removeEventListener解除手动绑定的事件。实例销毁后，触发的destroyed。
# 路由跳转 #
> **一般有两种**
> <router-link to='home'> router-link标签会渲染为<a>标签，咋填template中的跳转都是这种；
> 
> 另一种是编程是导航 也就是通过js跳转 比如 router.push('/home')
# vue-router 有哪几种导航钩子 #
# Vue.js 2.x 双向绑定原理 #
# 什么是 MVVM，与 MVC 有什么区别#
> MVC模式的意思是，软件可以分成三个部分。
> 
> 模型（Model）：数据保存,视图（View）：用户界面,控制器（Controller）：业务逻辑
> 
> **通信**
> View 传送指令到 Controller；Controller 完成业务逻辑后，要求 Model 改变状态；Model 将新的数据发送到 View，用户得到反馈（所有通信都是单向的）
> 
> **MVP 模式**将 Controller 改名为 Presenter，同时改变了通信方向。
> 
> 1.各部分之间的通信都是双向的。2.View与Model不发生联系，都是通过Persenter传递3.View非常薄，不部署任何业务逻辑，称为“被动视图”即没有任何主动性而Presenter非常厚，所有逻辑都部署在哪里
> 
> **MVVM 模式**将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。唯一的区别是，它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel
# vuex #
# this.$nextTick() #
> 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后，立即使用这个回调函数，获取更新后的 DOM。

# 阐述下响应式系统的原理 #
# 如果data选项的属性值是一个数组，Vue是怎么拦截数组变异方法的？ #
# 你刚刚谈到Vue会使用getter/setter监听data选项的属性并且在内部追踪相关依赖，“内部追踪主要指的是？” #
# 那你看过模板编译成渲染函数的源码吗？ #