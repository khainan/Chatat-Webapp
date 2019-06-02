import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class PropertyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }


    render() {

        let prefix = this.props.title === "Bahan Baku" ? "Harga Satuan" : "Harga /Unit";
        let subPrefix = this.props.title === "Bahan Baku" ? "Sisa Bahan Baku" : "Perkiraan Masa Pakai";

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
                                    <i className="circle-icon icon-payments"></i>
                                </span>
                                <div className="form-input">
                                    <label className="form-label">Harga /Unit</label>
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
                                    <label className="form-label">{subPrefix}</label>
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
                                    <label className="form-label">Status</label>
                                    <select className="form-control">
                                        <option>--</option>
                                        <option>Sewa</option>
                                        <option>Beli</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-aset">
                        <input className="input-satuan" value={0} defaultValue="0"/>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default PropertyComponent;