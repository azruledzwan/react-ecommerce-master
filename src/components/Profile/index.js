import React, { Component } from 'react';

import './styles.sass';

class OtherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationEditing: false,
      contactEditing: false
    };
  }

  getLocationData() {
    if (this.state.locationEditing) {
      return (
        <div className="lIWrapper" key="lIWrapper">
          <div className="inputWrapper">
            <label htmlFor="localAddress">Name: </label>
            <input id="localAddress" className="localAddress" type="text" placeholder="Name" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="city">Gender: </label>
            <input id="city" className="city" type="text" placeholder="City" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="state">State:</label>
            <input id="state" className="state" type="text" placeholder="State" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="landmark">Landmark:</label>
            <input id="landmark" className="landmark" type="text" placeholder="Landmark" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="country">Country:</label>
            <input id="country" className="country" type="text" placeholder="Country" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="pincode">Pin Code:</label>
            <input id="pincode" className="pinCode" type="text" placeholder="Pin Code" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="lIWrapper" key="lIWrapper">
          <div className="inputWrapper">
            <label htmlFor="localAddress">Username: </label>
            <input id="localAddress" className="localAddress" type="text" placeholder="Username" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="city">Password: </label>
            <input id="city" className="city" type="text" placeholder="Password" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="state">Email:</label>
            <input id="state" className="state" type="text" placeholder="Email" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="landmark">Phone Number:</label>
            <input id="landmark" className="landmark" type="text" placeholder="Phone Number" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="country">Address:</label>
            <input id="country" className="country" type="text" placeholder="Address" />
          </div>
          
        </div>
      );
    }
  }

  getContactData() {
    if (this.state.contactEditing) {
      return (
        <div className="cIWrapper" key="cIWrapper">
          <div className="inputWrapper">
            <label htmlFor="email">Email:</label>
            <input id="email" className="email" type="email" placeholder="Email" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="phone">Phone no:</label>
            <input id="phone" className="phone" type="tel" placeholder="Phone No" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="cIWrapper" key="cIWrapper">
        <div className="inputWrapper">
          <label htmlFor="email">Email:</label>
          <input id="email" className="email" type="email" placeholder="Email" />
        </div>
        <div className="inputWrapper">
          <label htmlFor="phone">Phone no:</label>
          <input id="phone" className="phone" type="tel" placeholder="Phone No" />
        </div>
        
      </div>
      
      );
    }
  }

  getButtons(info) {
    if (!this.state.locationEditing && info === 'LOCATION') {
      return (
        <button className="marB20"
          onClick={() => {
            this.setState({ locationEditing: true });
          }}>
          Edit
        </button>
      );
    } else if (!this.state.contactEditing && info === 'CONTACT') {
      return (
        <button className="marB20"
          onClick={() => {
            this.setState({ contactEditing: true });
          }}>
          Edit
        </button>
      );
    } else {
      let buttons;
      switch (info) {
        case 'LOCATION':
          buttons = ([
            <button className="marB20"
              key="lSave"
              onClick={() => {
                this.setState({ locationEditing: false });
              }}>
              Save
            </button>,
            <button className="marB20 cancelBtn"
              key="lCancel"
              onClick={() => {
                this.setState({ locationEditing: false });
              }}>
              Cancel
            </button>
          ]);

          break;
        case 'CONTACT':
          buttons = ([
            <button className="marB20"
              key="cSave"
              onClick={() => {
                this.setState({ contactEditing: false });
              }}>
              Save
            </button>,
            <button className="marB20 cancelBtn"
              key="cCancel"
              onClick={() => {
                this.setState({ contactEditing: false });
              }}>
              Cancel
            </button>
          ]);
          break;
      }
      return buttons;
    }
  }

  render() {
    return (
      <div className="otherInfo">
        <div className="personalInfo">
          <br></br>
          <div className="heading">
          </div>
            {this.getLocationData()}
        </div>
        
        <center><button variant="secondary" size="lg" active>SUBMIT</button></center>
      </div>
    );
  }
}

export default OtherInfo;
