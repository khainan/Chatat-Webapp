import React, { Component } from "react";
import axios from 'axios';

import {useUser} from '../../context/user-context'

class AkunBankComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        
    }

    componentWillMount(){
        const body = {email:"bylinggha@gmail.com",password:"Byee99"}
        const requestBody = JSON.stringify(body);
        const headers =  {"headers": {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json"}}
        
        axios.post("https://azaradigital.com/_devservice/sysFront/data-bank/list", requestBody , headers, "POST")
        .then(r=> console.log(r))
    }


    render() {

        let id = this.props.id;

        return (
            <div>
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
                                    <select className="form-control" value={this.props.value.bank} onChange={(e)=> this.props.handleSetData("akunbank", "bank", id , e.currentTarget.value )}>
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
                                      value={this.props.value.rekening} onChange={(e)=> this.props.handleSetData("akunbank", "rekening", id ,e.currentTarget.value )}
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
                                      value={this.props.value.atasnama} onChange={(e)=> this.props.handleSetData("akunbank", "atasnama", id ,e.currentTarget.value )} 
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
                                       value={this.props.value.saldo} onChange={(e)=> this.props.handleSetData("akunbank", "saldo", id ,e.currentTarget.value )}
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