import React, { Component } from "react";
import axios from "axios";
import Loading from '../components/Loading';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            email:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBackToLogin = this.handleBackToLogin.bind(this);
    }

    handleSubmit() {
        const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json"}
        
        const data = {
                "email" : this.state.email
        }

        axios({
            method: "POST",
            url: `https://azaradigital.com/_devservice/sysFront/costumer/check-email-reset-password`,
            data,
            headers
        }).then(response =>  {
            response.data.message && this.props.onNotify("success", response.data.message);
            this.props.history.replace("/");
        })
        .catch(error => error.response.data && this.props.onNotify("error", error.response.data[Object.keys(error.response.data)[0]][0]));
    }

    handleBackToLogin() {
        window.location.href = "/";
    }

    render() {
        return (
            <div>
                <Loading />
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
                                    <form>
                                        <div className="main-title">
                                            <h4 className="title"><span className="break-text">Forgot</span> your password</h4>
                                        </div>
                                        <div className="login-content-section">
                                            <div className="form-group">
                                                <div className="form-input">
                                                    <input className="form-control" type="text" onChange={(e)=> this.setState({email:e.currentTarget.value})}/>
                                                    <label className="form-label">Email address</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="login-content-submit">
                                            <span className="btn btn-block btn-primary btn-reset-password" onClick={this.handleSubmit}>Reset password</span>
                                        </div>
                                        <div className="login-content-link text-center">
                                            <a className="link" onClick={this.handleBackToLogin}>Kembali ke login</a>
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
