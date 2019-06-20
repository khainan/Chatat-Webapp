import React, { Component } from "react";

class ModalDaftarAset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

    }
    render() {
        return (
        <div>
        {this.props.modal && <div className="modal-chatat">
            <div id="modal-catat-aset" className="modal auto-modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-lg-offset-4">
                                    <div className="panel">
                                        <a className="close" ><i className="icon-close" onClick={()=>{ this.props.closeModal() }}></i></a>
                                        <div className="panel-body text-center">
                                            <span>Hi, <strong>UserName!</strong></span>
                                            <h5 className="title">Catat dulu daftar aset/utang piutang kamu</h5>
                                            <div className="btn-groups">
                                                <div className="center">
                                                    <a className="btn btn-sm btn-default group-item btn-modal" onClick={()=>{this.props.closeModal() }}>Nanti</a>
                                                    <a className="btn btn-sm btn-primary group-item btn-modal" onClick={()=>{this.props.goToAset() }}>Oke</a>
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