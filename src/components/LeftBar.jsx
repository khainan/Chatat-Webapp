import React, { Component } from "react";
import logo from '../assets/images/logo_icon_default.svg'
import axios from "axios";

class LeftBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

 
  render() {
    return (    
        <div className="left-bar">
            <img src={logo} className="logo-left-bar"/>
        </div>
    );
  }
}

export default LeftBar;