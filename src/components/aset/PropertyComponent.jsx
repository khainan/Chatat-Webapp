import React, { Component } from "react";


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
                    <i className="icon-close btn-delete-component" onClick={()=>this.props.deleteData(this.props.id)} ></i>
                </div>
                <div className="container-aset">
                    <div className="section-aset">
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="circle-icon icon-components"></i>
                                </span>
                                <div className="form-input with-select">
                                    <label className="form-label">Jenis Properti</label>
                                    <select className="form-control"
                                        value={this.props.value.status}
                                        onChange={(e)=> this.props.handleData("status", this.props.id, e.currentTarget.value)}
                                    >
                                        <option>--</option>
                                        <option>Sewa</option>
                                        <option>Beli</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="circle-icon icon-edit"></i>
                                </span>
                                <div className="form-input">
                                    <label className="form-label">Keterangan</label>
                                    <input className="form-control" 
                                        value={this.props.value.properti}
                                        onChange={(e)=> this.props.handleData("properti", this.props.id, e.currentTarget.value)}
                                    />
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
                                    <label className="form-label">Harga /Unit</label>
                                    <input className="form-control"
                                        value={this.props.value.nominal}
                                        onChange={(e)=> this.props.handleData("nominal", this.props.id, parseInt(e.currentTarget.value))}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="circle-icon icon-ranks"></i>
                                </span>
                                <div className="form-input">
                                    <label className="form-label">{subPrefix}</label>
                                    <input className="form-control" 
                                        value={this.props.value.masapakai}
                                        onChange={(e)=> this.props.handleData("masapakai", this.props.id, parseInt(e.currentTarget.value))}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-aset">
                        <input className="input-satuan" value={"Rp " + this.props.value.nominal * this.props.value.masapakai} defaultValue="0"/>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default PropertyComponent;