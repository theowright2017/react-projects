import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  onLogin() {
    this.props.onLogin();
  }

  logout() {
    this.props.onLogout();
  }

  render(){

    let log;

    if (this.props.user === '') {
      log = <NavItem onClick={this.onLogin.bind(this)} href="#">Login</NavItem>
    } else {
      log = <NavItem onClick={this.logout.bind(this)} href="#">Logout</NavItem>
    }

    return(

        <Navbar>
          <Navbar className="Header">
              <Navbar.Brand>
                  Github Searcher
              </Navbar.Brand >
          </Navbar>

          <Nav>
            {log}
          </Nav>
        </Navbar>

    )
  }
};

export default Header;
