---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: zh-CN                              # Lang is required
author: henry
title: html面试题及答案
description: 
excerpt: 
cover: false                          # Leave false if the post does not have cover image, if there is set to true
coverAlt: 封面图
coverExt: png
demo: 
categories:
  - interview
tags: 
  - 面试
  - html
created_at: 2019-08-18 17:55
updated_at: 2019-08-18 20:04
meta:
  - property: og:image
    content: https://henrycgh.github.io/blog/blog-background.jpg
  - name: twitter:image
    content: https://henrycgh.github.io/blog/blog-background.jpg
---

## 1. doctype 有什么作用？怎么写？
DOCTYPE 标签是一种标准通用标记语言的文档类型声明，它的目的是要告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（DTD）来解析文档。

每个页面都要从 doctype 开始，它为浏览器指定这个页面的文档类型，以便浏览器更正确的显示 HTML。只要按照<!DOCTYPE html> 这样的格式和位置写，那么浏览器就会认为你在使用标准 HTML。
### 怎么写：
 1.  doctype 之前只能有注释和空白；

 2.  doctype 拼写大小写无所谓，但推荐一致：

```js
<!DOCTYPE html>
<!doctype html> 
```
---
## 2. 列出常见的标签，并简单介绍这些标签用在什么场景？
1. 如果是标题，就用 `<h1> ~ <h6>`；
2. 如果是一段话，就用 `<p>`；
3. 如果不知道他是什么，如果这个东西能占一行，就用`<div>`；
4. 如果没有一行，就一个小小的位置，就用`<span>`；
5. 如果是可点击的就用一个`<a>`链接；
6. 如果像那种并列一排排的，甚至还有一点一点，就用“列表”；
7. 如果看到一个表格，就用`<table>`；
8. 如果看到了一个输入框，就用`<input>`。
---
## 3. 页面出现了乱码，是怎么回事？如何解决？
1. 当我们保存一个写好的 HTML 文件，编码方式会保存为 UTF-8；
2. 一个文件就是一堆的数据，即我们写的内容变成了一堆的数据。那这个数据到底是变成了 123，还是 456 呢？
3. 这里我们就用到了“编码”，用的编码方式不一样，那么数据呈现的状态就不一样；
4. 然后，当我们把这个以适当编码方式保存好的数据再次展示在浏览器页面上时（或用其他编辑器打开时），这个数据还要再恢复出来；
5. 这时候，浏览器（或编辑器）需要使用相同的、与文件相对应的编码方式去解码（但浏览器不是万能的，你不告诉他，他就不知道用什么方式去解码，他会随意选择）；
6. 这时，当编码是一种方式，而解码又是另一种方式时，页面就会出现“乱码”；而解决乱码的方式就是：只需要知道我在编辑器保存这个 HTML 文件时，保存的什么编码格式，然后在头部 `<meta charset="?">`中告诉浏览器用什么方式来解码。
---
## 4. title 属性和 alt 属性分别有什么作用？
title 属性有一个很好的用途：即为链接添加描述性文字，特别是当链接本身并不是十分清楚的表达了链接的目的。
这样就使得访问者知道那些链接将会带他们到什么地方，他们就不会加载一个可能完全不感兴趣的页面。
另外一个潜在的应用就是为图像提供额外的说明信息，比如日期或者其他非本质的信息。
alt 这个属性主要是为了规避例如：因网速差、硬件设备限制等外部因素，我们的浏览器不能很好的显示出图像，那 alt 后边的文本将会取代图像告诉用户这里会是什么东西。
```js
<a href="这里写链接地址" title="Oli的前端一万小时">知乎-oliver</a>

<!-- 注释：这里的 title 属性，作用就是：当我们把鼠标停在 oliver 上时，会弹出一个文本框：
Oli-Zhao的前端一万小时。-->
```
---
## 5. html 的注释怎样写？
```js
<!--这是注释-->
```