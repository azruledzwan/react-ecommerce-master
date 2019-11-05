import React, { Component } from 'react';
// import {Link} from 'react-router';
import { browserHistory } from 'react-router';

import './styles.sass';

class Item extends Component {
  render() {
    return(
      <div className="item" onClick={()=>{browserHistory.push('/item/123');}} >
        <img className="content" src="http://www.healthworks.org.uk/media/import/Images/nike%20pegasus%2033%20black%20running%20shoes-638brw.jpg"  width="350" height="345"></img>
      </div>
    );
  }
}

export default Item;
