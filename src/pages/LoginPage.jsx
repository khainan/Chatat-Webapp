import React from "react";
import {useAuth} from '../context/auth-context'
import useCallbackStatus from '../utils/use-callback-status'


function LoginPage(props) {
    const {login} = useAuth();
    const {isPending, isRejected, message, status, run} = useCallbackStatus()
    function handleSubmit(event) {
      event.preventDefault();
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
  
      run(
        login({
          email,
          password
        }),
      )
    }
    const type = isRejected ? "error" : "success";
    message && props.onNotify(type, message);
    return (
    <div>
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
                                <span className="text-label">Belum punya akun?</span><a className="btn btn-sm btn-default" onClick={()=>props.history.replace('/register')}>Daftar sekarang</a>
                            </div>
                            <form>
                                <div className="main-title">
                                    <h4 className="title"><span className="break-text">Login to </span>your account</h4>
                                </div>
                                <div className="login-content-section">
                                    <div className="form-group">
                                        <div className="form-input">
                                            <input className="form-control" type="text" required="" id="email"/>
                                            <label className="form-label">Username</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-input">
                                            <button className="show-pass" type="button"></button>
                                            <input className="form-control" type="password" required="" id="password"/>
                                            <label className="form-label">Password</label>
                                        </div>
                                    </div>
                                    <div className="remember flex">
                                        <div className="checkbox">
                                            <input type="checkbox" id="remember"/>
                                            <label for="remember">Ingat password</label>
                                        </div>
                                        <a className="link" >Reset password?</a>
                                    </div>
                                </div>
                                <div className="login-content-submit">
                                    <button className="btn btn-block btn-primary" onClick={handleSubmit}>{isPending ? "Loading" : "Login"}</button>
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


export default LoginPage;
