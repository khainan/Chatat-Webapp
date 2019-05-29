import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading:true
    };
  }

  componentDidMount(){
    setTimeout(()=>{
        this.setState({
            loading:false
        })
    },1000)
  }

 
  render() {
    return (
    <div>
        {this.state.loading ? 
        <div className="with-width" id="curtain">
            <div class="curtain-logo"></div>
        </div>
        :
        <div className="with-no-width" id="curtain">
            <div class="curtain-logo hide-logo"></div>
        </div>
        }
    </div>
    );
  }
}

export default Loading;
