import React from 'react';
import logo from './logo.svg';
import './App.css';


import TimerNew from './TimerNew.js';

function App() {
  return (
    <div className="App">



      <TimerNew start={Date.now()}/>
    </div>
  );
}

export default App;

//commit
