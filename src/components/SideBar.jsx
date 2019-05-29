import React, { Component } from "react";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div class="content secondary-menu">
      <div class="content-inner">
          <div class="main-menu-inner" scroll>
              <div class="menu-item menu-top">
                  <a class="btn btn-block btn-primary mb3" href="catat-transaksi.html">Catat Transaksi</a>
                  <div class="title-menu">Dashboard</div>
                  <ul class="menu">
                      <li class="active"><a href="index.html"><i class="icon icon-dashboard"></i><span class="label-menu">Dashboard</span></a></li>
                      <li><a href="dashboard-daftar_trx.html"><i class="icon icon-documents"></i><span class="label-menu">Daftar Transaksi</span></a></li>
                      <li><a href="dashboard-utang_piutang.html"><i class="icon icon-news"></i><span class="label-menu">Utang Piutang</span></a></li>
                      <li><a href="dashboard-inventory.html"><i class="icon icon-components"></i><span class="label-menu">Inventory</span></a></li>
                      <li><a href="dashboard-customer_vendor.html"><i class="icon icon-users_teams"></i><span class="label-menu">Customer/Vendor</span></a></li>
                  </ul>
              </div>
              <div class="menu-item">
                  <div class="title-menu">Laporan</div>
                  <ul class="menu">
                      <li><a href="laporan-arus_kas.html"><i class="icon icon-chart"></i><span class="label-menu">Arus Kas</span></a></li>
                      <li><a href="laporan-laba_rugi.html"><i class="icon icon-diagram"></i><span class="label-menu">Laba Rugi</span></a></li>
                      <li><a href="laporan-neraca.html"><i class="icon icon-ranks"></i><span class="label-menu">Neraca</span></a></li>
                  </ul>
              </div>
              <div class="menu-item menu-bottom">
                  <div class="title-menu">Lain-lain</div>
                  <ul class="menu">
                      <li><a href="lain-saran.html"><i class="icon icon-chat"></i><span class="label-menu">Saran</span></a></li>
                      <li><a href="lain-pembayaran.html"><i class="icon icon-transactions"></i><span class="label-menu">Pembayaran</span></a></li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
    );
  }
}

export default SideBar;