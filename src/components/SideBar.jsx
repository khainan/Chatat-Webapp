import React, { Component } from "react";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
        <div className="sidebar-catat">
            <div className="container-menu">
            <button className="btn-catat-transaksi">Catat Transaksi</button>
            <h4 className="title-menu">DASHBOARD</h4>
            <ul className="menu-catat">
                <li>
                <label>Dashboard</label>
                </li>
                <li>
                <label>Daftar Transaksi</label>
                </li>
                <li>
                <label>Utang Piutang</label>
                </li>
                <li>
                <label>Inventory</label>
                </li>
                <li>
                <label>Customer/Vendor</label>
                </li>
            </ul>
            </div>
            <div className="container-menu">
            <h4 className="title-menu">LAPORAN</h4>
            <ul className="menu-catat">
                <li>
                <label>Arus Kas</label>
                </li>
                <li>
                <label>Laba Rugi</label>
                </li>
                <li>
                <label>Neraca</label>
                </li>
            </ul>
            </div>
            <div className="container-menu">
            <h4 className="title-menu">LAIN-LAIN</h4>
            <ul className="menu-catat">
                <li>
                <label>Saran</label>
                </li>
                <li>
                <label>Pembayaran</label>
                </li>
            </ul>
            </div>
        </div>
    );
  }
}

export default SideBar;