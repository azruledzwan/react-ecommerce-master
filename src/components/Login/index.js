import React, { Component } from 'react';
import './styles.sass';
import { width } from 'window-size';

class Login extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    return (
      <div className="loginWrapper" style={{width:500, justifyContent:true,}}>
        <h3 className="userName" >User Name</h3>
        <input className="logIn" type="text" style={{width:500}}></input>
        <h3 className="password">Enter Your Password</h3>
        <input className="logIn" type="text" style={{width:500}}></input>
        <center><button className="btnWrapper loginBtn fbBtn">ENTER</button></center>
        <br></br><br></br>
        <h3 className="loginHeading text-center">Login with your social account</h3>
        <div className="btnWrapper">
          <button className="loginBtn fbBtn">Facebook Login</button>
          <button className="loginBtn googleBtn">Google Login</button>
          <button className="loginBtn twitterBtn">Twitter Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
