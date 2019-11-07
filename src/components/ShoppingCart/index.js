import React, { Component } from 'react';

import './styles.sass';

class ShoppingCart extends Component {
    componentDidMount() {
      document.body.scrollTop = 0;
      document.querySelector('.menu').classList.remove('open');
    }

    render() {
        return (
        <div className="Shopping-cart">
        
        <div class="title">
            <h3 className="CartHeading text-center">MY CART</h3>
        </div>

        <div class="item">
            <div class="buttons">
                <span class="delete-btn"></span>
                
            </div>
 
            <div class="image">
                <img src="item-1.png" alt="" />
            </div>
 
            <div class="quantity">
                <button class="plus-btn" type="button" name="button">
                    <img src="plus.svg" alt="" />
                </button>
                <input type="text" name="name" value="1">
                <button class="minus-btn" type="button" name="button">
                    <img src="minus.svg" alt="" />
                </button>
                </input>
            </div>
 
            <div class="total-price">$549</div>
        </div>

    </div>
          
    
    
        );
    }
}
export default ShoppingCart;