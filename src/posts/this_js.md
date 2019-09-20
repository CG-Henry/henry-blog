---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: zh-CN                              # Lang is required
author: henry
title: This 指向
listnav: true 
description: 
excerpt: 
cover: false                          # Leave false if the post does not have cover image, if there is set to true
coverAlt: 封面图
coverExt: png
demo: 
categories:
  - Javascript
tags: 
  - Javascript
created_at: 2019-08-19 00:00
updated_at: 2019-08-19 00:04
---
## this 指向
---
#### 1. this指向的，永远只可能是对象！
#### 2. this指向谁，永远不取决于this写在哪！而是取决于函数在哪调用。
#### 3. this指向的对象，我们称之为函数的上下文context，也叫函数的调用者。
---
#### 举例：
#### 1. 通过函数名()直接调用：this指向window；（fun()---指向window）
#### 2. 通过对象.函数名()调用的：this指向这个对象；(object.fun()---指向object)；
#### 3. 函数作为数组的一个元素，通过数组下标调用的：this指向这个数组；
```js
function func(){
            console.log(this);
        }
var arr = [func,1,2,3];
arr[0]();  // this指向arr
```

#### 4. 函数作为window内置函数的回调函数调用：this指向window（ setInterval setTimeout 等）；
```js
function func(){
            console.log(this);
        }
setTimeout(func,1000);// this指向window
//setInterval(func,1000);
```

#### 5.  函数作为构造函数，用new关键字调用时：this指向新new出的对象；
```js
function func(){
            console.log(this);
        }
var obj = new func(); //this指向new出的新obj
```