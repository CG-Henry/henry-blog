---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: zh-CN                              # Lang is required
author: henry
title: vue面试题及答案
listnav: true
description: 
excerpt: 
cover: false                          # Leave false if the post does not have cover image, if there is set to true
coverAlt: 封面图
coverExt: png
demo: 
categories:
  - vuejs
tags: 
  - 面试
  - css
  - vuejs
created_at: 2019-08-18 17:55
updated_at: 2019-08-18 20:04
---
## 1. v-model 的使用？
---
用 v-model 指令在表单` <input>` 、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

v-model 在内部使用不同的属性为不同的输入元素并抛出不同的事件：
1. text 和 textarea 元素使用 value 属性和 input 事件；
2. checkbox 和 radio 使用 checked 属性和 change 事件；
3. select 字段将 value 作为 prop 并将 change 作为事件。
## 2. v-on 可以监听多个方法吗？
---
v-on 可以监听多个方法，例如：
```js
<input type="text" :value="name" @input="onInput" @focus="onFocus" @blur="onBlur" />
```
但是同一种事件类型的方法，vue-cli 工程会报错，例如：
```js
<a href="javascript:;" @click="methodsOne" @click="methodsTwo"></a>
```
会报错。
## 3. 什么是 MVVM？比之 MVC 有什么区别？
---
MVVM 是 Model（模型 ）+ View（视图）+ ViewModel（视图模型）框架，通过 ViewModel 连接数据模型 Model 和 View。

Vue 是数据驱动，通过数据来显示视图层而不是节点操作。
## 4. Vue 的优点？
---
1. __低耦合：__ 视图（View）可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的"View"上，当 View 变化的时候 Model 可以不变，当 Model 变化的时候 View 也可以不变；
2. __可重用性：__ 你可以把一些视图逻辑放在一个 ViewModel 里面，让很多 View 重用这段视图逻辑；
3. __独立开发：__ 开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计；
4. __可测试：__ 界面素来是比较难于测试的，而现在测试可以针对 ViewModel 来写。
## 5. 渐进式框架的理解？
---
渐进式代表的含义是：主张最少。

每个框架都不可避免会有自己的一些特点，从而会对使用者有一定的要求，这些要求就是主张，主张有强有弱，它的强势程度会影响在业务开发中的使用方式。

Angular，它两个版本都是强主张的，如果你用它，必须接受以下东西：
1. 必须使用它的模块机制；
2. 必须使用它的依赖注入；
3. 必须使用它的特殊形式定义组件（这一点每个视图框架都有，难以避免）。

所以 Angular 是带有比较强的排它性的，如果你的应用不是从头开始，而是要不断考虑是否跟其他东西集成，这些主张会带来一些困扰。

比如 React，它也有一定程度的主张，它的主张主要是函数式编程的理念。

你需要知道：
1. 什么是副作用；
2. 什么是纯函数；
3. 如何隔离副作用。

它的侵入性看似没有 Angular 那么强，主要因为它是软性侵入。

Vue 可能有些方面是不如 React，不如 Angular，但它是渐进的，没有强主张，你可以在原有大系统的上面，把一两个组件改用它实现，当 jQuery 用；也可以整个用它全家桶开发，当 Angular 用；还可以用它的视图，搭配你自己设计的整个下层用。

你可以在底层数据逻辑的地方用 OO（面向对象，Object Oriented）和设计模式的那套理念，也可以函数式，都可以，它只是个轻量视图而已，只做了自己该做的事，没有做不该做的事，仅此而已。

所以渐进式的含义没有多做职责之外的事。
## 6. 三大框架的对比？
---
#### 1. Vue 与 AngularJS 的区别
1. 相同点：
   1. 都支持指令：内置指令和自定义指令；
   2. 都支持过滤器：内置过滤器和自定义过滤器；
   3. 都支持双向数据绑定；都不支持低端浏览器。
2. 不同点：
   1. AngularJS 的学习成本高，比如增加了 Dependency Injection 特性，而 Vue.js 本身提供的 API 都比较简单、直观；
   2. 在性能上， AngularJS 依赖对数据做脏检查，所以 Watcher 越多越慢；
   3. Vue.js 使用基于依赖追踪的观察并且使用异步队列更新，所有的数据都是独立触发的。
#### 2. Vue 与 React 的区别
1. 相同点：
   1. React 采用特殊的 JSX 语法，Vue.js 在组件开发中也推崇编写；
   2. Vue 特殊文件格式，对文件内容都有一些约定，两者都需要编译后使用；
   3. 中心思想相同：一切都是组件，组件实例之间可以嵌套；
   4. 都提供合理的钩子函数，可以让开发者定制化地去处理需求；
   5. 都不内置列数 AJAX，Route 等功能到核心包，而是以插件的方式加载；
   6. 在组件开发中都支持 mixins 的特性。
