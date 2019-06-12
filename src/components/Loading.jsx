import React, { Component } from "react";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading:true,
        secondLoading:true,
    };
    this.closeSecondModal = this.closeSecondModal.bind(this);
  }

  componentDidMount(){
    setTimeout(()=>{
        this.setState({
            loading:false
        },()=>{
          this.closeSecondModal()
        })
    },1000)
  }

  closeSecondModal(){
    setTimeout(()=>{
      this.setState({
        secondLoading:false
      })
    },300)
  }

 
  render() {
    return (
    <div>
        {this.state.loading ? 
        <div className="with-width" id="curtain">
            <div className="curtain-logo"></div>
        </div>
        :
        <div className="with-no-width" id="curtain">
            <div className="curtain-logo hide-logo"></div>
        </div>
        }
        { this.state.secondLoading ? 
        <div className="with-width" id="curtain-gray">
            <div className="curtain-logo"></div>
        </div>
        :
        <div className="with-no-width" id="curtain-gray">
            <div className="curtain-logo hide-logo"></div>
        </div>
        }
    </div>
    );
  }
}

export default Loading;
