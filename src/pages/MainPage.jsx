import React, { Component } from "react";
import '../css/primary.css';
import Dashboard from '../components/Dashboard';
import Loading from '../components/Loading';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    window.location.href = '/'
  }

  componentDidMount(){
  
  }

  render() {

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let today = new Date();
    let date = today.getDate() + ' ' + (monthNames[today.getMonth()]) + ' ' + today.getFullYear();
    let currentPage =  this.props.match.params.currentPage;

    return (
      <main id="main">
      <Loading/>
      <section className="main-pages">    
          <aside className="main-menu">
              <div className="content primary-menu">
                  <div className="content-inner">
                      <div className="main-menu-inner">
                          <div className="primary-logo"></div>
                          <ul className="list-icon-link">
                              <li><a className="icon-btn" data-toggle="tooltip" title="notification" data-placement="right"><i className="icon-email"></i></a></li>
                              <li><a className="icon-btn" data-toggle="tooltip" title="report" data-placement="right"><i className="icon-idea"></i></a></li>
                              <li><a className="icon-btn" data-toggle="tooltip" title="aset" data-placement="right"><div className="dotted"></div><i className="icon-briefcase"></i></a></li>
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
                                    <li><a><i className="icon icon-configure"></i><span className="label-menu">Setting</span></a></li>
                                    <li onClick={this.handleLogout}><a><i className="icon icon-log_out"></i><span className="label-menu">Keluar</span></a></li>
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
                            <a className="btn btn-block btn-primary main-btn">Catat Transaksi</a>
                            <div className="first-title">Dashboard</div>
                            <ul className="menu">
                                <li className="active"><a><i className="icon icon-dashboard"></i><span className="label-menu">Dashboard</span></a></li>
                                <li><a><i className="icon icon-documents"></i><span className="label-menu">Daftar Transaksi</span></a></li>
                                <li><a><i className="icon icon-news"></i><span className="label-menu">Utang Piutang</span></a></li>
                                <li><a><i className="icon icon-components"></i><span className="label-menu">Inventory</span></a></li>
                                <li><a><i className="icon icon-users_teams"></i><span className="label-menu">Customer/Vendor</span></a></li>
                            </ul>
                        </div>
                        <div className="menu-item">
                            <div className="title-menu">Laporan</div>
                            <ul className="menu">
                                <li><a><i className="icon icon-chart"></i><span className="label-menu">Arus Kas</span></a></li>
                                <li><a><i className="icon icon-diagram"></i><span className="label-menu">Laba Rugi</span></a></li>
                                <li><a><i className="icon icon-ranks"></i><span className="label-menu">Neraca</span></a></li>
                            </ul>
                        </div>
                        <div className="menu-item menu-bottom">
                            <div className="title-menu">Lain-lain</div>
                            <ul className="menu">
                                <li><a><i className="icon icon-chat"></i><span className="label-menu">Saran</span></a></li>
                                <li><a><i className="icon icon-transactions"></i><span className="label-menu">Pembayaran</span></a></li>
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
                            <li><a>Dashboard</a></li>
                        </ul>
                        <div id="current-date">{date}</div>
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
                                <a className="btn btn-circle btn-primary btn-sm"><i className="icon-email"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FUNCTION TO CHANGE BETWEEN PAGE */}

            { currentPage === "dashboard" &&
              <Dashboard/>
            }



        </section>
    </section>
</main>
      );
  }
}

export default MainPage;
