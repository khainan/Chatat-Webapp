import React, { Component } from "react";
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path:"dashboard"
        };
    }

    

    render() {
        return (
            <section className="section-body">
                <div className="container">
                    <div className="list-header">
                        <div className="list-action">
                            <div className="list-action-item search-input">
                                <i className="input-icon icon-search"></i>
                                <input className="form-control input-sm" placeholder="Cari.." />
                            </div>
                            <div className="list-action-item">
                                <select className="form-control input-sm">
                                    <option data-hidden="true">Pilih Tipe</option>
                                    <option>Tampilkan Semua</option>
                                    <option>Uang Masuk</option>
                                    <option>Uang Keluar</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive table-wrapper">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td><i className="circle-icon icon-arrow_up icon-custom" data-toggle="tooltip" data-placement="right" title="Uang keluar"></i></td>
                                    <td><b>Rp 500.000</b> -- 9 Mei, 2019</td>
                                    <td>Penjualan Shift Pagi</td>
                                </tr>
                                <tr>
                                    <td><i className="circle-icon icon-arrow_down icon-primary" data-toggle="tooltip" data-placement="right" title="Uang masuk"></i></td>
                                    <td><b>Rp 200.000</b> -- 9 Mei, 2019</td>
                                    <td>Penjualan Shift Pagi</td>
                                </tr>
                                <tr>
                                    <td><i className="circle-icon icon-arrow_down icon-primary" data-toggle="tooltip" data-placement="right" title="Uang masuk"></i></td>
                                    <td><b>Rp 400.000</b> -- 9 Mei, 2019</td>
                                    <td>Penjualan Shift Pagi</td>
                                </tr>
                                <tr>
                                    <td><i className="circle-icon icon-arrow_up icon-custom" data-toggle="tooltip" data-placement="right" title="Uang keluar"></i></td>
                                    <td><b>Rp 250.000</b> -- 9 Mei, 2019</td>
                                    <td>Penjualan Shift Pagi</td>
                                </tr>
                                <tr>
                                    <td><i className="circle-icon icon-arrow_up icon-custom" data-toggle="tooltip" data-placement="right" title="Uang keluar"></i></td>
                                    <td><b>Rp 200.000</b> -- 9 Mei, 2019</td>
                                    <td>Penjualan Shift Pagi</td>
                                </tr>
                                <tr>
                                    <td><i className="circle-icon icon-arrow_up icon-custom" data-toggle="tooltip" data-placement="right" title="Uang keluar"></i></td>
                                    <td><b>Rp 300.000</b> -- 9 Mei, 2019</td>
                                    <td>Penjualan Shift Pagi</td>
                                </tr>
                                <tr>
                                    <td><i className="circle-icon icon-arrow_up icon-custom" data-toggle="tooltip" data-placement="right" title="Uang keluar"></i></td>
                                    <td><b>Rp 800.000</b> -- 9 Mei, 2019</td>
                                    <td>Penjualan Shift Pagi</td>
                                </tr>
                                <tr>
                                    <td><i className="circle-icon icon-arrow_down icon-primary" data-toggle="tooltip" data-placement="right" title="Uang masuk"></i></td>
                                    <td><b>Rp 200.000</b> -- 9 Mei, 2019</td>
                                    <td>Penjualan Shift Pagi</td>
                                </tr>
                                <tr>
                                    <td><i className="circle-icon icon-arrow_up icon-custom" data-toggle="tooltip" data-placement="right" title="Uang keluar"></i></td>
                                    <td><b>Rp 500.000</b> -- 9 Mei, 2019</td>
                                    <td>Penjualan Shift Pagi</td>
                                </tr>
                                <tr>
                                    <td><i className="circle-icon icon-arrow_down icon-primary" data-toggle="tooltip" data-placement="right" title="Uang masuk"></i></td>
                                    <td><b>Rp 200.000</b> -- 9 Mei, 2019</td>
                                    <td>Penjualan Shift Pagi</td>
                                </tr>
                                <tr>
                                    <td><i className="circle-icon icon-arrow_down icon-primary" data-toggle="tooltip" data-placement="right" title="Uang masuk"></i></td>
                                    <td><b>Rp 400.000</b> -- 9 Mei, 2019</td>
                                    <td>Penjualan Shift Pagi</td>
                                </tr>
                                <tr>
                                    <td><i className="circle-icon icon-arrow_up icon-custom" data-toggle="tooltip" data-placement="right" title="Uang keluar"></i></td>
                                    <td><b>Rp 250.000</b> -- 9 Mei, 2019</td>
                                    <td>Penjualan Shift Pagi</td>
                                </tr>
                                <tr>
                                    <td><i className="circle-icon icon-arrow_up icon-custom" data-toggle="tooltip" data-placement="right" title="Uang keluar"></i></td>
                                    <td><b>Rp 200.000</b> -- 9 Mei, 2019</td>
                                    <td>Penjualan Shift Pagi</td>
                                </tr>
                                <tr>
                                    <td><i className="circle-icon icon-arrow_up icon-custom" data-toggle="tooltip" data-placement="right" title="Uang keluar"></i></td>
                                    <td><b>Rp 300.000</b> -- 9 Mei, 2019</td>
                                    <td>Penjualan Shift Pagi</td>
                                </tr>
                                <tr>
                                    <td><i className="circle-icon icon-arrow_up icon-custom" data-toggle="tooltip" data-placement="right" title="Uang keluar"></i></td>
                                    <td><b>Rp 800.000</b> -- 9 Mei, 2019</td>
                                    <td>Penjualan Shift Pagi</td>
                                </tr>
                                <tr>
                                    <td><i className="circle-icon icon-arrow_down icon-primary" data-toggle="tooltip" data-placement="right" title="Uang masuk"></i></td>
                                    <td><b>Rp 200.000</b> -- 9 Mei, 2019</td>
                                    <td>Penjualan Shift Pagi</td>
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
        );
    }
}

export default Dashboard;