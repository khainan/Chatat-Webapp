import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AkunBank from './AkunBank';
import Peralatan from './Peralatan';
import BahanBaku from './BahanBaku';
import Piutang from './Piutang';
import Property from './Property';
import Loading from './Loading';

class Aset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page:1,
            dataKas:{
                kaskecil:null,
                akunbank:[
                    {
                        bank:null,
                        rekening:null,
                        atasama:null,
                        saldo:null,
                    }
                ]
            },
            dataPeralatan:
                [{
                    peralatan:null,
                    nominal: null,
                    masapakai: null
                }],
            dataKendaraan:
                [{
                    kendaraan:null,
                    nominal: null,
                    masapakai: null
                }],
            dataBahanBaku:
                [{
                    bahanbaku:null,
                    unit: null,
                    harga: null,
                    satuan:null,
                    vendor:null
                }],
            dataProperty:
                [{
                    properti:null,
                    nominal: null,
                    status: null,
                    masapakai:null
                }],
            dataPiutang:
                [{
                    costumer:null,
                    nominal: null
                }],
            
            
            
            
        };
        this.handleBack = this.handleBack.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleSetData = this.handleSetData.bind(this);
    }

    handleNext(){
        let page = this.state.page

        if(page < 5){
            this.setState({
                page: page += 1
            })
        }
    }

    handleBack(){
        let page = this.state.page

        if(page > 1){
            this.setState({
                page: page -= 1
            })
        }
    }

    handleSetData(prefix, prefix2, prefix3, index , value){
        
        if(prefix === "kas"){
            console.log(prefix, prefix2, prefix3, index, value)
            
        }
    }

    render() {
        let page = this.state.page;


        return (
            <div>
                <Loading/>
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
                                
                                { page === 1 &&
                                    <div>
                                        <AkunBank
                                            handleSetData={this.handleSetData}
                                            data={this.state.dataKas}
                                        /> 
                                    </div>
                                }

                                { page === 2 &&  
                                    <div>
                                        <Peralatan
                                            handleSetData={this.handleSetData}
                                            data={this.state.dataPeralatan}
                                            data2={this.state.dataKendaraan}
                                        /> 
                                    </div>
                                }

                                { page === 3 &&
                                    <div>
                                        <BahanBaku
                                            handleSetData={this.handleSetData}
                                            data={this.state.dataBahanBaku}
                                        /> 
                                    </div>
                                }

                                { page === 4 && 
                                    <div>
                                        <Property
                                            handleSetData={this.handleSetData}
                                            data={this.state.dataProperty}
                                        /> 
                                    </div>
                                }

                                { page === 5 && 
                                    <div>
                                        <Piutang
                                            handleSetData={this.handleSetData}
                                            data={this.state.dataPiutang}
                                        /> 
                                    </div>
                                }

                                <div className="btn-next-back">
                                    <button className="btn btn-default group-item" onClick={()=> this.handleBack()} >Kembali</button>
                                    <span className="container-next-save">
                                        <button className="btn btn-default group-item btn-skip" onClick={()=> this.handleNext() } >Lewati</button>
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