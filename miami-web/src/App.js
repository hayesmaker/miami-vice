import React from 'react';
import './App.css';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8081');



function App() {

  socket.emit('command:build', ["my first custom command argument"]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Taito SUCKS DICK!</h1>
      </header>
    </div>
  );
}

export default App;
