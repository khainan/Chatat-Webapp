import React, { Component } from "react";
import axios from 'axios';

import {useUser} from '../../context/user-context'

class AkunBankComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listBank:null,
            ready:false
        };
        
    }

    componentWillMount(){
        this.getListOption();
    }

    getListOption(){
        const token = window.localStorage.getItem("__chatat_token__")
        const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json", "content-hash": token}
        
        let data = {
            "search": {
                "nama": "",
                "status": "1"
            },
            "order": {
                "created"	: "DESC"
            },
            "page": 1
        }


        axios({
            method: "post",
            url: `https://azaradigital.com/_devservice/sysFront/data-bank/list`,
            data,
            headers
          }).then(r => this.setState({listBank:[r.data.data], ready:true}));
    }


    render() {

        let id = this.props.id;

        return (
            <div>
                <div className="main-title">
                    <p className="title">Akun Bank</p>
                    <i className="icon-close btn-delete-component" onClick={()=>this.props.deleteData(this.props.id)} ></i>
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
                                        {
                                           this.state.ready && this.state.listBank[0].map(val =>
                                                <option>{val.nama}</option>    
                                            )
                                        }
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