2. 不同点：
   1. React 采用的 Virtual DOM 会对渲染出来的结果做脏检查；
   2. Vue.js 在模板中提供了指令，过滤器等，可以非常方便，快捷地操作 Virtual DOM。
## 7. Vue 生命周期的作用是什么？
---
生命周期中有多个事件钩子，让我们在控制整个 Vue 实例的过程时更容易形成好的逻辑。
## 8. 什么是 Vue 生命周期？
---
Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂载 DOM 、渲染→更新→渲染、销毁等一系列过程，我们称这是 Vue 的生命周期。通俗说就是 Vue 实例从创建到销毁的过程，就是生命周期。

每一个组件或者实例都会经历一个完整的生命周期，总共分为三个阶段：初始化、运行中、销毁。

实例、组件通过 new Vue() 创建出来之后会初始化事件和生命周期，然后就会执行 beforeCreate 钩子函数，这个时候，数据还没有挂载呢，只是一个空壳，无法访问到数据和真实的 DOM ，一般不做操作。

挂载数据，绑定事件等等，然后执行 created 函数，这个时候已经可以使用到数据，也可以更改数据，在这里更改数据不会触发 updated 函数，在这里可以在渲染前倒数第二次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取。

接下来开始找实例或者组件对应的模板，编译模板为虚拟 DOM 放入到 render 函数中准备渲染，然后执行 beforeMount 钩子函数，在这个函数中虚拟 DOM 已经创建完成，马上就要渲染，在这里也可以更改数据，不会触发 updated，在这里可以在渲染前最后一次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取。

接下来开始 render，渲染出真实 DOM，然后执行 mounted 钩子函数，此时，组件已经出现在页面中，数据、真实 DOM 都已经处理好了，事件都已经挂载好了，可以在这里操作真实 DOM 等事情。

当组件或实例的数据更改之后，会立即执行 beforeUpdate，然后 Vue 的虚拟 DOM 机制会重新构建虚拟 DOM 与上一次的虚拟 DOM 树利用 diff 算法进行对比之后重新渲染，一般不做什么事儿。

当更新完成后，执行 updated，数据已经更改完成， DOM 也重新 render 完成，可以操作更新后的虚拟 DOM。

当经过某种途径调用 $destroy 方法后，立即执行 beforeDestroy，一般在这里做一些善后工作，例如清除计时器、清除非指令绑定的事件等等。

组件的数据绑定、监听，去掉后只剩下 DOM 空壳，这个时候，执行 destroyed，在这里做善后工作也可以。

代码示例：
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <aaa></aaa>
    </div>
    <template id="aaa">
        <div>
            <p class="myp">A 组件</p>
            <button @click="destroy">destroy</button>
            <input type="text" v-model="msg">
            <p>msg:{{msg}}</p>
        </div>
    </template>
</body>
<script src="./vue.js"></script>
<script>
    //生命周期：初始化阶段，运行中阶段，销毁阶段。
    Vue.component("aaa", {
        template: "#aaa",
        data: function() {
            return {msg:"hello"}
        },
        timer: null,
        methods: {
            destroy: function() {
                this.$destroy()
            }
        },
        beforeCreate: function() {
            console.log("beforeCreate：刚刚 new Vue() 之后，这个时候，数据还没有挂载呢，只是一个空壳。")           
            console.log(this.msg)  //undefined
            console.log(document.getElementsByClassName("myp")[0])  //undefined
        },
        created: function() {
            console.log("created：这个时候已经可以使用到数据，也可以更改数据，在这里更改数据不会触发 updated 函数。")
            this.msg+="!!!"
            console.log("在这里可以在渲染前倒数第二次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取。")
            console.log("接下来开始找实例或者组件对应的模板，编译模板为虚拟  DOM 放入到 render 函数中准备渲染。")
        },
        beforeMount: function() {
            console.log("beforeMount：虚拟 DOM 已经创建完成，马上就要渲染，在这里也可以更改数据，不会触发 updated。")
            this.msg+="@@@@"
            console.log("在这里可以在渲染前最后一次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取。")
            console.log(document.getElementsByClassName("myp")[0])  //undefined
            console.log("接下来开始 render，渲染出真实 DOM。")
        },
        // render: function(createElement) {
        //     console.log("render")
        //     return createElement("div", "hahaha")
        // },
        mounted: function() { 
            console.log("mounted：此时，组件已经出现在页面中，数据、真实 DOM 都已经处理好了，事件都已经挂载好了。")
            console.log(document.getElementsByClassName("myp")[0])
            console.log("可以在这里操作真实 DOM 等事情。")

        //    this.$options.timer = setInterval(function () {
        //        console.log("setInterval")
        //         this.msg+="!"  
        //    }.bind(this), 500)
        },
        beforeUpdate: function() {
            //这里不能更改数据，否则会陷入死循环。
            console.log("beforeUpdate：重新渲染之前触发。")
            console.log("然后 Vue 的虚拟 DOM 机制会重新构建虚拟 DOM 与上一次的虚拟 DOM 树利用 diff 算法进行对比之后重新渲染。")         
        },
        updated: function() {
            //这里不能更改数据，否则会陷入死循环。
            console.log("updated：数据已经更改完成，DOM 也重新 render 完成")
        },
        beforeDestroy: function() {
            console.log("beforeDestory：销毁前执行（$destroy 方法被调用的时候就会执行），一般在这里善后：清除计时器、清除非指令绑定的事件等等。")
            // clearInterval(this.$options.timer)
        },
        destroyed: function() {
            console.log("destroyed：组件的数据绑定、监听。都去掉了，只剩下 DOM 空壳，这里也可以善后。")
        }
    })
    new Vue({
    }).$mount("#app")
