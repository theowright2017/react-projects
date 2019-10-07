import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import CourseSales from './Components/CourseSales.js';

class App extends Component {


  render() {
    
      let courses = [
        { name: 'complete iOS dev course', price: 299 },
        { name: 'complete front end dev', price: 430 },
        { name: 'complete java', price: 356 }
      ];

  return (
    <div className="App">
      <h2>Welcome to course purchase page</h2>

    <CourseSales items={courses}/>
    </div>
  );
}
}

export default App;
