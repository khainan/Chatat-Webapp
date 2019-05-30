import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loading from '../components/Loading';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            nextPage: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBackToLogin = this.handleBackToLogin.bind(this);
    }

    handleSubmit() {
        this.setState({
            nextPage:true
        })
    }

    handleBackToLogin() {
        this.props.history.replace('/')
    }

    render() {
        return (
            <div>
                {!this.state.nextPage &&
                 <main id="main">
                    <Loading />
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
                                        <span className="text-label">Sudah punya akun?</span> <a className="btn btn-sm btn-default" onClick={this.handleBackToLogin}>Login sekarang</a>
                                    </div>
                                    <form>
                                        <div className="main-title">
                                            <h4 className="title"><span className="break-text">Getting started</span>absolutely free!</h4>
                                        </div>
                                        <div className="login-content-section">
                                            <div className="form-group">
                                                <div className="form-input">
                                                    <input className="form-control" type="text" required="" />
                                                    <label className="form-label">Username</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-input">
                                                    <input className="form-control" type="text" required="" />
                                                    <label className="form-label">Email address</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-input">
                                                    <button className="show-pass" type="button"></button>
                                                    <input className="form-control" type="password" required="" />
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
                                            <button className="btn btn-block btn-primary" onClick={this.handleSubmit}>Lanjutkan</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                }
                { this.state.nextPage &&
                <main id="main">
                    <Loading />
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
                                    <form>
                                        <div className="main-title">
                                            <h4 className="title"><span className="break-text">Data</span> perusahaan</h4>
                                        </div>
                                        <div className="login-content-section">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-briefcase"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Nama usaha</label>
                                                        <input className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-layers"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Jenis usaha</label>
                                                        <select className="form-control">
                                                            <option>--</option>
                                                            <option>Ritel</option>
                                                            <option>Pedagang</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-configure"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Jasa</label>
                                                        <input className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-components"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Produksi</label>
                                                        <input className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-home"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">lokasi usaha</label>
                                                        <input className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="login-content-submit">
                                            <button className="btn btn-block btn-primary" onClick={this.handleBackToLogin}>Simpan data</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                }
            </div>
        );
    }
}

export default RegisterPage;
