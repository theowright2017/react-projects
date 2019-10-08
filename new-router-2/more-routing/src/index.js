import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import One from './One.js';
import Two from './Two.js';
import Three from './Three.js';

import NoMatch from './NoMatch.js'


ReactDOM.render(

  <BrowserRouter>
    <div>
      <Route path="/" component={App}></Route>
      <Route path="/one" component={One}></Route>
      <Route path="/two" component={Two}></Route>
      <Route path="/three" component={Three}></Route>



    </div>
  </BrowserRouter>

  ,
  document.getElementById('root'));


    // <Route path="*" component={NoMatch}></Route>




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
