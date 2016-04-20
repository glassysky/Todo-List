import React from 'react';

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
