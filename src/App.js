import React, { useState } from 'react';
import logo from './dice.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState(
    'No queries have initiated'
  );

  const [status, setStatus] = useState(
    'default'
  );

  const handleClick = () => {
    setStatus('processing');
    fetch('/api')
      .then(response => response.json() )
      .then(response => {
        console.log(response);
        setMessage(response.message);
        if (response.status) {
          setStatus('success');
        } else {
          setStatus('failure');
        }
      })
      .catch(() => {
        setMessage('API is not responding. Please try next time.');
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={`message ${status}`}>{message}</p>
        <button className="button" onClick={handleClick}>Button</button>
      </header>
    </div>
  );
}

export default App;
