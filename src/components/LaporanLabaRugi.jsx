import React, { Component } from "react";
import EmptyState from './EmptyState';
import axios from 'axios';

class LaporanLabaRugi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLaba:null
        };

    }

    componentDidMount(){
        this.getListData();
    }
    
    getListData = () => {
        const token = window.localStorage.getItem("__chatat_token__")
        const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json", "content-hash": token}
        
        const data = {
            "tanggal":""
        }

          axios({
            method: "post",
            url: `https://azaradigital.com/_devservice/sysFront/report/labarugi`,
            data,
            headers
          }).then(r => this.setState({dataLaba :r.data}));
    }
    
    render() {

        let dataLaba = this.state.dataLaba;

        return (
        <div>
        { dataLaba ? <main id="main">
        <section className="container-laporan">
            <section className="section-body">
                <div className="container">
                    <div className="row-flex">
                        <div className="flex-6">
                            <div className="panel panel-border">
                                <div className="panel-heading">
                                    <h5 className="panel-title">Biaya</h5>
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tbody>
                                            { Object.keys(dataLaba.biaya.biaya.data).map(val =>
                                            <tr>
                                                <td>{val}</td>
                                                <td><b>{dataLaba.biaya.biaya.data[val]}</b></td>
                                            </tr>
                                            )}
                                            { Object.keys(dataLaba.biaya.depresiasi).map(val =>
                                            <tr>
                                                <td>{val}</td>
                                                <td><b>{dataLaba.biaya.depresiasi[val].total}</b></td>
                                            </tr>
                                            )}
                                            <tr>
                                                <td><b>Total Biaya</b></td>
                                                <td><b className="fs14 text-primary">{dataLaba.biaya.totalBiaya}</b></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-border">
                                <div className="panel-heading">
                                    <h5 className="panel-title">Laba Kotor</h5>
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tbody>
                                            { Object.keys(dataLaba.labakotor.pendapatan.data).map(val =>
                                            <tr>
                                                <td>{val}</td>
                                                <td><b>{dataLaba.labakotor.pendapatan.data[val]}</b></td>
                                            </tr>
                                            )}                
                                            <tr>
                                                <td><b>Total Pendapatan</b></td>
                                                <td><b className="fs14 text-primary">{dataLaba.labakotor.pendapatan.total}</b></td>
                                            </tr>
                                            <tr>
                                                <td><b>Total HPP</b></td>
                                                <td><b className="fs14 text-primary">{dataLaba.labakotor.hpp.total}</b></td>
                                            </tr>
                                            <tr>
                                                <td><b>Total Laba Kotor</b></td>
                                                <td><b className="fs14 text-primary">{dataLaba.labakotor.totalLabaKotor}</b></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-6">
                            <div className="panel panel-border">
                                <div className="panel-heading">
                                    <h5 className="panel-title">Laba Bersih</h5>
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tbody>
                                            <tr>
                                                <td><b>Total Laba Bersih</b></td>
                                                <td><b className="fs14 text-primary">{dataLaba.lababersih}</b></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="panel panel-border">
                                <div className="panel-heading">
                                    <h5 className="panel-title">Kenaikan Kas</h5>
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tbody>
                                            <tr>
                                                <td>Posisi Kas 1 April, 2015</td>
                                                <td><b>126,000,000</b></td>
                                            </tr>
                                            <tr>
                                                <td>Posisi Kas 30 April, 2015</td>
                                                <td><b>75,000,000</b></td>
                                            </tr>
                                            <tr>
                                                <td colspan="2"><i className="icon-minus"></i></td>
                                            </tr>
                                            <tr>
                                                <td><b>Jumlah</b></td>
                                                <td><b className="fs14 text-primary">51,000,000</b></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <hr/>
                    <div className="help-block">
                        <p>**Note</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dui vitae nisi dignissim egestas. Pellentesque pellentesque sodales dignissim. Etiam rhoncus diam arcu, vitae porttitor purus mollis id.</p>
                    </div>
                </div>
            </section>
        </section>
        </main>
        : <EmptyState/> }
        </div>
        );
    }
}

export default LaporanLabaRugi;