import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AkunBank from './AkunBank';
import Peralatan from './Peralatan';
import BahanBaku from './BahanBaku';

class Aset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            secondLoading: true,
        };
        this.closeSecondModal = this.closeSecondModal.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            }, () => {
                this.closeSecondModal()
            })
        }, 1000)
    }

    closeSecondModal() {
        setTimeout(() => {
            this.setState({
                secondLoading: false
            })
        }, 300)
    }


    render() {
        return (
            <div>
                <main id="main">
                    <section className="main-pages-aset">
                        <section className="section-body-aset">
                            <div className="container">
                                <div className="step-progress">
                                    <div className="step-content">
                                        <div className="step-item first-step active">
                                            <i className="step-icon circle-icon icon-briefcase"></i>
                                            <div className="step-label text-label">Kas/Bank</div>
                                        </div>
                                        <div className="step-item">
                                            <i className="step-icon circle-icon icon-configure"></i>
                                            <div className="step-label text-label">Peralatan Kendaraan</div>
                                        </div>
                                        <div className="step-item">
                                            <i className="step-icon circle-icon icon-components"></i>
                                            <div className="step-label text-label">Bahan Baku</div>
                                        </div>
                                        <div className="step-item">
                                            <i className="step-icon circle-icon icon-diamond"></i>
                                            <div className="step-label text-label">Properti</div>
                                        </div>
                                        <div className="step-item last-step">
                                            <i className="step-icon circle-icon icon-undo"></i>
                                            <div className="step-label text-label">Piutang</div>
                                        </div>
                                    </div>
                                    <div className="step-btn-prev"><i className="icon-arrow_backward_2"></i></div>
                                    <div className="step-btn-next"><i className="icon-arrow_forward_2"></i></div>
                                </div>
                                {/* FUNCTION CHANGE BETWEEN COMPONENT */}
                                
                                {
                                    <BahanBaku/>
                                }
                                <div className="btn-next-back">
                                    <button className="btn btn-default group-item">Kembali</button>
                                    <span className="container-next-save">
                                        <button className="btn btn-default group-item btn-skip">Lewati</button>
                                        <button className="btn-save ">Simpan</button>
                                    </span>
                                </div>
                            </div>
                        </section>
                    </section>
                </main>
            </div>
        );
    }
}

export default Aset;