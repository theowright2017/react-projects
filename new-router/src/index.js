import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';

ReactDOM.render(<Router>
  <div>
    <ul>
      <li> <Link to="/"> Home </Link></li>
      <li> <Link to="/about"> About </Link></li>
      <li> <Link to="/contact"> Contact</Link></li>

    </ul>

    <hr />

    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>

  </div>
</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
