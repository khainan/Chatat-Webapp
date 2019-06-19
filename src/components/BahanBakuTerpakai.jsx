import React, { Component } from "react";
import axios from 'axios';
import { UncontrolledTooltip } from 'reactstrap';
import EmptyState from "./EmptyState";

class BahanBakuTerpakai extends Component {
    
    state = {
        listBahanBaku : [], 
        search: "",
        filter: "",
        totalPage:0,
        perPage:0,
        ready:false,
        sisa:{
            data1:null,
            data2:null,
            data3:null,
            data4:null,
            data5:null,
            data6:null,
            data7:null,
            data8:null,
            data9:null,
            data10:null
        }
    };

    componentDidMount(){
        this.getList();
    }
    
    getList = () => {
        const token = window.localStorage.getItem("__chatat_token__")
        const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json", "content-hash": token}
        
        const {filter, search} = this.state;
        
        const data = {
            "search": {
                "bahan": search
            },
            "order": {
                "sisa": "DESC",
                "tanggal_beli": "DESC"
            },
            "page": 1 
        }

          axios({
            method: "post",
            url: `https://azaradigital.com/_devservice/sysFront/bahanbakutersedia/list`,
            data,
            headers
          }).then(r => this.setState({listBahanBaku :r.data.data, totalPage:r.data.totalpage, perPage: r.data.perpage,ready: true}));
    }

    updateSisa = (id, index) => {
        const token = window.localStorage.getItem("__chatat_token__")
        const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json", "content-hash": token}
        
        const data = {
            "id": id,
            "sisa": this.state.sisa["data"+index]
        }

          axios({
            method: "PATCH",
            url: `https://azaradigital.com/_devservice/sysFront/bahanbakutersedia/update`,
            data,
            headers
          }).then(
              this.getList()
          ).catch(
              r => this.props.onNotify("error", r.response.data.message)
          )
    }

    handleData = (value, index) => {
        this.setState({
            sisa:{
                ...this.state.sisa,
                ["data"+index]:value
            }
        })
    }
    
    
    render() {
        const {listBahanBaku, ready} = this.state;

        console.log(listBahanBaku);
        return (
            <div className="bahan-baku-terpakai">
            <section className="section-body">
                <div className="container">
                    <div className="list-header">
                        <div className="list-action">
                            <div className="list-action-item search-input">
                                <i className="input-icon icon-search"></i>
                                <input className="form-control input-sm" placeholder="Cari.." onChange={(e)=>this.setState({search: e.target.value}, () => {this.getList()})} />
                            </div>
                        </div>
                    </div>
                    {listBahanBaku[0] ?
                    <div className="table-responsive table-wrapper">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Bahan Baku</th>
                                    <th>Satuan</th>
                                    <th>Sisa Sebelumnya</th>
                                    <th>Sisa saat ini</th>
                                    <th>Bahan Baku Terpakai</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {listBahanBaku && listBahanBaku.map((list, index) => (
                                  <tr>
                                      <td>{list.bahan}</td>
                                      <td>{list.satuan}</td>
                                      <td>{!list.sisa ? 0 : list.sisa}</td>
                                      <td><input type="number" className="input-sisa" onChange={(e)=> this.handleData(e.currentTarget.value, index)} /></td>
                                      <td>{!list.hpp ? 0 : list.hpp}</td>
                                      <td><button className="btn btn-sm btn-default btn-create" onClick={()=>this.updateSisa(list.id , index)} >Update</button></td>
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

export default BahanBakuTerpakai;