</script>
</html>
```
## 9. 第一次页面加载会触发哪几个钩子？
---
第一次加载会触发 beforeCreate、created、beforeMount、mounted。
## 10. 简述每个周期具体适合哪些场景？
---
生命周期钩子的一些使用方法：
1. beforecreate：可以在这加个 loading 事件，在加载实例时触发；
2. created：初始化完成时的事件写在这里，如在这结束 loading 事件，异步请求也适宜在这里调用；
3. mounted：挂载元素，获取到 DOM 节点；
4. updated：如果对数据统一处理，在这里写上相应函数；
5. beforeDestroy：可以做一个确认停止事件的确认框；
6. nextTick：更新数据后立即操作 DOM。
## 11. created 和 mounted 的区别？
---
1. created：在模板渲染成 HTML 前调用，即通常初始化某些属性值，然后再渲染成视图。
2. mounted：在模板渲染成 HTML 后调用，通常是初始化页面完成后，再对 HTML 的 DOM 节点进行一些需要的操作。
## 12. Vue 获取数据在哪个周期函数？
---
看实际情况，一般在 created（或 beforeRouter）里面就可以，如果涉及到需要页面加载完成之后的话就用 mounted。

在 created 的时候，视图中的 HTML 并没有渲染出来，所以此时如果直接去操作 HTML 的 DOM 节点，一定找不到相关的元素。

而在 mounted 中，由于此时 HTML 已经渲染出来了，所以可以直接操作 DOM 节点，（此时 document.getelementById 即可生效了）。
## 13. $nextTick 的使用？
---
1. 为什么使用 $nextTick？
   1. 因为 Vue 中 DOM 更新是异步的,$nextTick 是 DOM 更新完成后执行的
2. 在 Vue 生命周期的 created() 钩子函数进行的 DOM 操作一定要放在 Vue.nextTick() 的回调函数中？
   1. 在 created() 钩子函数执行的时候 DOM 其实并未进行任何渲染，而此时进行 DOM 操作无异于徒劳，所以此处一定要将 DOM 操作的 JS 代码放进 Vue.nextTick() 的回调函数中。与之对应的就是 mounted() 钩子函数，因为该钩子函数执行时所有的 DOM 挂载和渲染都已完成，此时在该钩子函数中进行任何 DOM 操作都不会有问题 。
3. $nextTick 的其他应用
   1. 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的 DOM 结构的时候，这个操作都应该放进 Vue.nextTick() 的回调函数中。
4. $nextTick 的原理

__作用：__

   Vue.nextTick 用于延迟执行一段代码，它接受 2 个参数（回调函数和执行回调函数的上下文环境），如果没有提供回调函数，那么将返回 promise 对象。

__源码：__

```js
export const nextTick = (function () {
  const callbacks = []
  let pending = false
  let timerFunc
  function nextTickHandler () {
    pending = false
    const copies = callbacks.slice(0)
    callbacks.length = 0
    for (let i = 0; i < copies.length; i++) {
      copies[i]()
    }
  }
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve()
    var logError = err => { console.error(err) }
    timerFunc = () => {
      p.then(nextTickHandler).catch(logError)
      if (isIOS) setTimeout(noop)
    }
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    var counter = 1
    var observer = new MutationObserver(nextTickHandler)
    var textNode = document.createTextNode(String(counter))
    observer.observe(textNode, {
      characterData: true
    })
    timerFunc = () => {
      counter = (counter + 1) % 2
      textNode.data = String(counter)
    }
  } else {
    timerFunc = () => {
      setTimeout(nextTickHandler, 0)
    }
  }
  return function queueNextTick (cb?: Function, ctx?: Object) {
    let _resolve
    callbacks.push(() => {
      if (cb) {
        try {
          cb.call(ctx)
        } catch (e) {
          handleError(e, ctx, 'nextTick')
        }
      } else if (_resolve) {
        _resolve(ctx)
      }
    })
    if (!pending) {
      pending = true
      timerFunc()
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise((resolve, reject) => {
        _resolve = resolve
      })
    }
  }
})()
```
首先，先了解 nextTick 中定义的三个重要变量：
1. callbacks：用来存储所有需要执行的回调函数；
2. pending：用来标志是否正在执行回调函数；
3. timerFunc：用来触发执行回调函数。

接下来，了解 nextTickHandler() 函数：
```js
function nextTickHandler () {
  pending = false
  const copies = callbacks.slice(0)
  callbacks.length = 0
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}
```
这个函数用来执行 callbacks 里存储的所有回调函数。

接下来是将触发方式赋值给 timerFunc：
1. 先判断是否原生支持 promise，如果支持，则利用 promise 来触发执行回调函数；
2. 否则，如果支持 MutationObserver，则实例化一个观察者对象，观察文本节点发生变化时，触发执行所有回调函数；
3. 如果都不支持，则利用 setTimeout 设置延时为 0。
最后是 queueNextTick 函数。因为 nextTick 是一个即时函数，所以 queueNextTick 函数是返回的函数，接受用户传入的参数，用来往 callbacks 里存入回调函数。
![nextTick](/blog/images/posts/2019/8/640.webp)
上图是整个执行流程，关键在于 timeFunc()，该函数起到延迟执行的作用。

从上面的介绍，可以得知 timeFunc() 一共有三种实现方式：
1. Promise
2. MutationObserver
3. setTimeout

其中 Promise 和 setTimeout 很好理解，是一个异步任务，会在同步任务以及更新 DOM 的异步任务之后回调具体函数。
## 14. 组件间的通信？
---
__直接的父子关系：__
1. 父组件向子组件传递数据通过 prop 传递；
2. 子组件传递数据给父组件通过 $emit 触发事件；
3. 父组件通过 ref 直接访问子组件实例的属性和方法；
4. 通过 $parent/$children：访问父/子实例。
__祖孙关系：__
1. $attrs 和 $listeners；
2. 利用 provide/inject，向所有子孙后代注入依赖；
3. $boradcast 和 $dispatch。
__没有直接关系：__
1. 借助于中央事件总线 event bus 进行通讯；
2. 利用 vuex 进行通讯；
3. 利用 cookie 和 localstorage 进行通讯；
4. 利用 session 进行通讯。

另外还可以使用工具函数找到任意组件实例进行通信。

无论使用什么前端框架，组件之间的通讯都离开不以上几种方案，这些方案与具体框架无关。
__组件通信方式：__
#### 1. props 和 $emit

父组件向子组件传递数据是通过 prop 传递的，子组件传递数据给父组件是通过 $emit 触发自定义事件来做到的。
```js
Vue.component("child", {
  data() {
    return {
      mymessage: this.message
    }
  },
  template:`
    <div>
      <input type="text" v-model="mymessage" @input="passData(mymessage)"> </div>
  `,
  //得到父组件传递过来的数据
  props: ["message"],
  methods: {
    passData(val) {
      //触发父组件中的事件
      this.$emit("getChildData", val)
    }
  }
})
Vue.component("parent", {
  template:`
    <div>
      <p>this is parent compoent!</p>
      <child :message="message" v-on:getChildData="getChildData"></child>
    </div>
  `,
  data() {
    return {
      message: "hello"
    }
  },
  methods: {
    //执行子组件触发的事件
    getChildData(val) {
      console.log(val)
    }
  }
})
var app = new Vue({
  el: "#app",
  template: `
    <div>
        <parent></parent>
    </div>
  `
})
```
在上面的例子中，有父组件 parent 和子组件 child。

父组件传递了 message 数据给子组件，并且通过 v-on 绑定了一个 getChildData 事件来监听子组件的触发事件；子组件通过 props 得到相关的 message 数据，最后通过 this.$emit 触发了 getChildData 事件。

#### 2. ref、$parent 以及 $children

ref：给元素或组件注册引用信息；

$parent/$children：访问父/子实例。

用 ref 来访问组件（部分代码省略）：
```js
//component-a
export default {
  data() {
    return {
      title: "Vue.js"
    }
  },
  methods: {
    sayHello() {
      window.alert("Hello");
    }
  }
}


