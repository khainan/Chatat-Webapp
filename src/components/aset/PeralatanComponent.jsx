import React, { Component } from "react";


class PeralatanComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }


    render() {

        let prefix = this.props.title === "Peralatan" ? "peralatan" : "kendaraan"

        return (
            <div>
                <hr />
                <div className="main-title">
                    <p className="title">{this.props.title}</p>
                    <i className="icon-close btn-delete-component" onClick={()=>this.props.deleteData(prefix ,this.props.id)} ></i>
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
                                    <input className="form-control" value={this.props.value[prefix]} onChange={(e)=> this.props.handleData(prefix ,prefix, this.props.id ,e.currentTarget.value)} />
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
                                    <input className="form-control" type="number" value={this.props.value.nominal} onChange={(e)=> this.props.handleData(prefix ,"nominal", this.props.id ,parseInt(e.currentTarget.value))} />
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
                                    <input className="form-control"  type="number" value={this.props.value.masapakai} onChange={(e)=> this.props.handleData(prefix ,"masapakai", this.props.id  ,parseInt(e.currentTarget.value))} />
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

export default PeralatanComponent;