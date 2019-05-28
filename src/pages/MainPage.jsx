import React, { Component } from "react";
import '../scss/main.scss';
import logo from '../assets/img/logo_icon_default.svg'
import axios from "axios";
import SideBar from '../components/SideBar';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

 
  render() {
    return (
      <div className="catat-page">
          <div className="catat-container-page">
            <div className="left-bar">
              <img src={logo} className="logo-left-bar"/>
            </div>
            <SideBar/>
            <div className="catat-main-page">tes</div>
          </div>
      </div>
    );
  }
}

export default MainPage;
