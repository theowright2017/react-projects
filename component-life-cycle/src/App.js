
import React, { Component } from 'react';

import './App.css';

class App extends Component {
render() {
  return (
    <div className="App">
      <div className="App-header">
        <Body />
        <h2>Components life cycle</h2>
      </div>

    </div>
  );
}
}

class Body extends Component {
  constructor(props){
    super(props);

  this.state = {
    random: 0
  }
}


  getRandomNumber = () => {
    // console.log("random");
    this.setState({random: Math.floor(Math.random()*100)})
  }


  render() {
    return (
      <div>
        <p className="app-intro">
          to get started
        </p>

        <button onClick={this.getRandomNumber}>
          button yo</button>
        <Numbers myNumber={this.state.random}/>
        <p>{this.state.random}</p>

      </div>
    )
  }
}




class Numbers extends Component {


//called when component is about to be mounted
componentWillMount(){
  console.log('component will mount');
}


//called once mounted
componentDidMount(){
  console.log('component did mount');
}


//called when about to receive prop
componentWillReceiveProps(newProps){
  console.log('component will receive props');
}


//further reading needed for below
shouldComponentUpdate(newProps, nextState){
  console.log('Called should component Update');
  return true;
}


componentWillUpdate(newProps, nextState){
  console.log('Called component Will Update');
}


componentDidUpdate(newProps, nextState){
  console.log('Called component Did Update');
}


componentWillUnmount(){
  console.log('Called componentWill un mount');
}



  render() {
    return(
      <div>
        <p>{this.props.myNumber}</p>
      </div>
    )
  }
}




export default App;
