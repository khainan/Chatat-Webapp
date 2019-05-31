import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class PeralatanComponent extends Component {
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
                                    <i className="circle-icon icon-ranks"></i>
                                </span>
                                <div className="form-input">
                                    <label className="form-label">Perkiraan Nilai Nominal</label>
                                    <input className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-aset">
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="circle-icon icon-calendar"></i>
                                </span>
                                <div className="form-input">
                                    <label className="form-label">Perkiraan Masa Pakai</label>
                                    <input className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-aset">
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

export default PeralatanComponent;