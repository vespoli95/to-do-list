import React from 'react';
import logo from './logo.svg';
import Item from './Item';
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


function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {/* {formatDate(props.date)} */}
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <img src={logo} className="App-logo" alt="logo" />       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main id="main">
        <Item item="This is a test" />;
      </main>
    </div>
  );
}

export default App;
