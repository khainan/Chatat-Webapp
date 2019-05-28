import React, { Component } from "react";
import '../scss/main.scss';
import SideBar from '../components/SideBar';
import LeftBar from '../components/LeftBar';
import ChatatPages from '../pages/ChatatPages';

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
            <LeftBar/>
            <SideBar/>
            <ChatatPages/>
          </div>
      </div>
    );
  }
}

export default MainPage;
