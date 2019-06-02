import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AkunBankComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }


    render() {

        let id = this.props.id;

        return (
            <div>
                <hr />
                <div className="row control-group">
                    <div className="aset-form-kas">
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="circle-icon icon-pocket"></i>
                                </span>
                                <div className="form-input">
                                    <label className="form-label">Kas kecil (Uang kas)</label>
                                    <input className="form-control" 
                                        onChange={(e)=> this.props.handleSetData("kas" , "kaskecil", null , id , e.currentTarget.value )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-title">
                    <p className="title">Akun Bank</p>
                </div>
                <div className="container-aset">
                    <div className="section-aset">
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="circle-icon icon-briefcase"></i>
                                </span>
                                <div className="form-input with-select">
                                    <label className="form-label">Nama Bank</label>
                                    <select className="form-control" onChange={(e)=> this.props.handleSetData("kas" , "akunbank", "bank", id , e.currentTarget.value )}>
                                        <option>--</option>
                                        <option>Bank Centra Asia (BCA)</option>
                                        <option>Bank Rakyat Indonesia (BRI)</option>
                                        <option>Bank Negara Indonesia (BNI)</option>
                                        <option>Mandiri</option>
                                        <option>Danamon</option>
                                        <option>CIMB</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="circle-icon icon-payments"></i>
                                </span>
                                <div className="form-input">
                                    <label className="form-label">No. Rekening</label>
                                    <input className="form-control" 
                                        onChange={(e)=> this.props.handleSetData("kas" , "akunbank", "rekening", id ,e.currentTarget.value )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-aset">
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="circle-icon icon-user"></i>
                                </span>
                                <div className="form-input">
                                    <label className="form-label">Nama Akun</label>
                                    <input className="form-control" 
                                       onChange={(e)=> this.props.handleSetData("kas" , "akunbank", "atasnama", id ,e.currentTarget.value )} 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="circle-icon icon-pocket"></i>
                                </span>
                                <div className="form-input">
                                    <label className="form-label">Saldo</label>
                                    <input className="form-control" 
                                        onChange={(e)=> this.props.handleSetData("kas" , "akunbank", "saldo", id ,e.currentTarget.value )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-aset">
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default AkunBankComponent;