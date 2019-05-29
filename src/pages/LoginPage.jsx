import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loading from '../components/Loading';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading:true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
      this.props.history.replace('/dashboard')
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
                            <div className="login-content-heading">
                                <span className="text-label">Belum punya akun?</span> <a className="btn btn-sm btn-default" href="register.html">Daftar sekarang</a>
                            </div>
                            <form>
                                <div className="main-title">
                                    <h4 className="title">Login to your account</h4>
                                </div>
                                <div className="login-content-section">
                                    <div className="form-group">
                                        <div className="form-input">
                                            <input className="form-control" type="text" required=""/>
                                            <label className="form-label">Username</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-input">
                                            <button className="show-pass" type="button"></button>
                                            <input className="form-control" type="password" required=""/>
                                            <label className="form-label">Password</label>
                                        </div>
                                    </div>
                                    <div className="remember flex">
                                        <div className="checkbox">
                                            <input type="checkbox" id="remember"/>
                                            <label for="remember">Ingat password</label>
                                        </div>
                                        <a className="link" href="reset.html">Reset password?</a>
                                    </div>
                                </div>
                                <div className="login-content-submit">
                                    <button className="btn btn-block btn-primary" onClick={this.handleSubmit}>Login</button>
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

export default LoginPage;
