import React, {Component} from 'react';

let firebase = require('firebase');

let config = {
  apiKey: "AIzaSyAXfFEcd4hjauK7DcDtO41nMoDNKsqVQu4",
  authDomain: "u-survey-a5394.firebaseapp.com",
  databaseURL: "https://u-survey-a5394.firebaseio.com",
  projectId: "u-survey-a5394",
  storageBucket: "",
  messagingSenderId: "421955787648",
  appId: "1:421955787648:web:9fe511351a742c92ff7f65",
  measurementId: "G-YWJCV8V818"
};
  firebase.initializeApp(config);



class Authen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      err: ''
    }

    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.logOut = this.logOut.bind(this);
    this.google = this.google.bind(this);
  }




  login(event) {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);

    promise
    .then( user => {
      let lout = document.getElementById('logout');
      lout.classList.remove('hide');
      let error = "Welcome " + user.user.email;
      this.setState({err: error})
    })
    .catch(e => {
      let error = e.message;
      console.log(error);
      this.setState({err: error})
    });
  }




  signUp() {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise
    .then(user => {
      let error = "Welcome " + user.user.email;
      firebase.database().ref('users/' + user.user.uid).set({
        email: user.user.email
      // console.log(user);
      // console.log(user.user.email);
      });
      // console.log(user);
      this.setState({err: error})
    })
    .catch(e => {
      let error = e.message;
      // console.log(error);
      this.setState(({err: error}))
    });

  }




  logOut(event) {
    firebase.auth().signOut();
    let lout = document.getElementById('logout');
    lout.classList.add('hide');
    let message = "Thanks for coming";
    this.setState({err: message})

    document.getElementById('email').value="";
    document.getElementById('pass').value="";
  }



  google() {
    console.log("google method");

    let provider = new firebase.auth.GoogleAuthProvider();
    let promise = firebase.auth().signInWithPopup(provider);

    promise
    .then( result => {
        let user = result.user;
        console.log(result);
        firebase.database().ref('users/' + user.uid).set({
          email: user.email,
          name: user.displayName
        })
      })
    .catch( e => {
      let message = e.message;
      console.log(message);
    })

  }



  render() {
    return(
      <div>
        <input id="email" type="email" ref="email" placeholder="Enter your email" />
        <input id="pass" type="password" ref="password" placeholder="Enter your password" />
        <br />
        <p>{this.state.err}</p>

        <button onClick={this.login}>Log In</button>
        <button onClick={this.signUp}>Sign Up</button>
        <button id="logout" className="hide" onClick={this.logOut}>Log Out</button>
        <br />

        <button onClick={this.google} id="google" className="google">Sign in with Google</button>

      </div>
    )
  }
}

export default Authen;
