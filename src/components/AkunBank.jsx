import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AkunBankComponent from './AkunBankComponent';

class AkunBank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataKas:{
                kaskecil:null,
                akunbank:[
                    {
                        bank:null,
                        rekening:null,
                        atasnama:null,
                        saldo:null,
                    }
                ]
            }
        };
        this.handleData = this.handleData.bind(this);
        this.addData = this.addData.bind(this);
    }

    handleData(prefix, prefix2, index, value){
        
        let dataKas = this.state.dataKas;
        
        if(prefix === "akunbank"){
            dataKas.akunbank[index][prefix2] = value;
            this.setState({
                dataKas: dataKas
            },()=> this.props.handleSetData("kas" , dataKas) )
        }
        else{
            this.state.dataKas.kaskecil = value;
            this.setState({
                dataKas: dataKas
            },()=> this.props.handleSetData("kas" , dataKas) )
        }
    }

    addData(){
        let dataKas = this.state.dataKas;
        let data = {
            bank:null,
            rekening:null,
            atasnama:null,
            saldo:null
        }

        dataKas.akunbank.push(data);

        this.setState({
            dataKas:dataKas
        })
    }

    componentDidMount(){
        if(this.props.data){
            this.state.dataKas = this.props.data;
            this.setState({
                dataKas:this.state.dataKas
            })
        }
    }

    render() {
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
                                       value={this.state.dataKas.kaskecil} onChange={(e)=> this.handleData("kaskecil" , null , null , e.currentTarget.value )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                { this.state.dataKas.akunbank.map((val, index) => 
                    <AkunBankComponent
                        kas={this.state.dataKas.kaskecil}
                        value={val}
                        id={index}
                        handleSetData={this.handleData}
                    />
                )
                }
                <div className="btn-groups">
                    <div className="right">
                        <a className="link" onClick={this.addData}>Tambah Akun Bank</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AkunBank;