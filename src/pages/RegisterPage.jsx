import React from "react";
import Loading from '../components/Loading';
import {useAuth} from '../context/auth-context'
import useCallbackStatus from '../utils/use-callback-status'

function RegisterPage (props) {
    const {register} = useAuth();
    const {isPending, isRejected, message, status, run} = useCallbackStatus();
    function handleSubmit(event) {
      event.preventDefault();
      const nama = document.getElementById("nama").value
      const username = document.getElementById("username").value
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value

      run(
        register({
          nama,
          username,
          email,
          password
        })
      )
    }
    const type = isRejected ? "error" : "success";
    if(message) {
        props.onNotify(type, message);
        props.history.replace("/");
    }
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
                                    <span className="text-label">Sudah punya akun?</span> <a className="btn btn-sm btn-default" onClick={()=>window.location.pathname = "/"}>Login sekarang</a>
                                </div>
                                <form>
                                    <div className="main-title">
                                        <h4 className="title"><span className="break-text">Getting started</span>absolutely free!</h4>
                                    </div>
                                    <div className="login-content-section">
                                        <div className="form-group">
                                            <div className="form-input">
                                                <input className="form-control" type="text" required="" id="nama"/>
                                                <label className="form-label">Nama</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-input">
                                                <input className="form-control" type="text" required="" id="username"/>
                                                <label className="form-label">Username</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-input">
                                                <input className="form-control" type="text" required="" id="email" />
                                                <label className="form-label">Email address</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-input">
                                                <button className="show-pass" type="button"></button>
                                                <input className="form-control" type="password" required="" id="password" />
                                                <label className="form-label">Password</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-input">
                                                <button className="show-pass" type="button"></button>
                                                <input className="form-control" type="password" required="" />
                                                <label className="form-label">Konfirmasi password</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="login-content-submit">
                                        <button className="btn btn-block btn-primary" onClick={handleSubmit}>Lanjutkan</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default RegisterPage;
