import React, { Component } from 'react';
// import {Link} from 'react-router';
import { browserHistory } from 'react-router';

import './styles.sass';

class Item extends Component {
  render() {
    return(
      <div className="item" onClick={()=>{browserHistory.push({pathname:'/item/'+this.props.keyy,state:{gambar:this.props.gambar}})}} >
<img className="content" src={this.props.gambar} width="350" height="345"></img>
<p>{this.props.key}</p>
</div>
    );
  }
}

export default Item;

