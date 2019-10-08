import React, {Component} from 'react';


let firebase = require('firebase');
let uuid = require('uuid');

var config = {
  apiKey: "AIzaSyAXfFEcd4hjauK7DcDtO41nMoDNKsqVQu4",
  authDomain: "u-survey-a5394.firebaseapp.com",
  databaseURL: "https://u-survey-a5394.firebaseio.com",
  projectId: "u-survey-a5394",
  storageBucket: "",
  messagingSenderId: "421955787648",
  appId: "1:421955787648:web:088e8b742513d44aff7f65",
  measurementId: "G-84MVKGXWLM"
};
firebase.initializeApp(config);

class Usurvey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName: '',
      answers: {
        answer1: '',
        answer2: ''
      },
      isSubmitted: false
    }
    this.nameSubmit = this.nameSubmit.bind(this)
    this.answerSelected = this.answerSelected.bind(this)
    this.questionSubmit = this.questionSubmit.bind(this)
  }



  nameSubmit(event) {
    // this will pull the input value from the input box, via the ref value
    let studentName = this.refs.name.value.charAt(0).toUpperCase() + this.refs.name.value.slice(1);

    // use callback function to log state only after the state has been set
    this.setState({studentName}, function() {
      console.log(this.state);
    })
  }

  answerSelected(event) {

    let answers = this.state.answers;
    if(event.target.name === 'answer1'){
      answers.answer1 = event.target.value;
    } else if ( event.target.name === 'answer2') {
        answers.answer2 = event.target.value;
    }

    this.setState({answers: answers}, function() {
      console.log(this.state);
    })
  }

  questionSubmit() {
    firebase.database().ref('uSurvey/' + this.state.uid).set({
      studentName: this.state.studentName,
      answers: this.state.answers
    });
    this.setState({
      isSubmitted: true
    })
  }


  render() {
    let studentName, questions;

    //if student name is empty, it takes form of request
    if (this.state.studentName === '' &&
        this.state.isSubmitted === false) {
          studentName =
          <div>
            <h1>What is your name?</h1>
            <form onSubmit={this.nameSubmit}>

              <input className="name" type="text" placeholder="Enter your name" ref="name" />
            </form>
          </div>;
          questions = '';
          // else if name is populated, ask next question
        } else if ( this.state.studentName !== '' &&
                    this.state.isSubmitted === false) {
            studentName =
                  <div>
                        <h1>Welcome to the U-Survey, {this.state.studentName}</h1>
                  </div>
            questions =
                  <div>
                    <h2>Please answer the following questions: </h2>
                    <form onSubmit={this.questionSubmit}>

                      <div className="card">
                        <label>What courses are you interested in?</label>
                        <br />
                        <input type="radio" name="answer1" value="Technology" onChange={this.answerSelected} />Technology
                        <input type="radio" name="answer1" value="Design" onChange={this.answerSelected} />Design
                        <input type="radio" name="answer1" value="Marketing" onChange={this.answerSelected} />Marketing
                      </div>

                      <div className="card">
                        <label>What is your current situation?</label>
                        <br />
                        <input type="radio" name="answer2" value="A Student" onChange={this.answerSelected} />Student
                        <input type="radio" name="answer2" value="In-Work" onChange={this.answerSelected} />In work
                        <input type="radio" name="answer2" value="Unemployed" onChange={this.answerSelected} />Unemployed
                      </div>
                      <input className="feedback-button" type="submit" value="submit" />
                    </form>
                  </div>
        } else if (this.state.isSubmitted === true) {
          studentName =
            <div>
              <h2>Thanks, {this.state.studentName}</h2>
            </div>
        }

    return(
      <div>
        <p>usurvey</p>
        {studentName}
        -----------------------------
        {questions}
      </div>
    )
  }
}

export default Usurvey;
