import React, { Component } from 'react';
import logo from './logo.svg';
import Todos from './components/Todos';
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Take out the trash 2',
        completed: false
      },
      {
        id: 3,
        title: 'Take out the trash 3',
        completed: false
      }
    ]
  }
  render (){
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    ) 
  }
}

export default App;
