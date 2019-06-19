import React, { Component } from "react";
import axios from 'axios';
import { UncontrolledTooltip } from 'reactstrap';
import EmptyState from "./EmptyState";

class DaftarTransaksi extends Component {

    state = {
        listTransaksi: [],
        totalPage: 0,
        perPage: 0,
        currentPage: 1,
        searchTransaksi: "",
        kategori: "",
        ready:false
    };

    componentDidMount() {
        this.getListTransaksi();
    }

    getListTransaksi = () => {
        const token = window.localStorage.getItem("__chatat_token__")
        const headers = { "Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0", "content-type": "application/json", "content-hash": token }

        const { filter, search } = this.state;

        const data = {
            "search": {
                "tanggal": this.state.searchTransaksi,
                "kategori": this.state.kategori
            },
            "order": {
                "tanggal": "ASC"
            },
            "page": this.state.currentPage
        }

        axios({
            method: "post",
            url: `https://azaradigital.com/_devservice/sysFront/datatransaksi/list`,
            data,
            headers
        }).then(r => this.setState({ listTransaksi: r.data.data, totalPage: r.data.totalpage, perPage: r.data.perpage, ready:true }));
    }

    render() {

        const { listTransaksi, totalPage, perPage, currentPage, ready } = this.state;

        return (
            <div>
                { ready ?
                <main id="main">

                    <section className="main-pages">
                        <section className="main-page">
                            <section className="section-body">
                                <div className="container">
                                    <div className="list-header">
                                        <div className="list-action">
                                            <div className="list-action-item search-input">
                                                <i className="input-icon icon-search"></i>
                                                <input className="form-control input-sm" onChange={(e) => this.setState({ searchTransaksi: e.currentTarget.value }, () => this.getListTransaksi())} placeholder="Cari transaksi.." />
                                            </div>
                                            <div className="list-action-item">
                                                <select onChange={(e) => this.setState({ kategori: e.currentTarget.value }, () => this.getListTransaksi())} className="form-control input-sm">
                                                    <option value="" data-hidden="true">Pilih Kategori</option>
                                                    <option>Penjualan</option>
                                                    <option>Utang</option>
                                                    <option>Biaya</option>
                                                    <option>Modal</option>
                                                    <option>Lainnya</option>
                                                </select>
                                            </div>
                                            <div className="list-action-item">
                                                <a className="btn btn-sm btn-primary btn-create">Create</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive table-wrapper">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Tanggal</th>
                                                    <th>Kategori</th>
                                                    <th>Deskripsi</th>
                                                    <th>Debit</th>
                                                    <th>Kredit</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {listTransaksi.map((transaksi, index) => {
                                                    const kategori = transaksi.kategori;
                                                    const classLabel = kategori === "Piutang" ? "label label-warning" : kategori === "Utang Bank" ? "label label-danger" : kategori === "Penjualan" ? "label label-primary" : kategori === "Modal" ? "label label-success" : "label label-default"

                                                    return (
                                                        <tr>
                                                            <td>{new Date(transaksi.tanggal).toLocaleDateString('id', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                                                            <td><span className={classLabel}>{transaksi.kategori}</span></td>
                                                            <td><div className="table-text">{transaksi.deskripsi}</div></td>
                                                            <td>{parseInt(transaksi.debit).toLocaleString('id')}</td>
                                                            <td>{parseInt(transaksi.kredit).toLocaleString('id')}</td>
                                                            <td>
                                                                <ul className="icon-action text-right">
                                                                    <li><a id={`edit-${index}`}><i className="icon-edit"></i></a></li>
                                                                    <li><a id={`close-${index}`}><i className="icon-close"></i></a></li>
                                                                    <UncontrolledTooltip placement="left" target={`edit-${index}`}>
                                                                        Edit
                                                    </UncontrolledTooltip>
                                                                    <UncontrolledTooltip placement="right" target={`close-${index}`}>
                                                                        Close
                                                    </UncontrolledTooltip>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    {this.state.totalPage > 1 && <nav className="pagination-nav">
                                        <div className="pagination-button">
                                            <a className="pagination-control disabled icon-arrow_backward_2"></a>
                                            <ul className="pagination">
                                                <li className="active"><a>1</a></li>
                                                <li><a>2</a></li>
                                                <li><a>3</a></li>
                                                <li className="pagination-disabled"><a>...</a></li>
                                                <li><a>50</a></li>
                                                <li><a>51</a></li>
                                            </ul>
                                            <a className="pagination-control icon-arrow_forward_2"></a>
                                        </div>
                                        <span className="pagination-info">Page 1 of {this.state.totalPage}</span>
                                    </nav>}
                                </div>
                            </section>
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

export default DaftarTransaksi;