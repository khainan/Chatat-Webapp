import React, { Component } from "react";
import axios from 'axios';


class BahanBakuComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listSatuan:null,
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
                "satuan": "",
                "status": "1"
            },
            "order": {
                "created"	: "DESC"
            },
            "page": 1
        }


        axios({
            method: "post",
            url: `https://azaradigital.com/_devservice/sysFront/data-satuan/list`,
            data,
            headers
          }).then(r => this.setState({listSatuan:[r.data.data], ready:true}, ()=> this.props.handleData("satuan", this.props.id, r.data.data[0].satuan)));
    }


    render() {

        let prefix = this.props.title === "Bahan Baku" ? "Harga Satuan" : "Harga /Unit";
        let subPrefix = this.props.title === "Bahan Baku" ? "Sisa Bahan Baku" : "Perkiraan Masa Pakai";

        return (
            <div>
                <hr />
                <div className="main-title">
                    <p className="title">{this.props.title}</p>
                    <i className="icon-close btn-delete-component" onClick={()=>this.props.deleteData(this.props.id)} ></i>
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
                                        onChange={(e)=> this.props.handleData("unit", this.props.id, parseInt(e.currentTarget.value))}
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
                                        {
                                            this.state.ready && this.state.listSatuan[0].map(val=>
                                                <option>{val.satuan}</option>    
                                            )
                                        }
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
                                        onChange={(e)=> this.props.handleData("harga", this.props.id, parseInt(e.currentTarget.value))}
                                    />
                                </div>
                            </div>
                        </div>
                        <input className="input-satuan" value={"Rp " + this.props.value.harga * this.props.value.unit}/>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default BahanBakuComponent;