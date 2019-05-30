import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ModalDaftarAset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal:true
        };
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.setState({
            showModal:false
        })
    }


    render() {
        return (
        <div>
        {this.state.showModal && <div className="modal-chatat">
            <div id="modal-catat-aset" className="modal auto-modal fade" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-lg-offset-4">
                                    <div className="panel">
                                        <a className="close" ><i className="icon-close" onClick={this.closeModal}></i></a>
                                        <div className="panel-body text-center">
                                            <span>Hi, <strong>UserName!</strong></span>
                                            <h5 className="title">Catat dulu daftar aset/utang piutang kamu</h5>
                                            <div className="btn-groups">
                                                <div className="center">
                                                    <a className="btn btn-sm btn-default group-item btn-modal" onClick={this.closeModal} >Nanti</a>
                                                    <a className="btn btn-sm btn-primary group-item btn-modal">Oke</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        </div>
        );
    }
}

export default ModalDaftarAset;