<template>
  <component-a ref="comA"></component-a>
</template>
<script>
  export default {
    mounted() {
      const comA = this.$refs.comA;
      console.log(comA.title);  //Vue.js
      comA.sayHello();  //弹窗
    }
  }
</script>
```
$parent 和 $children 类似，也是基于当前上下文访问父组件或全部子组件的。

vm.parent 指定已创建的实例之父实例，在两者之间建立父子关系。子实例可以用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中。

节制地使用 $parent 和 $children： 它们的主要目的是作为访问组件的应急方法。更推荐用 props 和 events 实现父子组件通信。

vm.$children 当前实例的直接子组件。

这两种方法的弊端是，无法在跨级或兄弟间通信，比如下面的结构：

```js
// parent.vue
<component-a></component-a>
<component-b></component-b>
<component-b></component-b>
```
我们想在 component-a 中，访问到引用它的页面中（这里就是 parent.vue）的两个 component-b 组件，那这种情况下，是暂时无法实现的，后面会讲解到方法。

#### 3.  $attrs 和 $listeners

前面两种方式处理父子组件之间的数据传输有一个问题：如果父组件A下面有子组件 B，组件 B 下面有组件 C，这时如果组件 A 想传递数据给组件 C 怎么办呢？ 

如果采用第一种方法，我们必须让组件 A 通过 prop 传递消息给组件 B，组件 B 在通过 prop 传递消息给组件 C；要是组件 A 和组件 C 之间有更多的组件，那采用这种方式就很复杂了。

Vue 2.4 开始提供了$attrs 和 $listeners 来解决这个问题，能够让组件 A 之间传递消息给组件 C
```js
Vue.component("C", {
  template: `
    <div>
      <input type="text" v-model="$attrs.messagec" @input="passCData($attrs.messagec)"> </div>
  `,

  methods:{
    passCData(val) {
      //触发父组件 A 中的事件
      this.$emit("getCData", val)
    }
  }
})

