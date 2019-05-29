import React, { useState } from 'react';
import logo from './dice.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('initial message');

  const handleClick = () => {
    console.log('was click');
    setMessage('Button clicked');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
        <button className="button" onClick={handleClick}>Button</button>
      </header>
    </div>
  );
}

export default App;
