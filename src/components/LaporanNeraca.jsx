import React, { Component } from "react";
import axios from 'axios';

class LaporanNeraca extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNeraca:""
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
            url: `https://azaradigital.com/_devservice/sysFront/report/neraca`,
            data,
            headers
          }).then(r => this.setState({dataNeraca :r.data}));
    }
    render() {
        let neraca = this.state.dataNeraca;

        return (
        <div>
        <main id="main">
        <section className="container-laporan">
            <section className="section-body">
                <div className="container">
                    <div className="row-flex">
                        <div className="flex-6">
                            <div className="panel panel-border">
                                <div className="panel-heading">
                                    <h5 className="panel-title">Assets</h5>
                                </div>
                                { neraca && Object.keys(neraca.aktiva.asset).map( val => 
                                <div className="panel-body">
                                    <p className="text-label">{val.replace("data", "")}</p>
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tbody>
                                            { Object.keys(neraca.aktiva.asset[val].data).map( val2 =>
                                            <tr>
                                                <td>{val2}</td>
                                                <td><b>{neraca.aktiva.asset[val].data[val2].toLocaleString('id')}</b></td>
                                            </tr>
                                            )}
                                            <tr>
                                                <td><b>Total {val.replace("data", "")}</b></td>
                                                <td><b className="fs14 text-primary">{neraca.aktiva.asset[val].total.toLocaleString('id')}</b></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                )}
                                { neraca &&
                                <div className="panel-body">
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tbody>
                                            <tr>
                                                <td><b>Total Asset</b></td>
                                                <td><b className="fs14 text-primary">{"Rp. " + neraca.aktiva.totalAsset.toLocaleString('id')}</b></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>}
                            </div>
                        </div>
                        <div className="flex-6">
                            <div className="panel panel-border">
                                <div className="panel-heading">
                                    <h5 className="panel-title">Liabilities</h5>
                                </div>
                                { neraca && Object.keys(neraca.pasiva.hutang).map( val =>
                                <div className="panel-body">
                                    <p className="text-label">{val.replace("data", "")}</p>
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tbody>
                                            { Object.keys(neraca.pasiva.hutang[val].data).map( val2 =>
                                            <tr>
                                                <td>{val2}</td>
                                                <td><b>{neraca.pasiva.hutang[val].data[val2].toLocaleString('id')}</b></td>
                                            </tr>
                                            )}
                                            <tr>
                                                <td><b>Total {val.replace("data", "")}</b></td>
                                                <td><b className="fs14 text-primary">{neraca.pasiva.hutang[val].total.toLocaleString('id')}</b></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                )}
                                <div className="panel-body">
                                    <p className="text-label">Modal</p>
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tbody>
                                            { neraca && Object.keys(neraca.pasiva.modal.dataModal.data).map( val =>
                                            <tr>
                                                <td>{val}</td>
                                                <td><b>{neraca.pasiva.modal.dataModal.data[val].toLocaleString('id')}</b></td>
                                            </tr>
                                            )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                { neraca &&
                                <div className="panel-body">
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tbody>
                                            <tr>
                                                <td><b>Total Hutang</b></td>
                                                <td><b className="fs14 text-primary">{"Rp. " + neraca.pasiva.totalHutang.toLocaleString('id')}</b></td>
                                            </tr>
                                            <tr>
                                                <td><b>Total Modal</b></td>
                                                <td><b className="fs14 text-primary">{"Rp. " + neraca.pasiva.totalModal.toLocaleString('id')}</b></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>}
                            </div>
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
        </div>
        );
    }
}

export default LaporanNeraca;