---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: zh-CN                              # Lang is required
author: henry
title: Javascript面试题及答案
listnav: false
description: 
excerpt: 
cover: false                          # Leave false if the post does not have cover image, if there is set to true
coverAlt: 封面图
coverExt: png
demo: 
categories:
  - interview
  - Javascript
tags: 
  - 面试
  - js
created_at: 2019-08-18 17:55
updated_at: 2019-08-18 20:04
---
## 1. 简单介绍 JavaScript 的发展历史。ES3、ES5、ES6 分别指什么？
---
20 世纪 90 年代，浏览器领域的竞争异常惨烈。以网景（Netscape——现在的 Mozilla）和微软为首的两大公司迫切需要在其浏览器上添加激动人心的功能来取得优势地位。

为此，1995 年 Netscape 推出了一款脚本语言，让任何人都能够在网页中添加脚本——LiveScript 由此产生，也就是后边更名的 JavaScript 。之所以更名，其实是为了搭上当时 Java 名声在外的顺风车。

而微软的反应则是于 1996 年模仿 JavaScript 开发了一种近似的语言，取名 JScript 。

面对微软带来的压力，Netscape 提交了对 JavaScript 进行标准化的申请，希望以此来对抗微软。ECMAScript 由此诞生，它是所有 JavaScript 实现（无论是浏览器还是其他环境中）的标准语言定义。

随着时间的推移，JavaScript 慢慢站稳了脚跟，也努力地摆脱“业余语言”的名声。

2005 年，Google 发布了 Google Maps ，向全世界展示了 JavaScript 在创建动态网页方面的强大威力。成熟了的 JavaScript 获得了专业开发人员的尊敬，很多杰出的编程语言人员也年复一年地致力于改善 JavaScript 解释器的运行性能。

20 多年的发展，当前所有现代浏览器都至少遵循了 ECMAScript5 。2016、2017、2018 年相继发布了《ECMAScript 2016 标准》、《ECMAScript 2017 标准》、《ECMAScript 2018 标准》也昭告着它的与时俱进。

JavaScript 急匆匆地来到这个世界，却是一款功能和表现力强大的语言。

（当我们提到这门语言本身时，通常所指的语言版本是 ECMAScript3 、ECMAScript5 和 ECMAScript6 。ECMAScript4 已经开发了数年，由于太过庞大，从未发布过正式版本。有时会看到 JavaScript 的版本号——比如 JavaScript1.5 或 JavaScript1.8 ，这些是 Mozilla 的版本号：版本 1.5 基本上就是 ECMAScript3 。）

## 2. 说几条写 JavaScript 的基本规范？
---
1. 不要在同一行声明多个变量；
2. 请使用 ===/!== 来比较 true/false 或者数值；
3. 使用对象字面量替代 new Array 这种形式；
4. 不要使用全局函数；
5. switch 语句必须带有 default 分支；
6. if 语句必须使用大括号；
7. for-in 循环中的变量 应该使用 var 关键字明确限定作用域，从而避免作用域污染。
## 3. JavaScript 代码中的 “use strict” 是什么意思？
---
“use strict” 是一种 ECMAscript 5 添加的（严格）运行模式，这种模式使得 Javascript 在更严格的条件下运行，使 JS 编码更加规范化的模式，消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为。
## 4. 说说严格模式的限制？
1. 变量必须声明后再使用；
2. 函数的参数不能有同名属性，否则报错；
3. 不能使用 with 语句；
4. 禁止 this 指向全局对象。
## 5. NaN 是什么？有什么特别之处？
---
NaN ——not a number ：表示为“不是数字的数字”。所以可以理解为：它也是一个数字类型，不过它不是一个有效的数，表示为错误数字！

特别之处：NaN 和 NaN 是不相等的，即 NaN 与自己不相等。