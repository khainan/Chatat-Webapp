import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loading from '../components/Loading';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading:true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBackPage = this.handleBackPage.bind(this);
  }

  handleSubmit(){
      this.props.history.replace('/dashboard')
  }

  handleBackPage(){
      window.location.href = "/";
  }
 
  render() {
    return (
    <div>
        <Loading/>
        <main id="main">
    
    <section className="main-login">
        <div className="logo"></div>
        <div className="main-login-bg">
            <div className="thumb">
            </div>
            <footer>
                <div className="footer-content">
                    © chatat 2019. All rights reserved.
                </div>
            </footer>
        </div>
        <div className="main-login-content">
            <div className="content">
                <div className="content-inner">
                    <form action="">
                        <div className="main-title">
                            <h4 className="title"><span className="break-text">Forgot</span> your password</h4>
                        </div>
                        <div className="login-content-section">
                            <div className="form-group">
                                <div className="form-input">
                                    <input className="form-control" type="text" required=""/>
                                    <label className="form-label">Email address</label>
                                </div>
                            </div>
                        </div>
                        <div className="login-content-submit">
                            <button className="btn btn-block btn-primary" type="submit">Reset password</button>
                        </div>
                        <div className="login-content-link text-center">
                            <a className="link" onClick={this.handleBackPage}>Kembali ke login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
</main>
        </div>
    );
  }
}

export default ResetPassword;
