import React, { Component } from "react";
import axios from 'axios';
import { UncontrolledTooltip } from 'reactstrap';
import EmptyState from "./EmptyState";

class Dashboard extends Component {
    
    state = {
        kas: 0,
        listKeuangan : [], 
        search: "",
        filter: "",
        totalPage:0,
        perPage:0,
        ready:false
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
          }).then(r => this.setState({listKeuangan :r.data.data, totalPage:r.data.totalpage, perPage: r.data.perpage,ready: true}));
    }
    
    render() {
        const {listKeuangan, ready} = this.state;
        return (
            <div>
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
                    {listKeuangan[0] ?
                    <div className="table-responsive table-wrapper">
                        <table className="table">
                            <tbody>
                                {listKeuangan && listKeuangan.map((list, index) => (
                                  <tr>
                                      <td><i id={list.jenis === "Uang Masuk" ? "uangmasuk" + index : "uangkeluar" + index} className={list.jenis === "Uang Masuk" ? "circle-icon icon-arrow_down icon-primary" : "circle-icon icon-arrow_up icon-custom" }></i></td>
                                      <td><b>Rp {parseInt(list.nominal).toLocaleString("id")}</b> -- {new Date(list.date).toLocaleDateString('id', {day: 'numeric', month: 'short', year: 'numeric'})}</td>
                                      <td>{list.kegiatan}</td>
                                        <UncontrolledTooltip placement="right" target={list.jenis === "Uang Masuk" ? "uangmasuk" + index : "uangkeluar" + index}>
                                            {list.jenis === "Uang Masuk" ? "Uang Masuk" : "Uang Keluar"}
                                        </UncontrolledTooltip>
                                  </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    :
                    <EmptyState/> 
                    }
                    { this.state.totalPage > 1 && <nav className="pagination-nav">
                        <div className="pagination-button">
                            <a className="pagination-control disabled icon-arrow_backward_2"></a>
                            <ul className="pagination">
                                <li className="active"><a>1</a></li>
                                <li><a>2</a></li>
                                <li><a>3</a></li>
                                <li className="pagination-disabled"><a>...</a></li>
                                <li><a>50</a></li>
                                <li><a>51</a></li>
                            </ul>
                            <a className="pagination-control icon-arrow_forward_2"></a>
                        </div>
                        <span className="pagination-info">Page 1 of {this.state.totalPage}</span>
                    </nav>}
                </div>
            </section>
            </div>
        );
    }
}

export default Dashboard;