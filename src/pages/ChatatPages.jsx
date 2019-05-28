import React, { Component } from "react";
import axios from 'axios';
import dotted from '../assets/img/dotted_sc.png';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
 
  render() {

    return (
        <div className="catat-main-page">
            <div className="header-page">
                <img src={dotted}/>
            </div>
        </div>
    );
  }
}

export default MainPage;
