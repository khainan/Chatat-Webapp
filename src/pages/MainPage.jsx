import React, { Component } from "react";
import '../css/primary.css';
import LeftBar from '../components/LeftBar';
import LoginPage from '../pages/LoginPage';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

 
  render() {
    return (
      <main id="main">
    
    <section className="main-pages">
        
        <aside className="main-menu">
            <div className="content primary-menu">
                <div className="content-inner">
                    <div className="main-menu-inner">
                        <div className="primary-logo"></div>
                        <ul className="list-icon-link">
                            <li><a href="#!" className="icon-btn" data-toggle="tooltip" title="notification" data-placement="right"><i className="icon-email"></i></a></li>
                            <li><a href="#!" className="icon-btn" data-toggle="tooltip" title="report" data-placement="right"><i className="icon-idea"></i></a></li>
                            <li><a href="aset.html" className="icon-btn" data-toggle="tooltip" title="aset" data-placement="right"><div className="dotted"></div><i className="icon-briefcase"></i></a></li>
                        </ul>
                        <div className="menu-user menu-icon dropdown">
                            <div className="menu-user-img">
                                <div className="thumb">
                                    <img src="../assets/images/user.jpg"/>
                                </div>
                            </div>
                            <div className="dropdown-hover">
                                <ul>
                                    <li className="dropdown-header">
                                        <span className="text-label">Halo,</span>
                                        <div className="username">Username</div>
                                    </li>
                                    <li><a href="setting.html"><i className="icon icon-configure"></i><span className="label-menu">Setting</span></a></li>
                                    <li><a href="../index.html"><i className="icon icon-log_out"></i><span className="label-menu">Keluar</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content secondary-menu">
                <div className="content-inner">
                    <div className="main-menu-inner" scroll>
                        <div className="menu-item menu-top">
                            <a className="btn btn-block btn-primary mb3" href="catat-transaksi.html">Catat Transaksi</a>
                            <div className="title-menu">Dashboard</div>
                            <ul className="menu">
                                <li className="active"><a href="index.html"><i className="icon icon-dashboard"></i><span className="label-menu">Dashboard</span></a></li>
                                <li><a href="dashboard-daftar_trx.html"><i className="icon icon-documents"></i><span className="label-menu">Daftar Transaksi</span></a></li>
                                <li><a href="dashboard-utang_piutang.html"><i className="icon icon-news"></i><span className="label-menu">Utang Piutang</span></a></li>
                                <li><a href="dashboard-inventory.html"><i className="icon icon-components"></i><span className="label-menu">Inventory</span></a></li>
                                <li><a href="dashboard-customer_vendor.html"><i className="icon icon-users_teams"></i><span className="label-menu">Customer/Vendor</span></a></li>
                            </ul>
                        </div>
                        <div className="menu-item">
                            <div className="title-menu">Laporan</div>
                            <ul className="menu">
                                <li><a href="laporan-arus_kas.html"><i className="icon icon-chart"></i><span className="label-menu">Arus Kas</span></a></li>
                                <li><a href="laporan-laba_rugi.html"><i className="icon icon-diagram"></i><span className="label-menu">Laba Rugi</span></a></li>
                                <li><a href="laporan-neraca.html"><i className="icon icon-ranks"></i><span className="label-menu">Neraca</span></a></li>
                            </ul>
                        </div>
                        <div className="menu-item menu-bottom">
                            <div className="title-menu">Lain-lain</div>
                            <ul className="menu">
                                <li><a href="lain-saran.html"><i className="icon icon-chat"></i><span className="label-menu">Saran</span></a></li>
                                <li><a href="lain-pembayaran.html"><i className="icon icon-transactions"></i><span className="label-menu">Pembayaran</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
        
        <section className="main-page">
            <section className="section-header">
                <div className="container">
                    <div className="section-top">
                        <ul className="breadcrumb">
                            <li><a href="index.html">Dashboard</a></li>
                        </ul>
                        <div id="current-date"></div>
                    </div>
                    <div className="section-title">
                        <div className="page-title">
                            <div className="main-title">
                                <h4 className="title">Ayo, kamu belum catat keuanganmu hari ini</h4>
                            </div>
                        </div>
                        <div className="cash-in text-right">
                            <div className="cash-in-label">
                                <span className="text-label">Sisa Kas</span>
                                <div className="cash-in-value">Rp 1.000.000</div>
                            </div>
                            <div className="cash-in-icon">
                                <a className="btn btn-circle btn-primary btn-sm" href="#!"><i className="icon-email"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-body">
                <div className="container">
                    <div className="list-header">
                        <div className="list-action">
                            <div className="list-action-item search-input">
                                <i className="input-icon icon-search"></i>
                                <input className="form-control input-sm" placeholder="Cari.."/>
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
        </section>
    </section>
    
</main>
      );
  }
}

export default MainPage;
