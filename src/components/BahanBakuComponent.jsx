import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BahanBakuComponent extends Component {
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
                                    <input className="form-control"
                                        value={this.props.value.bahanbaku}
                                        onChange={(e)=> this.props.handleData("bahanbaku", this.props.id, e.currentTarget.value)}
                                    />
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
                                    <input className="form-control"
                                        value={this.props.value.vendor}
                                        onChange={(e)=> this.props.handleData("vendor", this.props.id, e.currentTarget.value)}
                                    />
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
                                    <input className="form-control" 
                                        value={this.props.value.unit}
                                        onChange={(e)=> this.props.handleData("unit", this.props.id, e.currentTarget.value)}
                                    />
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
                                    <select className="form-control"
                                        value={this.props.value.satuan}
                                        onChange={(e)=> this.props.handleData("satuan", this.props.id, e.currentTarget.value)}
                                    >
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
                                    <label className="form-label">{prefix}</label>
                                    <input className="form-control" 
                                        value={this.props.value.harga}
                                        onChange={(e)=> this.props.handleData("harga", this.props.id, e.currentTarget.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <input className="input-satuan" value={this.props.value.harga} defaultValue="0"/>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default BahanBakuComponent;