---
view: post
layout: post                        # Only in unique we use the "layout: post"
lang: zh-CN                         # Lang is required
author: henry
title: http面试题及答案
categories: 
  - Javascript
tags: 
  - Javascript
  - http
created_at: 2019-09-21 00:00
updated_at: 2019-09-21 00:00
meta:
  - property: og:image
    content: https://henrycgh.github.io/blog/blog-background.jpg
  - name: twitter:image
    content: https://henrycgh.github.io/blog/blog-background.jpg
---
## 1. Http与Https的区别
---
1. HTTP 的URL 以http:// 开头，而HTTPS 的URL 以https:// 开头
2. HTTP 是不安全的，而 HTTPS 是安全的
3. HTTP 标准端口是80 ，而 HTTPS 的标准端口是443
4. 在OSI 网络模型中，HTTP工作于应用层，而HTTPS 的安全传输机制工作在传输层
5. HTTP 无法加密，而HTTPS 对传输的数据进行加密
6. HTTP无需证书，而HTTPS 需要CA机构wosign的颁发的SSL证书
## 2. 什么是Http协议无状态协议?怎么解决Http协议无状态协议?
---
1. 无状态协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息
   1. 也就是说，当客户端一次HTTP请求完成以后，客户端再发送一次HTTP请求，HTTP并不知道当前客户端是一个”老用户“。
2. 可以使用Cookie来解决无状态的问题，Cookie就相当于一个通行证，第一次访问的时候给客户端发送一个Cookie，当客户端再次来的时候，拿着Cookie(通行证)，那么服务器就知道这个是”老用户“。