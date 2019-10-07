import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>prop number is : {this.props.propNumber}</h3>
        <h3>prop string is : {this.props.propString}</h3>
        <h3>prop object is : {this.props.propObject.obj1}</h3>

        <Parent />
      </div>
    );
  }
}

//different types of prop are available

//most data types are available as props
// App.propTypes = {
//   propObject: React.PropTypes.object,
//   propString: React.PropTypes.string,
//   propNumber: React.PropTypes.number
// }

App.defaultProps = {
  propNumber: 3,
  propString: "THis is prop string",
  propObject: {
    obj1: "I am obj 1",
    obj2: "I am obj 2",
    obj3: "I am obj 3"
  }

}





class Parent extends Component {
  constructor(props){
    super(props);

    this.state = {
      cars: ['s-BMW', 's-MERC', 's-City', 's-Audi']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState( {cars: this.state.cars.reverse()});
  }

  render(){
    return(
      <div>
        <h2 onClick={this.handleClick}>Just some info</h2>
        <Cars msg="cars are cool" model="34765" coolCars={this.state.cars}/>
      </div>
    );
  }
}

// notice difference between state and props 'cars'

Parent.defaultProps = {
  cars: ['BMW', 'MERC', 'City', 'Audi']
}
// as long as parent component passes down prop to child component i.e this.state.cars



class Cars extends Component {

  render(){
    console.log(this.props);

    // be sure to log key
    return(
      <div>
        <h3> I am from cars component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <div>{this.props.coolCars.map((item, i) => {
            return <p key={i}>{item}</p>
            })}
        </div>
      </div>
    );
  }
}

export default App;