Vue.component("B", {
  data() {
    return {
      mymessage: this.message
    }
  },
  template: `
    <div>
      <input type="text" v-model="mymessage" @input="passData(mymessage)"> 
      <!-- C 组件中能直接触发 getCData 的原因在于 B 组件调用 C 组件时 使用 v-on 绑定了 $listeners 属性 -->
      <!-- 通过 v-bind 绑定 $attrs 属性，C 组件可以直接获取到 A 组件中传递下来的 props（除了 B 组件中 props 声明的） -->
      <C v-bind="$attrs" v-on="$listeners"></C>
    </div>
  `,
  props: ["message"],  //得到父组件传递过来的数据
  methods: {
    passData(val) {
      //触发父组件中的事件
      this.$emit("getChildData", val)
    }
  }
})

Vue.component("A", {
  template: `
    <div>
      <p>this is parent compoent!</p>
      <B :messagec="messagec" :message="message" v-on:getCData="getCData" v-on:getChildData="getChildData(message)"></B>
    </div>
  `,
  data() {
    return {
      message: "hello",
      messagec: "hello c" //传递给 c 组件的数据
    }
  },
  methods:{
    getChildData(val) {
      console.log("这是来自 B 组件的数据")
    },
    //执行C子组件触发的事件
    getCData(val) {
      console.log("这是来自 C 组件的数据："+ val)
    }
  }
})
var app = new Vue({
  el: "#app",
  template: `
    <div>
      <A></A>
    </div>
  `
})
```
#### 4. provide/inject
前面几种方法，如果祖孙隔代太远就不好用了。可以使用一种无依赖的组件通信方法：Vue.js 内置的 provide/inject 接口。

provide/inject 是 Vue.js 2.2.0 版本后新增的 API，在文档中这样介绍： 这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。

如果你熟悉 React，这与 React 的上下文特性很相似。 provide 和 inject 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中。 假设有两个组件： A.vue 和 B.vue，B 是 A 的子组件:
```js
//A.vue
export default {
  provide: {
    name: "Aresn"
  }
}

