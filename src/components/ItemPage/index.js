import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles.sass';

class ItemPage extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    return (
      <div className="itemPageWrapper">
        <div />
        <img src={this.props.location.state.gambar} alt="Trulli" className="itemImgWrapper" width="350" height="500" ></img>
      
        <div className="itemInfoWrapper">
          <Link className="backLink" to="/">
            <span className="small">
              <svg fill="#000000" height="13" viewBox="0 0 18 15" width="13" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10l5 5 5-5z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </span>All Items
          </Link>
          <h3 className="itemName">Nike Air VaporMax Flyknit 3</h3>
          <p className="itemCost frm">IDR 2,909,000</p>
          <p className="description">
          Be bouncy and elegent in the Nike Air VaporMax Flyknit 3. Inspired by high fashion, the upper features flowing lines of breathable, stretchable Flyknit construction. Revolutionary VaporMax Air technology keeps a spring in your step with toe-to-heel cushioning.
          </p>
          <p className="seller frm">By <span>TelUum</span></p>
          <button className="reqTradeBtn normalBtn">Add To Cart</button>
        </div>

      </div>
    );
  }
}

export default ItemPage;
