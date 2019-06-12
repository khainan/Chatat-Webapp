import React, { Component } from "react";

class CatatTransaksi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            method:"uangmasuk",
            kategori1:["penjualan", "pendapatan", "utang", "modal", "piutang"],
            kategori2:["biaya", "bahanbaku", "peralatan", "kendaraan", "properti", "dividen", 'utang'],
            data:{
                tanggal:null,
                nomorbukti:null,
                akun:null,
                produk:null,
                jumlah:null,
                harga:null,
                satuan:null,
                vendor:null,
                carabayar:null,
                uangmuka:null,
                tags:null
            }
        };
        this.chooseMethod = this.chooseMethod.bind(this);
        this.handleData = this.handleData.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
    }

    chooseCategory(value){
        this.setState({
            kategori: value
        })
    }

    chooseMethod(value){
        this.setState({
            method:value
        })
    }

    handleData(prefix , value){
        this.setState({
            data:{
                ...this.state.data,
                [prefix]:value
            }
        })
    }
    
    render() {

        let kategori = this.state.method === "uangmasuk" ? this.state.kategori1 : this.state.kategori2;

        return (
            <div>
                <main id="main">
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
                                    <div className="section-catat-transaksi">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-briefcase"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Tags</label>
                                                    <select onChange={(e)=> this.handleData("tags" ,"#" + e.currentTarget.value)}  className="form-control" data-live-search="true" data-live-search-placeholder="Search">
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
                                <div className="container-aset">
                                    <div className="section-catat-transaksi">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-transactions"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Kategori Transaksi</label>
                                                    <select onChange={(e)=> this.chooseCategory(e.currentTarget.value)} className="form-control" data-live-search="true" data-live-search-placeholder="Search">
                                                        <option >--</option>
                                                        {
                                                            kategori.map((val,index) =>
                                                               <option>{val}</option> 
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
                                                    <i className="circle-icon icon-users_teams"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Customer/Vendor</label>
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
                                    <div className="section-catat-transaksi">
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
                                <div className="container-aset">
                                    <div className="section-catat-transaksi">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <span className="input-group-addon">
                                                    <i className="circle-icon icon-bills"></i>
                                                </span>
                                                <div className="form-input">
                                                    <label className="form-label">Upload Bukti Transaksi</label>
                                                    <input type="file"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-catat-transaksi">

                                    </div>
                                    <div className="section-catat-transaksi">

                                    </div>
                                </div>
                                <hr />
                                <div className="btn-group-catat-transaksi">
                                    <div className="container-btn-catat-transaksi">
                                        <button className="btn btn-default" onClick={()=> this.props.history.replace('/')}>Batal</button>
                                        <button className="btn-simpan-transaksi">Simpan Transaksi</button>
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