import React from 'react';
import logo from './dice.svg';
import './App.css';

function App() {

  const handleClick = () => {
    console.log('was click');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>message</p>
        <button className="button" onClick={handleClick}>Button</button>
      </header>
    </div>
  );
}

export default App;
