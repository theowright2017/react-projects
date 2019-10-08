import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} />
      <p> app</p>
      </header>
      <ul>
        <li>
          <Link to="/one">One</Link>
        </li>
        <li>
          <Link to="/two">Two</Link>
        </li>
        <li>
          <Link to="/three">Three</Link>
        </li>
    
      </ul>
    </div>
  );
}
}

export default App;
