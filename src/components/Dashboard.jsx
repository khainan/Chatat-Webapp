import React, { Component } from "react";
import axios from 'axios';

class Dashboard extends Component {
    
    state = {
        kas: 0,
        listKeuangan : [], 
        search: "",
        filter: ""
    };

    componentDidMount(){
        this.getListKeuangan();
    }
    
    getListKeuangan = () => {
        const token = window.localStorage.getItem("__chatat_token__")
        const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json", "content-hash": token}
        
        const {filter, search} = this.state;
        
        const data = {
            "search": {
                "kegiatan": search,
                "jenis": filter,
                "tanggal": "",
                "nominal": ""
            },
            "order": {
                "tanggal": "DESC"
            },
            "page": 1
        }

          axios({
            method: "post",
            url: `https://azaradigital.com/_devservice/sysFront/logtransaksi/list`,
            data,
            headers
          }).then(r => this.setState({listKeuangan :r.data.data}));
    }
    
    render() {
        const {listKeuangan} = this.state;
        return (
            <section className="section-body">
                <div className="container">
                    <div className="list-header">
                        <div className="list-action">
                            <div className="list-action-item search-input">
                                <i className="input-icon icon-search"></i>
                                <input className="form-control input-sm" placeholder="Cari.." onChange={(e)=>this.setState({search: e.target.value}, () => {this.getListKeuangan()})} />
                            </div>
                            <div className="list-action-item">
                                <select className="form-control input-sm" onChange={(e)=>this.setState({filter: e.target.value},() => {this.getListKeuangan()})}>
                                    <option value="" data-hidden="true">Tampilkan Semua</option>
                                    <option value="Uang Masuk">Uang Masuk</option>
                                    <option value="Uang Keluar">Uang Keluar</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive table-wrapper">
                        <table className="table">
                            <tbody>
                                {listKeuangan.map(list => (
                                  <tr>
                                      <td><i className={list.jenis === "Uang Masuk" ? "circle-icon icon-arrow_down icon-primary" : "circle-icon icon-arrow_up icon-custom" } data-toggle="tooltip" data-placement="right" title={list.jenis}></i></td>
                                      <td><b>Rp {parseInt(list.nominal).toLocaleString("id")}</b> -- {new Date(list.date).toLocaleDateString('id', {day: 'numeric', month: 'short', year: 'numeric'})}</td>
                                      <td>Penjualan Shift Pagi</td>
                                  </tr>
                                ))}
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