// B.vue
export default {
  inject: ["name"],
  mounted() {
    console.log(this.name);  //Aresn
  }
}
```
需要注意的是：provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。

只要一个组件使用了 provide 向下提供数据，那其下所有的子组件都可以通过 inject 来注入，不管中间隔了多少代，而且可以注入多个来自不同父级提供的数据。

需要注意的是，一旦注入了某个数据，那这个组件中就不能再声明 这个数据了，因为它已经被父级占有。

provide/inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。

然后有两种场景它不能很好的解决：
1. 父组件向子组件（支持跨级）传递数据；
2. 子组件向父组件（支持跨级）传递数据。

这种父子（含跨级）传递数据的通信方式，Vue.js 并没有提供原生的 API 来支持，下面介绍一种在父子组件间通信的方法 dispatch 和 broadcast。

#### 5. $boradcast 和 $dispatch
在 Vue.js 1.x 中，提供了两个方法：$dispatch 和 $broadcast，前者用于向上级派发事件，只要是它的父级（一级或多级以上），都可以在组件内通过 $on（或 events，2.x 已废弃）监听到，后者相反，是由上级向下级广播事件的。

这两个方法虽然看起来很好用，但是在 Vue.js 2.x 中都废弃了，官方给出的解释是：
>因为基于组件树结构的事件流方式有时让人难以理解，并且在组件结构扩展的过程中会变得越来越脆弱。
很多开源软件都自己封装了这种方式，比如 element ui 和 iview 等。

我们可以自行实现 dispatch 和 broadcast 方法，具有以下功能：
1. 在子组件调用 dispatch 方法，向上级指定的组件实例（最近的）上触发自定义事件，并传递数据，且该上级组件已预先通过 $on 监听了这个事件；
2. 相反，在父组件调用 broadcast 方法，向下级指定的组件实例（最近的）上触发自定义事件，并传递数据，且该下级组件已预先通过 $on 监听了这个事件。

实现这对方法的关键点在于，如何正确地向上或向下找到对应的组件实例，并在它上面触发方法。

在设计一个新功能（features）时，可以先确定这个功能的 API 是什么，也就是说方法名、参数、使用样例，确定好 API，再来写具体的代码。

因为 Vue.js 内置的方法，才是以 $ 开头的，比如 $nextTick、$emit 等，为了避免不必要的冲突并遵循规范，这里的 dispatch 和 broadcast 方法名前不加 $。

并且该方法可能在很多组件中都会使用，复用起见，我们封装在混合（mixins）里。那它的使用样例可能是这样的：
```js
// 部分代码省略
import Emitter from "../mixins/emitter.js"

export default {
  mixins: [Emitter],
  methods: {
    handleDispatch() {
      this.dispatch();  //①
    },
    handleBroadcast() {
      this.broadcast();  //②
    }
  }
}
```
上例中行①和行②的两个方法就是在导入的混合 emitter.js 中定义的，这个稍后我们再讲，先来分析这两个方法应该传入什么参数。

一般来说，为了跟 Vue.js 1.x 的方法一致，第一个参数应当是自定义事件名，比如 “test”，第二个参数是传递的数据，比如 “Hello, Vue.js”，但在这里，有什么问题呢？只通过这两个参数，我们没办法知道要在哪个组件上触发事件，因为自行实现的这对方法，与 Vue.js 1.x 的原生方法机理上是有区别的。

上文说到，实现这对方法的关键点在于准确地找到组件实例。那在寻找组件实例上，我们的“惯用伎俩”就是通过遍历来匹配组件的 name 选项，在独立组件（库）里，每个组件的 name 值应当是唯一的，name 主要用于递归组件，在后面小节会单独介绍。

先来看下 emitter.js 的代码：
```js
function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name;

    if(name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    }else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;

      while(parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if(parent) {
          name = parent.$options.name;
        }
      }
      if(parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};
```
因为是用作 mixins 导入，所以在 methods 里定义的 dispatch 和 broadcast 方法会被混合到组件里，自然就可以用 this.dispatch 和 this.broadcast 来使用。

这两个方法都接收了三个参数，第一个是组件的 name 值，用于向上或向下递归遍历来寻找对应的组件，第二个和第三个就是上文分析的自定义事件名称和要传递的数据。

可以看到，在 dispatch 里，通过 while 语句，不断向上遍历更新当前组件（即上下文为当前调用该方法的组件）的父组件实例（变量 parent 即为父组件实例），直到匹配到定义的 componentName 与某个上级组件的 name 选项一致时，结束循环，并在找到的组件实例上，调用 $emit 方法来触发自定义事件 eventName。broadcast 方法与之类似，只不过是向下遍历寻找。

来看一下具体的使用方法。有 A.vue 和 B.vue 两个组件，其中 B 是 A 的子组件，中间可能跨多级，在 A 中向 B 通信：
```js
<!-- A.vue -->
<template>
  <button @click="handleClick">触发事件</button>
