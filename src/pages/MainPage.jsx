import React, { Component } from "react";
import '../css/primary.css';
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
<div>
{/* <div id="curtain">
    <div className="curtain-logo"></div>
</div> */}
    
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
                    <form action="page/index.html">
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
                            <button className="btn btn-block btn-primary" type="submit">Login</button>
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

export default MainPage;
