import React from 'react';
import TodoActions from '../actions/TodoActions';
import TodoItem from './TodoItem.react';

var ReactPropTyeps = React.PropTyeps;

var MainSection = React.createClass({
    render: function(){
        return (
            <section id="main">
                <input
                    id="toggle-all"
                    type="checkbox"
                />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul id="todo-list"></ul>
            </section>
        );
    }
});

module.exports = MainSection;
