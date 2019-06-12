import React, { Component } from "react";
import axios from 'axios';

class SettingUsaha extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    

    render() {
        return (
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
                    <form action="index.html">
                        <div className="main-title">
                            <h4 className="title">Data<br/>perusahaan</h4>
                        </div>
                        <div className="login-content-section">
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="circle-icon icon-briefcase"></i>
                                    </span>
                                    <div className="form-input">
                                        <label className="form-label">Nama usaha</label>
                                        <input className="form-control"/>
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
                                        <input className="form-control"/>
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
                                        <input className="form-control"/>
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
                                        <input className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="login-content-submit">
                            <button className="btn btn-block btn-primary" type="submit">Simpan data</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
</main>
        );
    }
}

export default SettingUsaha;