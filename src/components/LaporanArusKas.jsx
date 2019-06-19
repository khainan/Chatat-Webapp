import React, { Component } from "react";
import axios from 'axios';
import EmptyState from "./EmptyState";

class LaporanArusKas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArusKas: null
        };

    }

    componentDidMount() {
        this.getListData();
    }

    getListData = () => {
        const token = window.localStorage.getItem("__chatat_token__")
        const headers = { "Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0", "content-type": "application/json", "content-hash": token }

        const data = {
            "tanggalawal": "",
            "tanggalakhir": ""
        }

        axios({
            method: "post",
            url: `https://azaradigital.com/_devservice/sysFront/report/aruskas`,
            data,
            headers
        }).then(r => this.setState({ dataArusKas: r.data }));
    }


    render() {

        let dataArusKas = this.state.dataArusKas;
        return (
            <div>
                { dataArusKas ?
                <main id="main">
                    <section className="container-laporan">
                        <section className="section-body">
                            <div className="container">
                                <div className="row-flex">
                                    <div className="flex-6">
                                        <div className="panel panel-border">
                                            <div className="panel-heading">
                                                <h5 className="panel-title">Aktifitas Operasional</h5>
                                            </div>
                                            <div className="panel-body">
                                                <div className="table-responsive table-wrapper">
                                                    <table className="table list-table table-sm">
                                                        <tbody>
                                                            { Object.keys(dataArusKas["aktifitas operasional"]).map(val =>
                                                                <tr>
                                                                    <td>{val}</td>
                                                                    <td><b>{dataArusKas["aktifitas operasional"][`${val}`].toLocaleString('id')}</b></td>
                                                                </tr>
                                                            )}
                                                            <tr>
                                                                <td><b>Arus Kas untuk Aktifitas Opersional</b></td>
                                                                <td><b className="fs14 text-primary">{dataArusKas["total arus kas untuk aktivitas operasional"].toLocaleString('id')}</b></td>
                                                            </tr>
                                                            <tr>
                                                                <td><b>Total Arus Kas</b></td>
                                                                <td><b className="fs14 text-primary">{dataArusKas["total arus kas"].toLocaleString('id')}</b></td>
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
                                                <h5 className="panel-title">Aktifitas Non Opersional</h5>
                                            </div>
                                            <div className="panel-body">
                                                <div className="table-responsive table-wrapper">
                                                    <table className="table list-table table-sm">
                                                        <tbody>
                                                        { Object.keys(dataArusKas["aktifitas non operasional"]).map(val =>
                                                                <tr>
                                                                    <td>{val}</td>
                                                                    <td><b>{dataArusKas["aktifitas non operasional"][`${val}`].toLocaleString('id')}</b></td>
                                                                </tr>
                                                            )}
                                                            <tr>
                                                                <td><b>Arus Kas untuk Aktifitas Non Opersional</b></td>
                                                                <td><b className="fs14 text-primary">{dataArusKas["total arus kas untuk aktivitas non operasional"].toLocaleString('id')}</b></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="help-block">
                                    <p>**Note</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dui vitae nisi dignissim egestas. Pellentesque pellentesque sodales dignissim. Etiam rhoncus diam arcu, vitae porttitor purus mollis id.</p>
                                </div>
                            </div>
                        </section>
                    </section>
                </main>
            :
            <EmptyState/>
            }
            </div>
        );
    }
}

export default LaporanArusKas;