</template>
<script>
  import Emitter from "../mixins/emitter.js";

  export default {
    name: "componentA",
    mixins: [Emitter],
    methods: {
      handleClick() {
        this.broadcast("componentB", "on-message", "Hello Vue.js");
      }
    }
  }
</script>
//B.vue
export default {
  name: "componentB",
  created() {
    this.$on("on-message", this.showMessage);
  },
  methods: {
    showMessage(text) {
      window.alert(text);
    }
  }
}
```
同理，如果是 B 向 A 通信，在 B 中调用 dispatch 方法，在 A 中使用 $on 监听事件即可。

以上就是自行实现的 dispatch 和 broadcast 方法，相比 Vue.js 1.x，有以下不同：

需要额外传入组件的 name 作为第一个参数；

无冒泡机制；

第三个参数传递的数据，只能是一个（较多时可以传入一个对象），而 Vue.js 1.x 可以传入多个参数，当然，你对 emitter.js 稍作修改，也能支持传入多个参数，只是一般场景传入一个对象足以。
#### 6. 找到任意组件实例——findComponents 系列方法
前面我们已经介绍了两种组件间通信的方法：provide/inject 和 dispatch/broadcast。它们有各自的使用场景和局限，比如前者多用于子组件获取父组件的状态，后者常用于父子组件间通过自定义事件通信。

现在将介绍第 3 种组件通信方法，也就是自行实现 findComponents 系列方法，以工具函数的形式来使用，它是一系列的函数，可以说是组件通信的终极方案。findComponents 系列方法最终都是返回组件的实例，进而可以读取或调用该组件的数据和方法。

它适用于以下场景：
1. 由一个组件，向上找到最近的指定组件；
2. 由一个组件，向上找到所有的指定组件
3. 由一个组件，向下找到最近的指定组件；
4. 由一个组件，向下找到所有指定的组件；
5. 由一个组件，找到指定组件的兄弟组件。

5 个不同的场景，对应 5 个不同的函数，实现原理也大同小异。都是通过递归、遍历，找到指定组件的name选项匹配的组件实例并返回。
1. 向上找到最近的指定组件——findComponentUpward

先看代码：
```js
//assist.js
//由一个组件，向上找到最近的指定组件。
function findComponentUpward(context, componentName) {
  let parent = context.$parent;
  let name = parent.$options.name;

  while(parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent;
    if(parent) name = parent.$options.name;
  }
  return parent;
}
export {findComponentUpward};
```
findComponentUpward 接收两个参数，第一个是当前上下文，比如你要基于哪个组件来向上寻找，一般都是基于当前的组件，也就是传入 this；第二个参数是要找的组件的 name。

该方法会在 while 语句里不断向上覆盖当前的 parent 对象，通过判断组件（即 parent）的 name 与传入的 componentName 是否一致，直到直到最近的一个组件为止。

与 dispatch 不同的是，该方法是直接拿到组件的实例，而非通过事件通知组件。只会找到最近的一个组件实例，如果要找到全部符合要求的组件，就需要用到下面的这个方法。
1. 向上找到所有的指定组件——findComponentsUpward

代码如下：
```js
//assist.js
//由一个组件，向上找到所有的指定组件。
function findComponentsUpward(context, componentName) {
  let parents = [];
  const parent = context.$parent;

  if(parent) {
    if(parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentName));
  }else {
    return [];
  }
}
export {findComponentsUpward};
```
与 findComponentUpward 不同的是，findComponentsUpward 返回的是一个数组，包含了所有找到的组件实例（注意函数名称中多了一个“s”）。

该方法的使用场景较少，一般只用在递归组件里面，因为这个函数是一直向上寻找父级（parent）的，只有递归组件的父级才是自身。

1. 向下找到最近的指定组件——findComponentDownward

代码如下：
```js
//assist.js
//由一个组件，向下找到最近的指定组件。
function findComponentDownward(context, componentName) {
  const childrens = context.$children;
  let children = null;

  if(childrens.length) {
    for(const child of childrens) {
      const name = child.$options.name;

      if(name === componentName) {
        children = child;
        break;
      }else {
        children = findComponentDownward(child, componentName);
        if(children) break;
      }
    }
  }
  return children;
}
export {findComponentDownward};
```
context.$children 得到的是当前组件的全部子组件，所以需要遍历一遍，找到有没有匹配到的组件 name，如果没找到，继续递归找每个 $children 的 $children，直到找到最近的一个为止。

1. 向下找到所有指定的组件——findComponentsDownward

如果要向下找到所有的指定组件，要用到 findComponentsDownward 函数，代码如下：
```js
//assist.js
//由一个组件，向下找到所有指定的组件。
function findComponentsDownward(context, componentName) {
  return context.$children.reduce((components, child) => {
    if(child.$options.name === componentName) components.push(child);
    const foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
}
export {findComponentsDownward};
```
这个函数实现的方式有很多，这里巧妙使用 reduce 做累加器，并用递归将找到的组件合并为一个数组并返回，代码量较少，但理解起来稍困难。

1. 找到指定组件的兄弟组件——findBrothersComponents

代码如下：
```js
//assist.js
//由一个组件，找到指定组件的兄弟组件
function findBrothersComponents(context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName;
  });
  let index = res.findIndex(item => item._uid === context._uid);
  if(exceptMe) res.splice(index, 1);
  return res;
}
export {findBrothersComponents};
```
相比其它 4 个函数，findBrothersComponents 多了一个参数 exceptMe，是否把本身除外，默认是 true。寻找兄弟组件的方法，是先获取 context.$parent.$children，也就是父组件的全部子组件，这里面当前包含了本身，所有也会有第三个参数 exceptMe。Vue.js 在渲染组件时，都会给每个组件加一个内置的属性 _uid，这个 _uid 是不会重复的，借此我们可以从一系列兄弟组件中把自己排除掉。

#### 7. 事件总线（EventBus）

在 Vue 中可以使用 EventBus 来作为沟通桥梁的概念，就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件，所以组件都可以上下平行地通知其他组件。

新建一个 Vue 事件 bus 对象，然后通过 bus.$emit 触发事件，bus.$on 监听触发的事件。
```js
Vue.component("brother1", {
  data() {
    return {
      mymessage: "hello brother1"
    }
  },
  template: `
    <div>
      <p>this is brother1 compoent!</p>
      <input type="text" v-model="mymessage" @input="passData(mymessage)"> 
    </div>
  `,
  methods: {
    passData(val) {
      //触发全局事件 globalEvent
      bus.$emit("globalEvent", val)
    }
  }
})
Vue.component("brother2", {
  template: `
    <div>
      <p>this is brother2 compoent!</p>
      <p>brother1传递过来的数据：{{brothermessage}}</p>
    </div>
  `,
  data() {
    return {
      mymessage: "hello brother2",
      brothermessage: ""
    } 
  },
  mounted() {
    //绑定全局事件globalEvent
    bus.$on("globalEvent", (val)=>{
      this.brothermessage = val;
    })
  }
})
//中央事件总线
var bus = new Vue();

