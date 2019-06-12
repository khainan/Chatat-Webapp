import React, { Component } from "react";


class LaporanArusKas extends Component {
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
        
        <section className="main-page">
            <section className="section-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="panel panel-border">
                                <div className="panel-heading">
                                    <h5 className="panel-title">Aktifitas Operasional</h5>
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tr>
                                                <td>Penjualan</td>
                                                <td><b>300,000,000</b></td>
                                            </tr>
                                            <tr>
                                                <td>Retus Pembelian Barang Dagang</td>
                                                <td><b>50,000,000</b></td>
                                            </tr>
                                            <tr>
                                                <td>Pembelian Persediaan Barang</td>
                                                <td><b>100,000,000</b></td>
                                            </tr>
                                            <tr>
                                                <td>Total Biaya & Beban</td>
                                                <td><b>102,000,000</b></td>
                                            </tr>
                                            <tr>
                                                <td>Pembayaran Pajak Usaha</td>
                                                <td><b>10,000,000</b></td>
                                            </tr>
                                            
                                            <tr>
                                                <td><b>Arus Kas untuk Aktifitas Opersional</b></td>
                                                <td><b className="fs14 text-primary">138,000,000</b></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-border">
                                <div className="panel-heading">
                                    <h5 className="panel-title">Aktifitas Investasi</h5>
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tr>
                                                <td>Pembelian Mesin Baru</td>
                                                <td><b>15,000,000</b></td>
                                            </tr>
                                            <tr>
                                                <td>Penyewaan Kendaraan Operasional akuisisi</td>
                                                <td><b>13,000,000</b></td>
                                            </tr>
                                            <tr>
                                                <td colspan="2"><i className="icon-minus"></i></td>
                                            </tr>
                                            <tr>
                                                <td><b>Kas untuk Aktifitas Investasi</b></td>
                                                <td><b className="fs14 text-primary">2,000,000</b></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="panel panel-border">
                                <div className="panel-heading">
                                    <h5 className="panel-title">Aktifitas Pendanaan</h5>
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tr>
                                                <td>Penambahan Modal</td>
                                                <td><b>10,000,000</b></td>
                                            </tr>
                                            <tr>
                                                <td>Pengembalian Hutang</td>
                                                <td><b>20,000,000</b></td>
                                            </tr>
                                            <tr>
                                                <td colspan="2"><i className="icon-minus"></i></td>
                                            </tr>
                                            <tr>
                                                <td><b>Kas untuk Aktifitas Pendanaan</b></td>
                                                <td><b className="fs14 text-primary">10,000,000</b></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-border">
                                <div className="panel-heading">
                                    <h5 className="panel-title">Kenaikan Kas</h5>
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tr>
                                                <td>Posisi Kas 1 April, 2015</td>
                                                <td><b>126,000,000</b></td>
                                            </tr>
                                            <tr>
                                                <td>Posisi Kas 30 April, 2015</td>
                                                <td><b>75,000,000</b></td>
                                            </tr>
                                            <tr>
                                                <td colspan="2"><i className="icon-minus"></i></td>
                                            </tr>
                                            <tr>
                                                <td><b>Jumlah</b></td>
                                                <td><b className="fs14 text-primary">51,000,000</b></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="help-block">
                        <p>**Note</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dui vitae nisi dignissim egestas. Pellentesque pellentesque sodales dignissim. Etiam rhoncus diam arcu, vitae porttitor purus mollis id.</p>
                    </div>
                </div>
            </section>
        </section>
        
    </section>\
    
</main>
        </div>
        );
    }
}

export default LaporanArusKas;