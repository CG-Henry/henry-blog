---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: zh-CN                              # Lang is required
author: henry
title: html面试题及答案
listnav: true                        # listnav 博客列表菜单是否显示
description: 
excerpt: 
cover: false                          # Leave false if the post does not have cover image, if there is set to true
coverAlt: 封面图
coverExt: png
demo: 
categories:
  - interview
  - html
tags: 
  - html
  - 面试
created_at: 2019-08-18 17:55
updated_at: 2019-08-18 20:04
meta:
  - property: og:image
    content: https://henrycgh.github.io/blog/blog-background.jpg
  - name: twitter:image
    content: https://henrycgh.github.io/blog/blog-background.jpg
---

## 1. doctype 有什么作用？怎么写？
---
DOCTYPE 标签是一种标准通用标记语言的文档类型声明，它的目的是要告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（DTD）来解析文档。

每个页面都要从 doctype 开始，它为浏览器指定这个页面的文档类型，以便浏览器更正确的显示 HTML。只要按照<!DOCTYPE html> 这样的格式和位置写，那么浏览器就会认为你在使用标准 HTML。
### 怎么写：
 1.  doctype 之前只能有注释和空白；

 2.  doctype 拼写大小写无所谓，但推荐一致：

```js
<!DOCTYPE html>
<!doctype html> 
```
## 2. 列出常见的标签，并简单介绍这些标签用在什么场景？
---
1. 如果是标题，就用 `<h1> ~ <h6>`；
2. 如果是一段话，就用 `<p>`；
3. 如果不知道他是什么，如果这个东西能占一行，就用`<div>`；
4. 如果没有一行，就一个小小的位置，就用`<span>`；
5. 如果是可点击的就用一个`<a>`链接；
6. 如果像那种并列一排排的，甚至还有一点一点，就用“列表”；
7. 如果看到一个表格，就用`<table>`；
8. 如果看到了一个输入框，就用`<input>`。
## 3. 页面出现了乱码，是怎么回事？如何解决？
---
1. 当我们保存一个写好的 HTML 文件，编码方式会保存为 UTF-8；
2. 一个文件就是一堆的数据，即我们写的内容变成了一堆的数据。那这个数据到底是变成了 123，还是 456 呢？
3. 这里我们就用到了“编码”，用的编码方式不一样，那么数据呈现的状态就不一样；
4. 然后，当我们把这个以适当编码方式保存好的数据再次展示在浏览器页面上时（或用其他编辑器打开时），这个数据还要再恢复出来；
5. 这时候，浏览器（或编辑器）需要使用相同的、与文件相对应的编码方式去解码（但浏览器不是万能的，你不告诉他，他就不知道用什么方式去解码，他会随意选择）；
6. 这时，当编码是一种方式，而解码又是另一种方式时，页面就会出现“乱码”；而解决乱码的方式就是：只需要知道我在编辑器保存这个 HTML 文件时，保存的什么编码格式，然后在头部 `<meta charset="?">`中告诉浏览器用什么方式来解码。
## 4. title 属性和 alt 属性分别有什么作用？
---
title 属性有一个很好的用途：即为链接添加描述性文字，特别是当链接本身并不是十分清楚的表达了链接的目的。
这样就使得访问者知道那些链接将会带他们到什么地方，他们就不会加载一个可能完全不感兴趣的页面。
另外一个潜在的应用就是为图像提供额外的说明信息，比如日期或者其他非本质的信息。
alt 这个属性主要是为了规避例如：因网速差、硬件设备限制等外部因素，我们的浏览器不能很好的显示出图像，那 alt 后边的文本将会取代图像告诉用户这里会是什么东西。
```js
<a href="这里写链接地址" title="Oli的前端一万小时">知乎-oliver</a>

<!-- 注释：这里的 title 属性，作用就是：当我们把鼠标停在 oliver 上时，会弹出一个文本框：
Oli-Zhao的前端一万小时。-->
```
## 5. html 的注释怎样写？
---
```js
<!--这是注释-->
```
## 6. HTML5 为什么只写 <!DOCTYPE HTML> ？
---
HTML5 不基于 SGML，因此不需要对 DTD 进行引用，但是需要 doctype 来规范浏览器的行为（让浏览器按照他们应该的方式来运行）。
而 HTML4.01 基于 SGML，所以需要对 DTD 进行引用，才能告知浏览器文档所使用的文档类型。
## 7. data- 属性的作用？
---
data- 为 H5 新增的为前端开发者提供自定义的属性，这些属性集可以通过对象的 dataset 属性获取；
不支持该属性的浏览器可以通过 getAttribute 方法获取 。
需要注意的是：data- 之后的以连字符分割的多个单词组成的属性，获取的时候使用驼峰风格。所有主流浏览器都支持 data-* 属性。
即：当没有合适的属性和元素时，自定义的 data 属性是能够存储页面或 App 的私有的自定义数据。
## 8. <img> 的 title 和 alt 有什么区别？
---
1. title 通常当鼠标滑动到元素上的时候显示；
2. `alt`是`<img> `的特有属性，是图片内容的等价描述，用于图片无法加载时显示、读屏器阅读图片。可提图片高可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析。
## 9. WEB 标准以及 W3C 标准是什么？
---
标签闭合、标签小写、不乱嵌套、使用外链css和js、结构行为表现的分离。
## 10. doctype 作用? 严格模式与混杂模式如何区分？它们有何意义?
---
`<!DOCTYPE>`声明位于文档中的最前面，处于`<html>`标签之前。告知浏览器的解析器， 用什么文档类型 规范来解析这个文档。严格模式的排版和 JS 运作模式是 以该浏览器支持的最高标准运行。在混杂模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作。DOCTYPE 不存在或格式不正确会导致文档以混杂模式呈现。
## 11. HTML 全局属性（global attribute）有哪些？
---
1. class：为元素设置类标识；
2. data-*：为元素增加自定义属性；
3. draggable：设置元素是否可拖拽；
4. id：元素 id，文档内唯一；
5. lang：元素内容的的语言；
6. style：行内 css 样式；
7. title：元素相关的建议信息。
## 12. meta 有哪些常见的值？
---
1. 指定文档编码：
```js
<meta charset="UTF-8">
```
2. 适配移动端页面：
```js
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```
3. 定制页面图标：
```js
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"> 
<!-- 注释：href="favicon.ico" 这里边放这个图标的图形文件地址。-->
```
4. 设置 referer：
```js
<meta name="referer" content="never">
```
5. 添加页面描述
```js
<meta name="description" content="注册即代表你同意《知乎协议》注册机构号……">
```
## 13. meta viewport 是做什么用的，怎么写？
---
1. meta viewport 是适配移动端页面的。
```js
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```
## 14. 如何在 html 页面上展示 <div></div> 这几个字符？
---
```js
&lt;div&gt;&lt;/div&gt;
```
## 15. 你是如何理解 HTML 语义化的？
---
>用正确的标签做正确的事情！
1. html 语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；
2. 在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的；
3. 搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于 SEO；
4. 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。
>比如：
1. 标题可以用 `<h1> ~ <h6>`；
2. 边栏用`<aside>`；
3. 头部用`<header>`；
4. 主体内容用`<main>`；
5. 页脚用`<footer>`；
## 16. 前端需要注意哪些 SEO？
---
1. 合理的 title、description、keywords：
   1. 搜索对着三项的权重逐个减小，title 值强调重点即可，重要关键词出现不要超过 2 次，而且要靠前，不同页面 title 要有所不同；
   2. description 把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面 description 有所不同；
   3. keywords 列举出重要关键词即可。
2. 语义化的 HTML 代码，符合 W3C 规范：语义化代码让搜索引擎容易理解网页。
3. 重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取。
4. 重要内容不要用 js 输出：爬虫不会执行 js 获取内容。
5. 少用 iframe：搜索引擎不会抓取 iframe 中的内容
6. 非装饰性图片必须加 alt。
7. 提高网站速度：网站速度是搜索引擎排序的一个重要指标。
## 17. 你对网页标准和 W3C 重要性的理解？
---
网页标准和标准制定机构都是为了能让 Web 发展的更健康，开发者遵循统一的标准，降低开发难度，开发成本，SEO 也会更好做，也不会因为滥用代码导致各种 bug、安全问题，最终提高网站易用性。
## 18. post 和 get 方式提交数据有什么区别？