var app = new Vue({
  el: "#app",
  template: `
    <div>
      <brother1></brother1>
      <brother2></brother2>
    </div>
  `
})
```
对于全局的事件还有一处简单的写法，即利用 $root 元素：

vm.$root 是当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己。
```js
this.$root.$emit("event", "params")

//在另一个组件内
this.$root.$on("event, function(params) {})
```
#### 8. Vuex

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

当我们的应用遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏：
1. 多个视图依赖于同一状态。
2. 来自不同视图的行为需要变更同一状态。

对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。

对于问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。

我们可以把组件的共享状态抽取出来，以一个全局单例模式管理呢。在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！

另外，通过定义和隔离状态管理中的各种概念并强制遵守一定的规则，我们的代码将会变得更结构化且易维护。

这就是 Vuex 背后的基本思想，借鉴了 Flux、Redux 和 The Elm Architecture。与其他模式不同的是，Vuex 是专门为 Vue.js 设计的状态管理库，以利用 Vue.js 的细粒度数据响应机制来进行高效的状态更新。

#### 9. 利用 cookie 或者 localstorage 进行通讯
![cookie_localstorage](/blog/images/posts/2019/8/cookie.webp)

示例代码片段：
```js
window.localStorage.setItem("json", JSON.stringify({name: "金俊", age: 18}));

var json = window.localStorage.getItem("json");
//window.localStorage.removeItem("json");
var obj = JSON.parse(json);
console.log(obj.name);
console.log(obj.age);
```
cookie、localstorage 这些东西都可以直接用原生的 API 进行操作。

#### 10. 利用 session 进行通讯
![session](/blog/images/posts/2019/8/session.webp)