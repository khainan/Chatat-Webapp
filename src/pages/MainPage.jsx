import React, { useState } from 'react';
import '../css/primary.css';
import Dashboard from '../components/Dashboard';
import DaftarTransaksi from '../components/DaftarTransaksi';
import Neraca from '../components/LaporanNeraca';
import Loading from '../components/Loading';
import Modal from '../components/ModalDaftarAset';
import Aset from '../components/aset/Aset';
import Setting from '../components/Setting';
import CatatTransaksi from '../components/CatatTransaksi';
import { UncontrolledTooltip } from 'reactstrap';
import {useAuth} from '../context/auth-context'
import {useUser} from '../context/user-context'

function MainPage(props) {

    const user = useUser();
    const {logout} = useAuth();
    const [isModalShow, showModal] = useState(true);
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let today = new Date();
    let date = today.getDate() + ' ' + (monthNames[today.getMonth()]) + ', ' + today.getFullYear();
    
    const [currentPage, setPages] = useState('dashboard');

    let page = props.location.pathname;

    function logoutPage(props){
        localStorage.clear()
        window.location.href = "/";
    }

    function classActive(props){
        let page = props.location.pathname;

    }

    console.log(user)

    return (
      <main id="main">
      {/* <Loading/> */}
      { isModalShow && page === "/" &&
        <Modal 
            showModal={() => showModal(true)}
            closeModal={() => showModal(false)}
            goToAset={() => props.history.replace('/aset')}
         />
      }
      <section className="main-pages">    
          <aside className="main-menu">
              <div className="content primary-menu">
                  <div className="content-inner">
                      <div className="main-menu-inner">
                          <div className="primary-logo"></div>
                          <ul className="list-icon-link">
                              <li><a className="icon-btn" id={"email"}><i className="icon-email"></i></a></li>
                              <li><a className="icon-btn" id={"idea"}><i className="icon-idea"></i></a></li>
                              <li><a className="icon-btn" id={"briefcase"} onClick={() => props.history.replace('/aset')}>{user.notifikasi_aset && <div className="dotted"></div>}<i className="icon-briefcase"></i></a></li>
                              <UncontrolledTooltip placement="right" target="email">
                                notification
                              </UncontrolledTooltip>
                              <UncontrolledTooltip placement="right" target="idea">
                                report
                              </UncontrolledTooltip>
                              <UncontrolledTooltip placement="right" target="briefcase">
                                aset
                              </UncontrolledTooltip>
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
                                        <div className="username">{user.nama}</div>
                                    </li>
                                    <li onClick={() => props.history.replace('/setting')}><a><i className="icon icon-configure"></i><span className="label-menu">Setting</span></a></li>
                                    <li onClick={()=> logoutPage()}><a><i className="icon icon-log_out"></i><span className="label-menu">Keluar</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content secondary-menu">
                <div className="content-inner">
                    <div className="main-menu-inner">
                        <div className="menu-item menu-top">
                            <a className="btn btn-block btn-primary main-btn" onClick={() => props.history.replace('/catat-transaksi')}>Catat Transaksi</a>
                            <div className="first-title">Dashboard</div>
                            <ul className="menu">
                                <li className={page === "/" ? "active" : null} onClick={() => props.history.replace('/')}><a><i className="icon icon-dashboard"></i><span className="label-menu">Dashboard</span></a></li>
                                <li className={page === "/daftar-transaksi" ? "active" : null} onClick={() => props.history.replace('/daftar-transaksi')}><a><i className="icon icon-documents"></i><span className="label-menu">Daftar Transaksi</span></a></li>
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
                                <li className={page === "/laporan-neraca" ? "active" : null} onClick={() => props.history.replace('/laporan-neraca')}><a><i className="icon icon-ranks"></i><span className="label-menu">Neraca</span></a></li>
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
                            <li>
                                <a>Dashboard </a> 
                                {page !== "/" && <a>{page}</a>}
                            </li>
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
            
            { page === "/" &&
              <Dashboard/>
            }

            {
              page === "/aset" &&
              <Aset 
                user={user}
              />
            }

            {
              page === "/catat-transaksi" &&
              <CatatTransaksi 
                history={props.history}
              />
            }

            {
              page === "/daftar-transaksi" &&
              <DaftarTransaksi 
                
              />
            }

            {
              page === "/laporan-neraca" &&
              <Neraca 
                
              />
            }

            {
              page === "/setting" &&
              <Setting
                user={user}
              />
            }

        </section>
    </section>
</main>
      );
}

export default MainPage;
