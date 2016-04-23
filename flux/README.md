# Flux

我们知道 React 仅仅是 UI 层面上的框架，或者说 MVC 中的 V层。而V层能够解决的页面逻辑十分有限，因此我们需要一种架构来对应用的代码逻辑进行梳理，使页面代码易于开发和维护。

## 1.简介

Flux是单向数据流动的一个架构

React可以看做一个声明式的View

Flux 的出现使代码变得具有 __可预见性__ ，这对开发效率以及单元测试提供了很大的便利

这里通过分析官网上的[todo-list的教程](http://facebook.github.io/flux/docs/todo-list.html#content)的源码来深入Flux的思想

## 2.目录结构

    flux
    ├── README.md
    ├── css
    │   └── app.css
    ├── index.html
    ├── js
    │   ├── actions
    │   │   └── TodoActions.js
    │   ├── app.js
    │   ├── components
    │   │   ├── Footer.react.js
    │   │   ├── Header.react.js
    │   │   ├── MainSection.react.js
    │   │   ├── TodoApp.react.js
    │   │   ├── TodoItem.react.js
    │   │   └── TodoTextInput.react.js
    │   ├── constants
    │   │   └── TodoConstants.js
    │   ├── dispatcher
    │   │   └── AppDispatcher.js
    │   └── stores
    │       └── TodoStore.js
    └── todomvc-common
        ├── base.css
        ├── bg.png
        ├── bower.json
        └── readme.md


## 2.创建一个 __Dispatcher__

首先定义一个 `AppDispatcher`, 并且将其与 Flux 里已经定义好的 Dispatcher 对象的原型进行合并。（这里可以直接使用 ES6 语法 `Object.assign(target, sources)`)

什么是`dispatcher`？
dispatcher 是一个重要的事件系统，它被用来广播事件以及注册回调函数。Flux已经给出了dispacher的[实现方式](http://facebook.github.io/flux/docs/todo-list.html#creating-a-dispatcher)，我们只需要实例化这个构造函数。(在此之前需要通过bower或者npm安装flux)

AppDispatcher.js

    import flux from 'flux';
    var Dispatcher = flux.Dispatcher;

    module.exports = new Dispatcher();

这样我们就在 AppDispatcher.js 里面构建了一个 dispatcher 的实例

## 3.Createing Stores

同时在 dispatcher 里注册事件

## 参考链接

- [flux for stupid people](http://blog.andrewray.me/flux-for-stupid-people/)
- [Flux 架构入门教程](http://www.ruanyifeng.com/blog/2016/01/flux.html)
- [Flux TodoMVC Example](https://github.com/facebook/flux/tree/master/examples/flux-todomvc)
- [Tutorial – Todo List](http://facebook.github.io/flux/docs/todo-list.html#content)
