import React, { Component } from "react";

import ModalUtang from "./ModalUtang";

class ModalUtangComponent extends Component {
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
                    <label className="form-label">Uang ataupun aset yang diinvestasikan dalam perusahaan, dan diberikan imbalan saham/kepemilikan kepada yang bersangkutan.</label>
                </div>
                <div className="container-aset">
                    <div className="section-aset">
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="circle-icon icon-payments"></i>
                                </span>
                                <div className="form-input">
                                    <label className="form-label">Vendor</label>
                                    <input className="form-control" 
                                        value={this.props.value.customer}
                                        onChange={(e)=> this.props.handleData("customer", this.props.id, e.currentTarget.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-aset">
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="circle-icon icon-pocket"></i>
                                </span>
                                <div className="form-input">
                                    <label className="form-label">Besar Utang</label>
                                    <input className="form-control" 
                                        value={this.props.value.nominal}
                                        onChange={(e)=> this.props.handleData("nominal", this.props.id, e.currentTarget.value)}
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

export default ModalUtangComponent;