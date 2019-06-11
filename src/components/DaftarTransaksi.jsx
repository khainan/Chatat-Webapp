import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DaftarTransaksi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

    }
    render() {
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
                                <tr>
                                    <td>31 Nov, 2018</td>
                                    <td><span className="label label-primary">Penjualan</span></td>
                                    <td><div className="table-text">Quisque eget massa lacus. Fusce pretium purus vitae libero suscipit sagittis.</div></td>
                                    <td>500.000</td>
                                    <td>250.000</td>
                                    <td>
                                        <ul className="icon-action text-right">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="edit"><i className="icon-edit"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="hapus"><i className="icon-close"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>31 Nov, 2018</td>
                                    <td><span className="label label-primary">Penjualan</span></td>
                                    <td><div className="table-text">Quisque eget massa lacus. Fusce pretium purus vitae libero suscipit sagittis.</div></td>
                                    <td>500.000</td>
                                    <td>1.000.000</td>
                                    <td>
                                        <ul className="icon-action text-right">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="edit"><i className="icon-edit"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="hapus"><i className="icon-close"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>31 Nov, 2018</td>
                                    <td><span className="label label-primary">Penjualan</span></td>
                                    <td><div className="table-text">Quisque eget massa lacus. Fusce pretium purus vitae libero suscipit sagittis.</div></td>
                                    <td>500.000</td>
                                    <td>250.000</td>
                                    <td>
                                        <ul className="icon-action text-right">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="edit"><i className="icon-edit"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="hapus"><i className="icon-close"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>31 Nov, 2018</td>
                                    <td><span className="label label-primary">Penjualan</span></td>
                                    <td><div className="table-text">Quisque eget massa lacus. Fusce pretium purus vitae libero suscipit sagittis.</div></td>
                                    <td>500.000</td>
                                    <td>1.000.000</td>
                                    <td>
                                        <ul className="icon-action text-right">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="edit"><i className="icon-edit"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="hapus"><i className="icon-close"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>31 Nov, 2018</td>
                                    <td><span className="label label-danger">Utang</span></td>
                                    <td><div className="table-text">Quisque eget massa lacus. Fusce pretium purus vitae libero suscipit sagittis.</div></td>
                                    <td>500.000</td>
                                    <td>250.000</td>
                                    <td>
                                        <ul className="icon-action text-right">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="edit"><i className="icon-edit"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="hapus"><i className="icon-close"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>31 Nov, 2018</td>
                                    <td><span className="label label-warning">Terima Piutang</span></td>
                                    <td><div className="table-text">Quisque eget massa lacus. Fusce pretium purus vitae libero suscipit sagittis.</div></td>
                                    <td>500.000</td>
                                    <td>1.000.000</td>
                                    <td>
                                        <ul className="icon-action text-right">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="edit"><i className="icon-edit"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="hapus"><i className="icon-close"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>31 Nov, 2018</td>
                                    <td><span className="label label-success">Modal</span></td>
                                    <td><div className="table-text">Quisque eget massa lacus. Fusce pretium purus vitae libero suscipit sagittis.</div></td>
                                    <td>500.000</td>
                                    <td>250.000</td>
                                    <td>
                                        <ul className="icon-action text-right">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="edit"><i className="icon-edit"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="hapus"><i className="icon-close"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>31 Nov, 2018</td>
                                    <td><span className="label label-success">Modal</span></td>
                                    <td><div className="table-text">Quisque eget massa lacus. Fusce pretium purus vitae libero suscipit sagittis.</div></td>
                                    <td>500.000</td>
                                    <td>1.000.000</td>
                                    <td>
                                        <ul className="icon-action text-right">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="edit"><i className="icon-edit"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="hapus"><i className="icon-close"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>31 Nov, 2018</td>
                                    <td><span className="label label-primary">Penjualan</span></td>
                                    <td><div className="table-text">Quisque eget massa lacus. Fusce pretium purus vitae libero suscipit sagittis.</div></td>
                                    <td>500.000</td>
                                    <td>250.000</td>
                                    <td>
                                        <ul className="icon-action text-right">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="edit"><i className="icon-edit"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="hapus"><i className="icon-close"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>31 Nov, 2018</td>
                                    <td><span className="label label-default">Lainnya</span></td>
                                    <td><div className="table-text">Quisque eget massa lacus. Fusce pretium purus vitae libero suscipit sagittis.</div></td>
                                    <td>500.000</td>
                                    <td>1.000.000</td>
                                    <td>
                                        <ul className="icon-action text-right">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="edit"><i className="icon-edit"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="hapus"><i className="icon-close"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>31 Nov, 2018</td>
                                    <td><span className="label label-default">Lainnya</span></td>
                                    <td><div className="table-text">Quisque eget massa lacus. Fusce pretium purus vitae libero suscipit sagittis.</div></td>
                                    <td>500.000</td>
                                    <td>250.000</td>
                                    <td>
                                        <ul className="icon-action text-right">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="edit"><i className="icon-edit"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="hapus"><i className="icon-close"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>31 Nov, 2018</td>
                                    <td><span className="label label-default">Lainnya</span></td>
                                    <td><div className="table-text">Quisque eget massa lacus. Fusce pretium purus vitae libero suscipit sagittis.</div></td>
                                    <td>500.000</td>
                                    <td>1.000.000</td>
                                    <td>
                                        <ul className="icon-action text-right">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="edit"><i className="icon-edit"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="hapus"><i className="icon-close"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>31 Nov, 2018</td>
                                    <td><span className="label label-primary">Penjualan</span></td>
                                    <td><div className="table-text">Quisque eget massa lacus. Fusce pretium purus vitae libero suscipit sagittis.</div></td>
                                    <td>500.000</td>
                                    <td>250.000</td>
                                    <td>
                                        <ul className="icon-action text-right">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="edit"><i className="icon-edit"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="hapus"><i className="icon-close"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>31 Nov, 2018</td>
                                    <td><span className="label label-default">Lainnya</span></td>
                                    <td><div className="table-text">Quisque eget massa lacus. Fusce pretium purus vitae libero suscipit sagittis.</div></td>
                                    <td>500.000</td>
                                    <td>1.000.000</td>
                                    <td>
                                        <ul className="icon-action text-right">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="edit"><i className="icon-edit"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="hapus"><i className="icon-close"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>31 Nov, 2018</td>
                                    <td><span className="label label-success">Modal</span></td>
                                    <td><div className="table-text">Quisque eget massa lacus. Fusce pretium purus vitae libero suscipit sagittis.</div></td>
                                    <td>500.000</td>
                                    <td>250.000</td>
                                    <td>
                                        <ul className="icon-action text-right">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="edit"><i className="icon-edit"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="hapus"><i className="icon-close"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>31 Nov, 2018</td>
                                    <td><span className="label label-success">Modal</span></td>
                                    <td><div className="table-text">Quisque eget massa lacus. Fusce pretium purus vitae libero suscipit sagittis.</div></td>
                                    <td>500.000</td>
                                    <td>1.000.000</td>
                                    <td>
                                        <ul className="icon-action text-right">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="edit"><i className="icon-edit"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="left" title="" data-original-title="hapus"><i className="icon-close"></i></a></li>
                                        </ul>
                                    </td>
                                </tr>
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