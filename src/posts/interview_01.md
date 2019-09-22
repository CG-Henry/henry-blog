---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: zh-CN                              # Lang is required
author: henry
title: 2020面试题 
listnav: true
categories:
  - interview
tags:
  - 面试
created_at: 2019-09-20 02:50
updated_at: 2019-07-23 02:55
---
## 1. 原型与原型链
### 1-1 原型对象
---
javascript语言是一种面向对象的语言，它没有'子类'和'父类'的概念，里面所有的数据类型都是对象。

Brendan Eich在考虑设计继承机制的时候，参考了C++和JAVA使用new命令，通过调用类的构造函数生成实例的方式，将new命令引入javascript。

C++的写法：
```js
ClassName *object = new ClassName(param);
```
Java的写法是：
```js
Person person = new Person();
```
但是，javascript里面没有“类”这个概念，那么，Brendan Eich决定直接在new后面跟一个构造函数，来生成实例。

构造函数是什么？构造函数与其他函数唯一的区别在于调用方式不同。任何函数只要通过new来调用就可以作为构造函数，它是用来创建特定类型的对象。

下面定义一个构造函数Female：
```js
function Female(name){
    this.name = name;
    this.sex = 'female';  
 }
```
通过new命令来生成一个person实例：
```js
var person1 = new Female("Summer")
```
这里，构造函数Female就是实例对象person1的原型！！！Female里的this关键字就指的是person1这个对象！

new出来的person1对象此时已经和Female再无联系了！也就是说每一个new出来的实例都有自己的属性和方法的副本，是独立的的！修改其中一个不会影响另一个！
```js
var person1 = new Female("Summer");
var person2 = new Female("Lily");

person2.sex = 'male';

console.log(person1.sex)      // female
console.log(person2.sex)      // male
```
但是，我们希望构造函数中的sex属性是一个共有属性，那么此时用这样的方法，每个实例中都有一个相同的sex属性，会造成资源极大的浪费！

那么原型对象就即将登场了！Brendan Eich决定给每一个构造函数都设置一个prototype属性，这个属性就指向原型对象。其实原型对象就只是个普通对象，里面存放着所有实例对象需要共享的属性和方法！所以，我们把需要共享的放到原型对象里，把那些不需要共享的属性和方法存在在构造函数里！

那么上面的代码可改写如下：
```js
function Person(name,age){
            this.name = name;
        }
        Person.prototype.sex = 'female';

        var person1 = new Person("Summer");
        var person2 = new Person("Lily");
        
        console.log(person1.sex)      // female
        console.log(person2.sex)      // female

        Person.prototype.sex = 'male';

        console.log(person1.sex)      // male
        console.log(person2.sex)      // male
```
可以看出，修改prototype属性会影响它的所有实例的sex的值！！

实例一旦创建出来就会自动引用prototype对象的属性和方法！所以实例对象的属性和方法一般分为两种：一种是自身的，一种是引用自prototype的。

具体实现是这样的：

每当代码读取某个对象的某个属性的时候，都会执行一次搜索。首先从对象实例本身开始，如果在实例中找到了该属性，则返回该属性的值，如果没有找到，则顺着原型链指针向上，到原型对象中去找，如果如果找到就返回该属性值。

这里要提一点，如果为对象实例添加了一个属性与原型中同名，则该属性会屏蔽掉原型中的同名属性，不会去修改它！使用delete可以删除实例中的属性提到delete那要插一句~delete只能删除对象下的属性，不能删除变量和参数！

### 1-2 原型链
---
事实上，js里完全依靠"原型链"(prototype chain)模式来实现继承。

上面说完原型对象。下面要扒一扒proto、prototype、constructor。
1. proto：事实上就是原型链指针！
2. prototype：这个是指向原型对象的
3. constructor：每一个原型对象都包含一个指向构造函数的指针，就是constructor
#### 继承实现方式：
为了实现继承，proto会指向上一层的原型对象，而上一层的结构依然类似，那么就利用proto一直指向Object的原型对象上！Object.prototype.`__proto__`= null;表示到达最顶端。如此形成了原型链继承。

图解：

![prototype](/blog/images/posts/2019/9/prototype.png)

### 总结
1. Object是作为众多new出来的实例的基类 function Object(){ [ native code ] }
2. Function是作为众多function出来的函数的基类 function Function(){ [ native code ] }
3. 构造函数的proto(包括Function.prototype和Object.prototype)都指向Function.prototype
4. 原型对象的proto都指向Object.prototype
5. Object.prototype.proto指向null
## 2. 闭包
---
在 JS 开发中，我们会经常用到闭包，一个内部函数，有权访问包含其的外部函数中的变量。

下面这种情况下，闭包也会造成内存泄露:
```js
var theThing = null;
var replaceThing = function () {
 var originalThing = theThing;
 var unused = function () {
  if (originalThing) // 对于 'originalThing'的引用
  console.log("hi");
 };
 theThing = {
  longStr: new Array(1000000).join('*'),
  someMethod: function () {
  console.log("message");
  }
 };
};
setInterval(replaceThing, 1000);
```
这段代码，每次调用 replaceThing 时，theThing 获得了包含一个巨大的数组和一个对于新闭包 someMethod 的对象。

同时 unused 是一个引用了 originalThing 的闭包。

这个范例的关键在于，闭包之间是共享作用域的，尽管 unused 可能一直没有被调用，但是 someMethod 可能会被调用，就会导致无法对其内存进行回收。

当这段代码被反复执行时，内存会持续增长。