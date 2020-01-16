import React from 'react';
import logo from './logo.svg';
import List from './List';
import './App.css';

function formatName(user){
  return user.firstname + " " + user.lastname;
}

function getHeader(user){
  if (user){
    return <h4 className="header">{formatName(user)}</h4>;
  }
  return <h4>Welcome</h4>;
}

const user = {
  firstname: "Anthony",
  lastname: "Vespoli"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <main id="main" class="container">
        <List name="Anthony"/>
      </main>
    </div>
  );
}

export default App;
