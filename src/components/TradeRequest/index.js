import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles.sass';

class TradeRequest extends Component {
  render() {
    return (
      <div className="trWrapper">
        <div className="upper">
          <div />
          
          <img className="userImg" src="https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/yhkjnveanaaq4qu7vupc/air-vapormax-flyknit-3-shoe-FZBdxt.jpg" ></img>
          <h4>
            <Link>NIKE AIR VAPORMAX FLYKNIT 3</Link><br></br>
            <Link>IDR 2,909,000</Link><br></br>
          </h4><br>
          </br>
        </div>
        <div className="tradeBtnWrapper lower">
        <button className="acceptBtn normalBtn">Make Payment</button>
         </div>
      </div>
    );
  }
}

export default TradeRequest;
