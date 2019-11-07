import React, { Component } from 'react';
import { Link } from 'react-router';

import './styles.sass';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.previousWidth = 0;
    this.menuButton = (
      <button className="menuBtn"
        onClick={
          () => {
            document.querySelector(".menu").classList.toggle("open");
          }
        }
      >
        MENU
      </button>
    );

    this.loggedInMenu = (
      <div className="menu" style={{display: 'flex', justifyContent: 'center'}}>
        <Link onlyActiveOnIndex={true} key={1} to="/" activeClassName="activeNavLink" className="navLink">
          Home
        </Link>
        <Link onlyActiveOnIndex={true} key={3} to="/Profile" activeClassName="activeNavLink" className="navLink">
          Register
        </Link>
        <Link onlyActiveOnIndex={true} key={4} to="/login" activeClassName="activeNavLink" className="navLink">
          Login
        </Link>
        <Link onlyActiveOnIndex={true} key={2} to="/trades" activeClassName="activeNavLink" className="navLink">
          Cart
        </Link>
      </div>
    );

    this.loggedOutMenu = (
      <div className="menu loginMenu">
        <Link onlyActiveOnIndex={true} key={5} activeClassName="activeNavLink" className="navLink">
          LogIn / Sign Up
        </Link>
      </div>
    );

    this.setNav();
    this.setMenuState(window.innerWidth);
    this.previousWidth = window.innerWidth;

  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setMenuState(window.innerWidth);
    });
  }

  setMenuState(width) {
    if (this.previousWidth !== width) {
      if (width > 768) {
        const menu = document.querySelector('div.menu');
        if(menu) {
          menu.classList.remove("open");
        }
        this.setState({menuActive: false});
      } else {
        this.setState({menuActive: true});
      }
      this.previousWidth = width;
    }
  }

  setNav() {
    // check for auth here
    const True = true;
    if (True) {
      this.setState({ nav: this.loggedInMenu });
    } else {
      this.setState({ nav: this.loggedOutMenu });
    }
  }

  render() {
    return (
      <header >
        <center>
        <div >
        <h1><center>
        <Link onlyActiveOnIndex={true} to="/" className="logo">Nike Store</Link>
        </center></h1>
        
        {this.state.menuActive ? this.menuButton: ""}
        {this.state.nav}
        </div>
        </center>
      </header>
    );
  }
}

export default Header;
