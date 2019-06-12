import React, { Component } from "react";
import axios from 'axios';
class DaftarTransaksi extends Component {
        
        state = {
            listTransaksi: [],
            totalPage: 0,
            perPage:0,
            currentPage: 1
        };
    
        componentDidMount(){
            this.getListTransaksi();
        }
        
        getListTransaksi = () => {
            const token = window.localStorage.getItem("__chatat_token__")
            const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json", "content-hash": token}
            
            const {filter, search} = this.state;
            
            const data = {
                "search": {
                    "tanggal":""
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
              }).then(r => this.setState({listTransaksi :r.data.data, totalPage:r.data.totalpage, perPage: r.data.perpage}));
        }

    render() {

        const {listTransaksi, totalPage, perPage, currentPage } = this.state;
     
        return (
        <div>
        <main id="main">
    
    <section className="main-pages">
        <section className="main-page">
            <section className="section-body">
                <div className="container">
                    <div className="list-header">
                        <div className="list-action">
                            <div className="list-action-item search-input">
                                <i className="input-icon icon-search"></i>
                                <input className="form-control input-sm" placeholder="Cari transaksi.."/>
                            </div>
                            <div className="list-action-item">
                                <select className="form-control input-sm">
                                    <option data-hidden="true">Pilih Kategori</option>
                                    <option>Penjualan</option>
                                    <option>Utang</option>
                                    <option>Terima Utang</option>
                                    <option>Modal</option>
                                    <option>Lainnya</option>
                                </select>
                            </div>
                            <div className="list-action-item">
                                <a className="btn btn-sm btn-primary" href="#!">Create</a>
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
                                {listTransaksi.map(transaksi => {
                                    const kategori = transaksi.kategori;
                                    const classLabel = kategori === "Piutang" ? "label label-warning" : kategori === "Utang Bank" ? "label label-danger" : kategori === "Penjualan" ? "label label-primary" : kategori === "Modal" ? "label label-success" : "label label-default"
                                    
                                    return (
                                        <tr>
                                            <td>{new Date(transaksi.tanggal).toLocaleDateString('id', {day: 'numeric', month: 'short', year: 'numeric'})}</td>
                                            <td><span className={classLabel}>{transaksi.kategori}</span></td>
                                            <td><div className="table-text">{transaksi.deskripsi}</div></td>
                                            <td>{parseInt(transaksi.debit).toLocaleString('id')}</td>
                                            <td>{parseInt(transaksi.kredit).toLocaleString('id')}</td>
                                            <td>
                                                <ul className="icon-action text-right">
                                                    <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="edit"><i className="icon-edit"></i></a></li>
                                                    <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="hapus"><i className="icon-close"></i></a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                    )}
                                )}
                            </tbody>
                        </table>
                    </div>
                    <nav className="pagination-nav">
                        <div className="pagination-button">
                            <a className="pagination-control disabled icon-arrow_backward_2" href="#!"></a>
                            <ul className="pagination">
                                <li className="active"><a href="#!">1</a></li>
                                <li><a href="#!">2</a></li>
                                <li><a href="#!">3</a></li>
                                <li className="pagination-disabled"><a href="#!">...</a></li>
                                <li><a href="#!">50</a></li>
                                <li><a href="#!">51</a></li>
                            </ul>
                            <a className="pagination-control icon-arrow_forward_2" href="#!"></a>
                        </div>
                        <span className="pagination-info">Page 1 of 55</span>
                    </nav>
                </div>
            </section>
        </section>
        
    </section>
    
</main>
        </div>
        );
    }
}

export default DaftarTransaksi;