import React, { Component } from "react";
import axios from 'axios';
import AkunBank from './AkunBank';
import Peralatan from './Peralatan';
import BahanBaku from './BahanBaku';
import Piutang from './Piutang';
import Property from './Property';
import UtangUsaha from './UtangUsaha';
import UtangLain from './UtangLain';
import UtangJangkaPanjang from './UtangJangkaPanjang';
import ModalUtang from './ModalUtang';
import Loading from '../Loading';

class Aset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page:1,
            dataKas:null,
            dataPeralatan:null,
            dataKendaraan:null,
            dataBahanBaku:null,
            dataProperty:null,
            dataPiutang:null,
            dataUtangUsaha:null,
            dataUtangJangkaPanjang:null,
            dataUtangLain:null,
            dataModalUtang:null
        };
        this.handleBack = this.handleBack.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleSetData = this.handleSetData.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleNext(){
        let page = this.state.page

        if(page < 9){
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

    handleSetData(prefix, value){  
        let dataKas = this.state.dataKas;
        let dataPeralatan = this.state.dataPeralatan;
        let dataKendaraan = this.state.dataKendaraan;
        let dataBahanBaku = this.state.dataBahanBaku;
        let dataProperty = this.state.dataProperty;
        let dataPiutang = this.state.dataPiutang;
        let dataUtangUsaha = this.state.dataUtangUsaha;
        let dataUtangJangkaPanjang = this.state.dataUtangJangkaPanjang;
        let dataUtangLain = this.state.dataUtangLain;
        let dataModalUtang = this.state.dataModalUtang;

        if(prefix === "kas"){
            dataKas = value;
            this.setState({
                dataKas:dataKas
            })
        }

        else if(prefix === "peralatan"){
            dataPeralatan = value;
            this.setState({
                dataPeralatan:dataPeralatan
            })
        }
        
        else if(prefix === "kendaraan"){
            dataKendaraan = value;
            this.setState({
                dataKendaraan:dataKendaraan
            })
        }

        else if(prefix === "bahan baku"){
            dataBahanBaku = value;
            this.setState({
                dataBahanBaku:dataBahanBaku
            })
        }

        else if(prefix === "property"){
            dataProperty = value;
            this.setState({
                dataProperty:dataProperty
            })
        }

        else if(prefix === "piutang"){
            dataPiutang = value;
            this.setState({
                dataPiutang:dataPiutang
            })
        }

        else if(prefix === "utang usaha"){
            dataUtangUsaha = value;
            this.setState({
                dataUtangUsaha:dataUtangUsaha
            })
        }

        else if(prefix === "utang jangka panjang"){
            dataUtangJangkaPanjang = value;
            this.setState({
                dataUtangJangkaPanjang:dataUtangJangkaPanjang
            })
        }

        else if(prefix === "utang lain"){
            dataUtangLain = value;
            this.setState({
                dataUtangLain:dataUtangLain
            })
        }

        else if(prefix === "modal utang"){
            dataModalUtang = value;
            this.setState({
                dataModalUtang:dataModalUtang
            })
        }
    }

    handleSave(){
        let page = this.state.page;
        let data = {};
        let kategori = "";
        let today = new Date();

        let formatedMonth = today.getMonth() < 10 ? '0' + (today.getMonth() + 1) : today.getMonth();

        let date = today.getFullYear() + '-' + formatedMonth + '-' + today.getDate();
        let tanggal = {
            "tanggal": date
        }

        const token = window.localStorage.getItem("__chatat_token__")
        const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json", "content-hash": token}
        
        if(page === 1){
            data = this.state.dataKas;
            kategori = "peralatan"
        }

        console.log(tanggal)

        axios({
            method: "PATCH",
            url: `https://azaradigital.com/_devservice/sysFront/asset/inputdate`,
            tanggal,
            headers
          })
        
        // axios({
        //     method: "PATCH",
        //     url: `https://azaradigital.com/_devservice/sysFront/asset/input${kategori}`,
        //     data,
        //     headers
        //   })
        //   .then( r =>
        //     this.setState({message:r.data.message, type:"success"})
        //   )
        //   .catch(r => 
        //     this.setState({message:r.response.data.message[Object.keys(r.response.data.messag )[0]][0], type:"error"}
        //     ,()=>this.props.onNotify(this.state.type, this.state.message))
        // )
    }

    render() {
        let page = this.state.page;
        return (
            <div>
                <main id="main">
                    <section className="main-pages-aset">
                        <section className="section-body-aset">
                            <div className="container">
                                { page < 6 &&
                                <div className="step-progress">
                                    <div className="step-content">
                                        <div className="step-item first-step active">
                                            <i className="step-icon circle-icon icon-briefcase"></i>
                                            <div className="step-label text-label">Kas/Bank</div>
                                        </div>
                                        <div className={ page !== 1 ? "step-item active" : "step-item"}>
                                            <i className="step-icon circle-icon icon-configure"></i>
                                            <div className="step-label text-label">Peralatan Kendaraan</div>
                                        </div>
                                        <div className={ page !== 1 && page !== 2 ? "step-item active" : "step-item"}>
                                            <i className="step-icon circle-icon icon-components"></i>
                                            <div className="step-label text-label">Bahan Baku</div>
                                        </div>
                                        <div className={ page !== 1 && page !== 2 && page !== 3 ? "step-item active" : "step-item"}>
                                            <i className="step-icon circle-icon icon-diamond"></i>
                                            <div className="step-label text-label">Properti</div>
                                        </div>
                                        <div className={ page === 5 ? "step-item last-step active" : "step-item last-step"}>
                                            <i className="step-icon circle-icon icon-undo"></i>
                                            <div className="step-label text-label">Piutang</div>
                                        </div>
                                    </div>
                                    <div className="step-btn-prev"><i className="icon-arrow_backward_2"></i></div>
                                    <div className="step-btn-next"><i className="icon-arrow_forward_2"></i></div>
                                </div>
                                }
                                { page > 5 &&
                                <div className="step-progress">
                                    <div className="step-content">
                                        <div className="step-item first-step active">
                                            <i className="step-icon circle-icon icon-briefcase"></i>
                                            <div className="step-label text-label">Utang Usaha</div>
                                        </div>
                                        <div className={ page !== 6 ? "step-item active" : "step-item"}>
                                            <i className="step-icon circle-icon icon-configure"></i>
                                            <div className="step-label text-label">Utang Jangka Panjang</div>
                                        </div>
                                        <div className={ page !== 6 && page !== 7 ? "step-item active" : "step-item"}>
                                            <i className="step-icon circle-icon icon-components"></i>
                                            <div className="step-label text-label">Utang Lain2</div>
                                        </div>
                                        <div className={ page === 9 ? "step-item last-step active" : "step-item last-step"}>
                                            <i className="step-icon circle-icon icon-diamond"></i>
                                            <div className="step-label text-label">Modal</div>
                                        </div>
                                    </div>
                                    <div className="step-btn-prev"><i className="icon-arrow_backward_2"></i></div>
                                    <div className="step-btn-next"><i className="icon-arrow_forward_2"></i></div>
                                </div>
                                }
                                {/* FUNCTION CHANGE BETWEEN COMPONENT */}
                                
                                { page === 1 &&
                                    <div>
                                        <AkunBank
                                            handleSetData={this.handleSetData}
                                            data={this.state.dataKas}
                                            history={this.props.history}
                                            onNotify={this.props.onNotify}
                                        /> 
                                    </div>
                                }

                                { page === 2 &&  
                                    <div>
                                        <Peralatan
                                            handleSetData={this.handleSetData}
                                            dataKendaraan={this.state.dataKendaraan}
                                            dataPeralatan={this.state.dataPeralatan}
                                            history={this.props.history}
                                            onNotify={this.props.onNotify}
                                        /> 
                                    </div>
                                }

                                { page === 3 &&
                                    <div>
                                        <BahanBaku
                                            handleSetData={this.handleSetData}
                                            data={this.state.dataBahanBaku}
                                            history={this.props.history}
                                            onNotify={this.props.onNotify}
                                        /> 
                                    </div>
                                }

                                { page === 4 && 
                                    <div>
                                        <Property
                                            handleSetData={this.handleSetData}
                                            data={this.state.dataProperty}
                                            history={this.props.history}
                                            onNotify={this.props.onNotify}
                                        /> 
                                    </div>
                                }

                                { page === 5 && 
                                    <div>
                                        <Piutang
                                            handleSetData={this.handleSetData}
                                            data={this.state.dataPiutang}
                                            history={this.props.history}
                                            onNotify={this.props.onNotify}
                                        /> 
                                    </div>
                                }

                                { page === 6 && 
                                    <div>
                                        <UtangUsaha
                                            handleSetData={this.handleSetData}
                                            data={this.state.dataUtangUsaha}
                                            history={this.props.history}
                                            onNotify={this.props.onNotify}
                                        /> 
                                    </div>
                                }
                                
                                { page === 7 && 
                                    <div>
                                        <UtangJangkaPanjang
                                            handleSetData={this.handleSetData}
                                            data={this.state.dataUtangJangkaPanjang}
                                            history={this.props.history}
                                            onNotify={this.props.onNotify}
                                        /> 
                                    </div>
                                }

                                { page === 8 && 
                                    <div>
                                        <UtangLain
                                            handleSetData={this.handleSetData}
                                            data={this.state.dataUtangLain}
                                            history={this.props.history}
                                            onNotify={this.props.onNotify}
                                        /> 
                                    </div>
                                }

                                { page === 9 && 
                                    <div>
                                        <ModalUtang
                                            handleSetData={this.handleSetData}
                                            data={this.state.dataModalUtang}
                                            history={this.props.history}
                                            onNotify={this.props.onNotify}
                                        /> 
                                    </div>
                                }                                

                                <div className="btn-next-back">
                                    <button className="btn btn-default group-item" onClick={()=> this.handleBack()} >Kembali</button>
                                    <span className="container-next-save">
                                        <button className="btn btn-default group-item btn-skip" onClick={()=> this.handleNext() } >Lewati</button>
                                        <button className="btn-save" onClick={this.handleSave}>Simpan</button>
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