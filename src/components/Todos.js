import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

class Todos extends React.Component {
    render(){
        return this.props.todos.map((todo) => {
            <TodoItem key={todo.id} todo={todo} />
        });
    }

}
export default Todos;
