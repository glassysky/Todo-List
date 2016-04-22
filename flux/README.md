#Flux

我们知道 React 仅仅是 UI 层面上的框架，或者说 MVC 中的 V层。而V层能够解决的页面逻辑十分有限，因此我们需要一种架构来对应用的代码逻辑进行梳理，使页面代码易于开发和维护。

##1.简介

Flux -- single directional data flow

React -- Declarative views

这里讲通过一个 todo-list 的实现来讲解flux：

##1.源码结构



##2.Creating a Dispatcher

首先定义一个 `AppDispatcher`, 并且将其与 Flux 里已经定义好的 Dispatcher 对象的原型进行合并。（这里可以直接使用 ES6 语法 `Object.assign(target, sources)`)

##3.Createing Stores

同时在 dispatcher 里注册事件

##参考链接

- [flux for stupid people](http://blog.andrewray.me/flux-for-stupid-people/)
- [Flux 架构入门教程](http://www.ruanyifeng.com/blog/2016/01/flux.html)
- [Flux TodoMVC Example](https://github.com/facebook/flux/tree/master/examples/flux-todomvc)
- [Tutorial – Todo List](http://facebook.github.io/flux/docs/todo-list.html#content)
