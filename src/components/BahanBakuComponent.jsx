import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BahanBakuComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }


    render() {
        return (
            <div>
                <hr />
                <div className="main-title">
                    <p className="title">{this.props.title}</p>
                </div>
                <div className="container-aset">
                    <div className="section-aset">
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="circle-icon icon-edit"></i>
                                </span>
                                <div className="form-input">
                                    <label className="form-label">Keterangan</label>
                                    <input className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="circle-icon icon-user"></i>
                                </span>
                                <div className="form-input">
                                    <label className="form-label">Vendor</label>
                                    <input className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-aset">
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="circle-icon icon-ranks"></i>
                                </span>
                                <div className="form-input">
                                    <label className="form-label">Sisa Bahan Baku</label>
                                    <input className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="circle-icon icon-components"></i>
                                </span>
                                <div className="form-input with-padding-top">
                                    <label className="form-label">Satuan</label>
                                    <select className="form-control">
                                        <option>--</option>
                                        <option>Kilogram</option>
                                        <option>Gram</option>
                                        <option>Ons</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-aset">
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="circle-icon icon-payments"></i>
                                </span>
                                <div className="form-input">
                                    <label className="form-label">{this.props.title === "Bahan Baku" ? "Harga Satuan" : "Harga /Unit"}</label>
                                    <input className="form-control" />
                                </div>
                            </div>
                        </div>
                        <input className="input-satuan" value={0} defaultValue="0"/>
                    </div>
                </div>
                <hr />
                <div className="btn-groups">
                    <div className="right">
                        <a className="link" href="#!">Tambah {this.props.title}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default BahanBakuComponent;