import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './components/TodoApp.react';

import '../css/app.css';
import '../todomvc-common/base.css';

ReactDOM.render(
    <TodoApp />,
    document.getElementById('todoapp')
);
