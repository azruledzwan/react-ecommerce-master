import React, { Component } from 'react';

import './styles.sass';

class ShoppingCart extends Component {
    componentDidMount() {
      document.body.scrollTop = 0;
      document.querySelector('.menu').classList.remove('open');
    }

    render() {
        return (

            <div className="loginWrapper">
            <h3 className="loginHeading text-center">My Cart</h3>
            <div className="btnWrapper">
            <div className="buttons">
                <span class="delete-btn"></span>
                
            </div>
              <button className="loginBtn fbBtn">Facebook Login</button>
              <button className="loginBtn googleBtn">Google Login</button>
              <button className="loginBtn twitterBtn">Twitter Login</button>
            </div>
          </div>
        
        <div className="popup" onclick="myFunction()">Click me!
        <span class="popuptext" id="myPopup">Popup text...</span>
      </div>
    
    
        );
    }
}
export default ShoppingCart;