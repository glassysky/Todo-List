# Redux

notes:  
- 单一状态变化树 （single immutable state tree)
    - 所有的信息和变化都被保存在一个state tree中
- 用 action 描述 state 的变化
    - 如果想要改变 state 只能通过 dispatch 一个 action 来改变state
- pure and impure function
    - pure functions returns only depend on argus and do not modify the argus
- The Reducer Function
    - previous state + dispatching action = next state
- Writing a Counter Reducer with Tests
    - Reducer recipe __state__ and __action__ as argus and return the next state
- Store Methods: __getState__ , __dispatch__ , __subscribe__
    - getState be used to get state value form store
    - dispatch be used to dispatch actions
    - subscribe will be called when an action was dispatched
- implementing store form scratch
    - every listener will be called if any dispatch run
    - reducer will be return in case we want to unsubscribe it
- react counter example
    - render application with react
- avoiding array mutations with concat, slice, and ...spread
    - use as method ? return what you want to get finally
- avoding object mutations with object.assign and ...spread
- write a todo list reducer
- connect() & Provider
- pass 'action creator' into dispatch function
- redux dev tools(chrome plugin)
