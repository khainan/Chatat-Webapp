import React, { Component } from "react";
import axios from 'axios';

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    

    render() {
        return (
            <section className="setting-pages">
                <section className="section-body">
                    <div className="container">
                        <div className="contol-group">
                            <div className="main-title">
                                <h5 className="title">Data akun</h5>
                            </div>
                            <div className="row-flex">
                                <div className="col-lg-4 col-md-4">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="circle-icon icon-user"></i>
                                            </span>
                                            <div className="form-input">
                                                <label className="form-label">Username</label>
                                                <input className="form-control" value={this.props.user.nama} readonly/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="circle-icon icon-email"></i>
                                            </span>
                                            <div className="form-input">
                                                <label className="form-label">Email Address</label>
                                                <input className="form-control" value={this.props.user.email} readonly/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="circle-icon icon-key"></i>
                                            </span>
                                            <div className="form-input">
                                                <label className="form-label">Password</label>
                                                <input className="form-control" type="password" readonly/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-groups">
                                <div className="right">
                                    <a className="link" href="#!" data-toggle="modal" data-target="#edit-akun">Edit</a>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="contol-group">
                            <div className="main-title">
                                <h5 className="title">Data perusahaan</h5>
                            </div>
                            <div className="row-flex">
                                <div className="col-lg-4 col-md-4">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="circle-icon icon-briefcase"></i>
                                            </span>
                                            <div className="form-input">
                                                <label className="form-label">Nama usaha</label>
                                                <input className="form-control" value={this.props.user.nama_usaha} readonly/>
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
                                                <input className="form-control" value={this.props.user.jenis_usaha} readonly/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="circle-icon icon-configure"></i>
                                            </span>
                                            <div className="form-input">
                                                <label className="form-label">Lokasi Usaha</label>
                                                <input className="form-control" value={this.props.user.lokasi_usaha} readonly/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-groups">
                                <div className="right">
                                    <a className="link">Edit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default Setting;