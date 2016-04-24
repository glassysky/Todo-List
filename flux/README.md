# Flux

我们知道 React 仅仅是 UI 层面上的框架，或者说 MVC 中的 V层。而V层能够解决的页面逻辑十分有限，因此我们需要一种架构来对应用的代码逻辑进行梳理，使页面代码易于开发和维护。

## 1.简介

Flux是单向数据流动的一个架构

React可以看做一个声明式的View

Flux 的出现使代码变得具有 __可预见性__（输入固定的值，输出也是固定的，不会因为其他数据变化而发生变化） ，这对开发效率以及单元测试提供了很大的便利

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


## 3.创建一个 __Dispatcher__

什么是`dispatcher`？
dispatcher 是一个重要的事件系统，它被用来广播事件以及注册回调函数。Flux已经给出了dispacher的[实现方式](http://facebook.github.io/flux/docs/todo-list.html#creating-a-dispatcher)，我们只需要实例化这个构造函数。(在此之前需要通过bower或者npm安装flux)

dispatcher/AppDispatcher.js

    import flux from 'flux';
    var Dispatcher = flux.Dispatcher;

    module.exports = new Dispatcher();

这样我们就在 AppDispatcher.js 里面构建了一个 dispatcher 的实例

基础的 Dispatcher 只有两个方法 `register` 和 `dispatch`。接下来我们将看到如何在 store 内部使用 Dispatcher 注册回调函数；以及在 actions 内部使用 Dispatcher 去触发回调。

## 4.创建 __Store__

在创建 store 之前，我们先梳理一下这个 todo-list 需要广播哪些事件，也就是在什么情况下我们需要 __通过Flux__ 重新渲染视图。

- TODO_CREATE
- TODO_COMPLETE
- TODO_DESTROY
- TODO_DESTROY_COMPLETED
- TODO_TOGGLE_COMPLETE_ALL
- TODO_UNDO_COMPLETE
- TODO_UPDATE_TEXT

官方建议我们把事件名称定义成常量保存在一个单独的JS文件中，虽然这给人的第一感觉是把代码复杂化了，但如果在一个大型多人项目中，这会使大家更高效的配合。当然这一步骤并__不是必须的__，是否定义成常量完全取决于你自己。

constants/TodoConstants.js

    import keyMirror from 'keyMirror';

    // Input: {key1: val1, key2: val2}
    //Output: {key1: key1, key2: key2}

    module.exports = keyMirror({
        TODO_CREATE: null,
        TODO_COMPLETE: null,
        TODO_DESTROY: null,
        TODO_DESTROY_COMPLETED: null,
        TODO_TOGGLE_COMPLETE_ALL: null,
        TODO_UNDO_COMPLETE: null,
        TODO_UPDATE_TEXT: null
    });

注释中的内容简单说明了 keyMirror 的作用，更详细的内容请看[文档](https://www.npmjs.com/package/keymirror)

下面我们来定义这个 store  

stores/TodoStore.js  

    //引入之前定义过的 dispatcher 和 constants
    import AppDispatcher from '../dispatcher/AppDispatcher';
    import TodoConstants from '../constants/TodoConstants';

    //引入一个事件触发器
    import event from 'events';
    let EventEmitter = event.EventEmitter;

    //定义私有变量 _todos 对象，里面存放todo项包含内容
    _todos = {};

    //TodoStore 里包含了操作store的公共方法
    var TodoStore = Object.assign({}, EventEmitter.prototype, {
        getAll: function() {
            return _todos;
        }
        ...
    })

_todos 作为一个保存了所有todo项目信息的私有对象只能通过 action 来改变。

## 参考链接

- [flux for stupid people](http://blog.andrewray.me/flux-for-stupid-people/)
- [Flux 架构入门教程](http://www.ruanyifeng.com/blog/2016/01/flux.html)
- [Flux TodoMVC Example](https://github.com/facebook/flux/tree/master/examples/flux-todomvc)
- [Tutorial – Todo List](http://facebook.github.io/flux/docs/todo-list.html#content)
