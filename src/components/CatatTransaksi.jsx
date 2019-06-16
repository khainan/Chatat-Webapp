import React, { Component } from "react";
import axios from 'axios';

class CatatTransaksi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            method:"uangmasuk",
            kategori1:["Penjualan", "Utang Jangka Panjang", "Terima Piutang", "Modal", "Pendapatan Lain2"],
            kategori2:["Biaya", "Bahan Baku", "Bayar Utang", "Peralatan", "Kendaraan", "Properti", 'Dividen/Prive'],
            data:{
            },
            buktitransaksi:null,
            kategori:null,
            listAkun:null,
            listTag:null,
            listSatuan:null,
            listProduk:null,
            listVendor:null,
            listPiutang:null,
            listKode:null,
            message:null
        };
        this.chooseMethod = this.chooseMethod.bind(this);
        this.handleData = this.handleData.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
        this.chooseBukti = this.chooseBukti.bind(this);
        this.saveData = this.saveData.bind(this);
        this.handleKodeTransaksi = this.handleKodeTransaksi.bind(this);
    }

    chooseCategory(value){
        let kategori;

        kategori = value === "Penjualan" ? "penjualan" 
                : value === "Utang Jangka Panjang" ? "utang" 
                : value === "Terima Piutang" ? "piutang"
                : value === "Modal" ? "modal"
                : value === "Pendapatan Lain2" ? "pendapatan"
                : value === "Biaya" ? "biaya"
                : value === "Bahan Baku" ? "bahanbaku"
                : value === "Bayar Utang" ? "utang"
                : value === "Peralatan" ? "peralatan"
                : value === "Kendaraan" ? "kendaraan"
                : value === "Properti" ? "properti"
                : value === "Dividen/Prive" ? "dividen"
                : null

        this.setState({
            kategori: kategori
        })
    }

    chooseMethod(value){
        this.setState({
            method:value
        })
    }

    chooseBukti(value){
        this.setState({
            buktitransaksi:value
        })
    }

    componentWillMount(){
        this.getListAkun();
        this.getListTags();
        this.getListSatuan();
        this.getListProduk();
        this.getListVendor();
        this.getListPiutang();
    }

    getListAkun(){
        const token = window.localStorage.getItem("__chatat_token__")
        const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json", "content-hash": token}
        
        let data = {
            "search": {
                "akun": ""
            },
            "order": {
                "akun": "DESC"
            },
            "page": 1
        }


        axios({
            method: "post",
            url: `https://azaradigital.com/_devservice/sysFront/akun/list`,
            data,
            headers
          })
          .then(
            r => this.setState({listAkun:r.data.data})
          );
    }

    getListTags(){
        const token = window.localStorage.getItem("__chatat_token__")
        const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json", "content-hash": token}
        
        let data = {
            "search": {
                "tags": ""
            },
            "order": {
                "tags": "DESC"
            },
            "page": 1 
        }


        axios({
            method: "post",
            url: `https://azaradigital.com/_devservice/sysFront/tags/list`,
            data,
            headers
          })
          .then(
            r => this.setState({listTag:r.data.data})
          );
    }

    getListSatuan(){
        const token = window.localStorage.getItem("__chatat_token__")
        const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json", "content-hash": token}
        
        let data = {
            "search": {
                "satuan": "",
                "status": "1"
            },
            "order": {
                "created"	: "DESC"
            },
            "page": 1
        }


        axios({
            method: "post",
            url: `https://azaradigital.com/_devservice/sysFront/data-satuan/list`,
            data,
            headers
          })
          .then(
            r => this.setState({listSatuan:r.data.data})
          );
    }

    getListProduk(){
        const token = window.localStorage.getItem("__chatat_token__")
        const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json", "content-hash": token}
        
        let data = {
            "search": {
                "akun": ""
            },
            "order": {
                "akun": "DESC"
            },
            "page": 1
        }


        axios({
            method: "post",
            url: `https://azaradigital.com/_devservice/sysFront/produk/list`,
            data,
            headers
          })
          .then(
            r => this.setState({listProduk:r.data.data})
          );
    }

    getListVendor(){
        const token = window.localStorage.getItem("__chatat_token__")
        const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json", "content-hash": token}
        
        let data = {
            "search": {
                "costumer": ""
            },
            "order": {
                "costumer": "DESC"
            },
            "page": 1
        }


        axios({
            method: "post",
            url: `https://azaradigital.com/_devservice/sysFront/costumer/list`,
            data,
            headers
          })
          .then(
            r => this.setState({listVendor:r.data.data})
          );
    }

    getListPiutang(){
        const token = window.localStorage.getItem("__chatat_token__")
        const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json", "content-hash": token}
        
        let data = {
            "search": {
                "id_costumer": ""
            },
            "page": 1
        }


        axios({
            method: "post",
            url: `https://azaradigital.com/_devservice/sysFront/datapiutang/list`,
            data,
            headers
          })
          .then(
            r => this.setState({listPiutang:r.data.data})
          );
    }    

    handleData(prefix , value){
        
        if(prefix === "carabayar"){
           let newValue = value === "Pembayaran Penuh" ? "tunai" : "nontunai";
           value = newValue;
        }
        else if (prefix === "status"){
           let newValue = value === "Sewa" ? "sewa" : "beli";
           value = newValue;
        }
        else if (prefix === "vendor"){
            let newValue = value.split(' ')[0]
            value = newValue;
         }
        this.setState({
            data:{
                ...this.state.data,
                [prefix]:value
            }
        },()=> this.handleKodeTransaksi(value))
    }

    handleKodeTransaksi(val){
        const token = window.localStorage.getItem("__chatat_token__")
        const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json", "content-hash": token}
        
        let data = {
            "search": {
                "id_costumer": val.split(' ')[1]
            },
            "page": 1
        }

        axios({
            method: "post",
            url: `https://azaradigital.com/_devservice/sysFront/datapiutang/listpiutang`,
            data,
            headers
          })
          .then(
            r => this.setState({listKode:r.data.data})
          );
    }

    saveData(){

        const token = window.localStorage.getItem("__chatat_token__")
        const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json", "content-hash": token}
        
        const data = new FormData;

        data.append('data', JSON.stringify(this.state.data))
        this.state.buktitransaksi && data.append('buktitransaksi',this.state.buktitransaksi[0])

        axios({
            method: "post",
            url: `https://azaradigital.com/_devservice/sysFront/${this.state.method}/${this.state.kategori}`,
            data,
            headers
          })
          .then( r =>
            this.setState({message:r.data.message, type:"success"},()=> this.props.history.replace("/"))
          )
          .catch(r => 
            this.setState({message:r.response.data[Object.keys(r.response.data)[0]][0], type:"error"})
        )
    }
    
    render() {

        return (
            <div>
                <main id="main">
                    {this.state.message && this.props.onNotify(this.state.type, this.state.message)}
                    <section className="main-pages-catat-transaksi">
                        <section className="section-body-catat-transaksi">
                            <div className="container">
                                <div className="radio-tabs">
                                    <div className="radio btn-radio">
                                        <input
                                            onClick={()=> this.chooseMethod("uangmasuk")}
                                            type="radio"
                                            id="uang_masuk" 
                                            name="tipe" 
                                            checked={this.state.method === "uangmasuk" ? true : false} />
                                        <label for="uang_masuk">Uang Masuk</label>
                                    </div>
                                    <div className="radio btn-radio">
                                        <input 
                                            onClick={()=> this.chooseMethod("uangkeluar")} 
                                            type="radio" 
                                            id="uang_keluar" 
                                            name="tipe" 
                                            checked={this.state.method === "uangkeluar" ? true : false} />
                                        <label for="uang_keluar">Uang Keluar</label>
                                    </div>
                                </div>
                                <hr />
                                <div className="container-aset">
                                    <div className="section-catat-transaksi">
                                        <div className="form-group input-date">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-calendar"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Tanggal Transaksi</label>
                                                    <input 
                                                        onChange={(e)=> this.handleData("tanggal" , e.currentTarget.value)} 
                                                        type="date" 
                                                        className="form-control" 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-catat-transaksi">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-user"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Asal Akun</label>
                                                    <select onChange={(e)=> this.handleData("akun" , e.currentTarget.value)}  className="form-control" data-live-search="true" data-live-search-placeholder="Search">
                                                    <option>--</option>
                                                        {
                                                           this.state.listAkun && this.state.listAkun.map(val=>
                                                                <option>{val.akun}</option>    
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-catat-transaksi">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-briefcase"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Tags</label>
                                                    <select onChange={(e)=> this.handleData("tags" , e.currentTarget.value)}  className="form-control" data-live-search="true" data-live-search-placeholder="Search">
                                                    <option>--</option>
                                                        {
                                                            this.state.listTag && this.state.listTag.map(val=>
                                                                <option>{val.nama_tags}</option>    
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-aset">
                                    <div className="section-catat-transaksi">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-transactions"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Kategori Transaksi</label>
                                                    { this.state.method === "uangmasuk" ?
                                                    <select onChange={(e)=> this.chooseCategory(e.currentTarget.value)} className="form-control" data-live-search="true" data-live-search-placeholder="Search">
                                                    <option>--</option>
                                                        { 
                                                            this.state.kategori1.map((val) =>
                                                               <option>{val}</option> 
                                                                )
                                                        }
                                                    </select>
                                                    :
                                                    <select onChange={(e)=> this.chooseCategory(e.currentTarget.value)} className="form-control" data-live-search="true" data-live-search-placeholder="Search">
                                                    <option selected>--</option>
                                                        { 
                                                            this.state.kategori2.map((val) =>
                                                               <option>{val}</option> 
                                                                )
                                                        }
                                                    </select>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    { this.state.kategori ?
                                    <div className="section-catat-transaksi">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-users_teams"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Customer/Vendor</label>
                                                    <select onChange={(e)=> this.handleData("vendor" , e.currentTarget.value)} className="form-control">
                                                    <option>--</option>
                                                        {
                                                           this.state.listVendor && this.state.listVendor.map(val=>
                                                                <option value={val.costumer + " " + val.id} >{val.costumer}</option>    
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : 
                                    <div className="section-catat-transaksi">
                                    </div>
                                    }
                                    { this.state.kategori === "penjualan" || this.state.kategori === "pendapatan" || this.state.kategori === "bahanbaku" ?
                                    <div className="section-catat-transaksi">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-edit"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Keterangan</label>
                                                    <input className="form-control" onChange={(e)=> this.handleData("produk" , e.currentTarget.value)}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : null }

                                    { this.state.kategori === "peralatan" || this.state.kategori === "kendaraan" || this.state.kategori === "properti" ?
                                    <div className="section-catat-transaksi">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-edit"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Keterangan</label>
                                                    <input className="form-control" onChange={(e)=> this.handleData(this.state.kategori , e.currentTarget.value)}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : null }

                                    { !this.state.kategori ?
                                    <div className="section-catat-transaksi">
                                        
                                    </div>
                                    : null }

                                    { this.state.kategori === "utang" || this.state.kategori === "modal" || this.state.kategori === "piutang" || this.state.kategori === "dividen" ?
                                    <div className="section-catat-transaksi">
                                        { this.state.kategori === "piutang" || (this.state.method === "uangkeluar" && this.state.kategori === "utang") ?
                                         <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-edit"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Kode Transaksi</label>
                                                    <select onChange={(e)=> this.setState({sisaPiutang: e.currentTarget.id} ,this.handleData("kode_transaksi" , e.currentTarget.value.substr(1)))} className="form-control">
                                                    <option>--</option>
                                                        {
                                                           this.state.listKode && this.state.listKode.map(val=>
                                                                <option>{val.kode_transaksi}</option>    
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div> : null }
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-edit"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Keterangan</label>
                                                    <input className="form-control" readOnly/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : null }
                                </div>
                                {/* {SECTION NEED PENJUALAN} */}
                                
                                { this.state.kategori === "penjualan" || this.state.kategori === "pendapatan" || this.state.kategori === "bahanbaku" ?
                                 <div>
                                    <div className="container-aset">
                                        <div className="section-catat-transaksi flex-3">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-ranks"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Jumlah Unit</label>
                                                        <input className="form-control" onChange={(e)=> this.handleData("jumlah" , e.currentTarget.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-catat-transaksi flex-3">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-copy"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Satuan</label>
                                                        <select onChange={(e)=> this.handleData("satuan" , e.currentTarget.value)} className="form-control" data-live-search="true">
                                                        <option>--</option>
                                                            {
                                                                this.state.listSatuan && this.state.listSatuan.map(val=>
                                                                    <option>{val.satuan}</option>    
                                                                )
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-catat-transaksi flex-3">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-windows"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Harga Satuan</label>
                                                        <input className="form-control" onChange={(e)=> this.handleData("harga" , e.currentTarget.value)}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-catat-transaksi flex-3">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div className="input-total">
                                                        <label className="form-label">Total</label>
                                                    </div>
                                                    <input className="form-control input-danger" value={"Rp " + (this.state.data.jumlah * this.state.data.harga)} readonly />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container-aset">
                                        <div className="section-catat-transaksi">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-windows"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Cara Bayar</label>
                                                        <select onChange={(e)=> this.handleData("carabayar" , e.currentTarget.value)} className="form-control">
                                                            <option>--</option>
                                                            <option>Pembayaran Penuh</option>
                                                            <option>Pembayaran Sebagian</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-catat-transaksi">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-windows"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Uang Muka</label>
                                                        <input className="form-control" onChange={(e)=> this.handleData("uangmuka" , e.currentTarget.value)}/>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                        <div className="section-catat-transaksi">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-bills"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Nomor Bukti Transaksi</label>
                                                        <input className="form-control" onChange={(e)=> this.handleData("nomorbukti" , e.currentTarget.value)}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> : null }

                                {/* {SECTION PROPTERTI DLL} */}

                                { this.state.kategori === "peralatan" || this.state.kategori === "kendaraan" || this.state.kategori === "properti" ?
                                <div>
                                    <div className="container-aset">
                                        <div className="section-catat-transaksi flex-3">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-ranks"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Jumlah Unit</label>
                                                        <input className="form-control" onChange={(e)=> this.handleData("jumlah" , e.currentTarget.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-catat-transaksi flex-3">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-copy"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Satuan</label>
                                                        <select onChange={(e)=> this.handleData("satuan" , e.currentTarget.value)} className="form-control" data-live-search="true">
                                                        <option>--</option>
                                                            {
                                                                this.state.listSatuan && this.state.listSatuan.map(val=>
                                                                    <option>{val.satuan}</option>    
                                                                )
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-catat-transaksi flex-3">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-windows"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Harga Satuan</label>
                                                        <input className="form-control" onChange={(e)=> this.handleData("harga" , e.currentTarget.value)}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-catat-transaksi flex-3">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div className="input-total">
                                                        <label className="form-label">Total</label>
                                                    </div>
                                                    <input className="form-control input-danger" value={"Rp " + (this.state.data.jumlah * this.state.data.harga)} readonly />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container-aset">
                                        <div className="section-catat-transaksi flex-3">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-windows"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Jenis Transaksi</label>
                                                        <select onChange={(e)=> this.handleData("status" , e.currentTarget.value)} className="form-control">
                                                            <option>--</option>
                                                            <option>Sewa</option>
                                                            <option>Beli</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-catat-transaksi flex-3">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-copy"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Masa Pakai (Bulan)</label>
                                                        <input type="number" className="form-control" onChange={(e)=> this.handleData("masapakai" , e.currentTarget.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-catat-transaksi flex-3">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-windows"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Cara Bayar</label>
                                                        <select onChange={(e)=> this.handleData("carabayar" , e.currentTarget.value)} className="form-control">
                                                            <option>--</option>
                                                            <option>Pembayaran Penuh</option>
                                                            <option>Pembayaran Sebagian</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-catat-transaksi flex-3">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-windows"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Uang Muka</label>
                                                        <input className="form-control" onChange={(e)=> this.handleData("uangmuka" , e.currentTarget.value)}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : null }

                                {/* {SECTION UTANG DLL} */}
                                { this.state.kategori === "utang" || this.state.kategori === "modal" || this.state.kategori === "piutang" || this.state.kategori === "dividen" ?
                                <div>
                                    <div className="container-aset">
                                        <div className="section-catat-transaksi flex-3">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-ranks"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Nominal</label>
                                                        <input className="form-control" onChange={(e)=> this.handleData("nominal" , e.currentTarget.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-catat-transaksi flex-3">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="circle-icon icon-windows"></i>
                                                    </span>
                                                    <div className="form-input">
                                                        <label className="form-label">Nomor Bukti Transaksi</label>
                                                        <input className="form-control" onChange={(e)=> this.handleData("nomorbukti" , e.currentTarget.value)}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-catat-transaksi flex-3">
                                            
                                        </div>
                                    </div>
                                </div>
                                : null }
                                { this.state.kategori && <div className="container-aset">
                                    <div className="section-catat-transaksi">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-bills"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Upload Bukti Transaksi</label>
                                                    <input type="file" onChange={(e)=>this.chooseBukti(e.currentTarget.files)}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-catat-transaksi">
                                        { this.state.kategori === "peralatan" || this.state.kategori === "kendaraan" || this.state.kategori === "properti" ?
                                         <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-windows"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Nomor Bukti Transaksi</label>
                                                    <input className="form-control" onChange={(e)=> this.handleData("nomorbukti" , e.currentTarget.value)}/>
                                                </div>
                                            </div>
                                        </div> : null}
                                    </div>
                                    <div className="section-catat-transaksi">

                                    </div>
                                </div>}
                                <hr />
                                <div className="btn-group-catat-transaksi">
                                    <div className="container-btn-catat-transaksi">
                                        <button className="btn btn-default" onClick={()=> this.props.history.replace('/')}>Batal</button>
                                        <button className="btn-simpan-transaksi" onClick={()=> this.saveData()} >Simpan Transaksi</button>
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