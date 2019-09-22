---
view: post
layout: post                          # Only in unique we use the "layout: post"
lang: zh-CN                              # Lang is required
author: henry
title: css面试题及答案
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
  - css
created_at: 2019-08-18 17:55
updated_at: 2019-08-18 20:04
---
## 1. BCF(block formatting context)

它决定了元素如何对其内容进行定位以及与其他元素的关系和相互作用，当涉及到可视化布局的时候， `block formatting context` 提供了一个环境，html元素在这个环境中按照一定的规则进行布局。

---
最常用的触发规则：
1. float不为none
2. position不为relative和static
3. overflow为auto scroll和hidden
4. display的值为table-cell或inline-block