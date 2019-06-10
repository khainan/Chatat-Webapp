import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CatatTransaksi extends Component {
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
                        <section className="section-body">
                            <div className="container">
                                <div className="radio-tabs">
                                    <div className="radio btn-radio">
                                        <input type="radio" id="uang_masuk" name="tipe" checked />
                                        <label for="uang_masuk">Uang Masuk</label>
                                    </div>
                                    <div className="radio btn-radio">
                                        <input type="radio" id="uang_keluar" name="tipe" />
                                        <label for="uang_keluar">Uang Keluar</label>
                                    </div>
                                </div>
                                <hr />
                                <div className="row control-group">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group input-date">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-calendar"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Tanggal Transaksi</label>
                                                    <input className="form-control" daterange />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-briefcase"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Proyek</label>
                                                    <div className="add-button" data-toggle="tooltip" data-placement="left" title="Tambah">
                                                        <button className="btn btn-default" data-toggle="modal" data-target="#tambah-proyek">
                                                            <span></span>
                                                        </button>
                                                    </div>
                                                    <select className="form-control" data-live-search="true" data-live-search-placeholder="Search">
                                                        <option>--</option>
                                                        <option>Proyek A</option>
                                                        <option>Proyek B</option>
                                                        <option>Proyek C</option>
                                                        <option>Proyek D</option>
                                                        <option>Proyek E</option>
                                                        <option>Proyek F</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row control-group">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-user"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Asal Akun</label>
                                                    <div className="add-button" data-toggle="tooltip" data-placement="left" title="Tambah">
                                                        <button className="btn btn-default" data-toggle="modal" data-target="#tambah-akun">
                                                            <span></span>
                                                        </button>
                                                    </div>
                                                    <select className="form-control" data-live-search="true" data-live-search-placeholder="Search">
                                                        <option>--</option>
                                                        <option>Asal Akun A</option>
                                                        <option>Asal Akun B</option>
                                                        <option>Asal Akun C</option>
                                                        <option>Asal Akun D</option>
                                                        <option>Asal Akun E</option>
                                                        <option>Asal Akun F</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-transactions"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Kategori Transaksi</label>
                                                    <select className="form-control">
                                                        <option>Penjualan</option>
                                                        <option>Utang</option>
                                                        <option>Terima piutang</option>
                                                        <option>Modal</option>
                                                        <option>Penerimaan lain</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row control-group">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-edit"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Keterangan Produk</label>
                                                    <input className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-ranks"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Jumlah Unit</label>
                                                    <input className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-copy"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Satuan</label>
                                                    <div className="add-button" data-toggle="tooltip" data-placement="left" title="Tambah">
                                                        <button className="btn btn-default" data-toggle="modal" data-target="#tambah-satuan">
                                                            <span></span>
                                                        </button>
                                                    </div>
                                                    <select className="form-control" data-live-search="true">
                                                        <option>--</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-windows"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Harga Satuan</label>
                                                    <input className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group no-label">
                                            <input className="form-control input-danger" value="Rp 200.000" readonly />
                                        </div>
                                    </div>
                                </div>
                                <div className="row control-group">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-users_teams"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Customer</label>
                                                    <div className="add-button" data-toggle="tooltip" data-placement="left" title="Tambah">
                                                        <button className="btn btn-default" data-toggle="modal" data-target="#tambah-customer">
                                                            <span></span>
                                                        </button>
                                                    </div>
                                                    <select className="form-control" data-live-search="true" data-live-search-placeholder="Search">
                                                        <option>--</option>
                                                        <option>Customer A</option>
                                                        <option>Customer B</option>
                                                        <option>Customer C</option>
                                                        <option>Customer D</option>
                                                        <option>Customer E</option>
                                                        <option>Customer F</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-bills"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Nomor Bukti Transaksi</label>
                                                    <input className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-windows"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Cara Bayar</label>
                                                    <select className="form-control">
                                                        <option>--</option>
                                                        <option>Tunai</option>
                                                        <option>Non tunai</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-edit"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Keterangan</label>
                                                    <input className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="btn-groups">
                                    <div className="right">
                                        <a className="btn btn-default group-item" href="#!">Cancel</a>
                                        <a className="btn btn-primary group-item" href="#!">Simpan Transaksi</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>    
            </main>
        </div >
        );
    }
}

export default CatatTransaksi;