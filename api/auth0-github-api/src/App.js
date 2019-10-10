import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Auth0Lock from 'auth0-lock';

import Github from './Github.js';
import Header from './Components/Header.js';

var cors = require('cors');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: '',
      profile: {}
    };
  }

// now acts as props
  static defaultProps = {
    clientID: 'Cvj7OnXa7QsA32cG6PeVCXoFhiqombLH',
    domain: 'dev-muwdmw8b.eu.auth0.com'
  }


  componentDidMount() {
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain )

      this.lock.on('authenticated', (authResult) => {
      console.log(authResult);

    this.lock.getProfile(authResult.accessToken, (error, profile) => {
      if (error) {
        console.log(error);
        return;
      }
      // console.log(profile);
      this.setProfile(authResult.accessToken, profile);
      });
    });
    this.getProfile();
  }



  setProfile(accessToken, profile) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({
      accessToken: localStorage.getItem('accessToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    })
    console.log(this.state);
  }


  getProfile() {
    if(localStorage.getItem('accessToken' != null)) {
      this.setState({
        accessToken: localStorage.getItem('accessToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, () => {
        console.log(this.state);
      })
    }
  }


  showLock() {
    this.lock.show();
  }

  logout() {
    this.setState({
      accessToken: '',
      profile: {}
    }, () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('profile');
    });
  }


  render() {

    let github;
    if (this.state.accessToken) {
      github = <Github user={this.state.profile.email}/>
    } else {
      github = "Click on Login to view Github Viewer"
    }

  return (
    <div className="App">

      <Header onLogin={this.showLock.bind(this)}
              onLogout={this.logout.bind(this)}
              user={this.state.accessToken}/>


      {github}


    </div>
  );
}
}

export default App;
