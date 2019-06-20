import React, { Component } from "react";
import axios from 'axios';

class SettingUsaha extends Component {
    state = {
        namaUsaha: '',
        jenisUsaha: '',
        kota: ''
    };


    submitUsaha = (e) => {
        e.preventDefault()
        const {namaUsaha, jenisUsaha, kota} = this.state;

        const token = window.localStorage.getItem("__chatat_token__")
        const headers =  {"Authorization": "Bearer chatatID498327b5-b36d-48cc-82ef-975f13658eb0","content-type": "application/json", "content-hash": token}
        
        const data = {
                "nama_usaha":  namaUsaha,
                "jenis_usaha": jenisUsaha,
                "kota":	  kota
        }

        axios({
            method: "PATCH",
            url: `https://azaradigital.com/_devservice/sysFront/costumerprofile/updatenamausaha`,
            data,
            headers
        }).then(response =>  {
            response.data.message && this.props.onNotify("success", response.data.message);
            this.props.history.replace("/");
        })
        .catch(error => error.response.data.message && this.props.onNotify("error", error.response.data.message));
        
    }

    

    render() {
        return (
            <main id="main">
    
    <section className="main-login">
        <div className="logo"></div>
        <div className="main-login-bg">
            <div className="thumb">
                
            </div>
            <footer>
                <div className="footer-content">
                    © chatat 2019. All rights reserved.
                </div>
            </footer>
        </div>
        <div className="main-login-content">
            <div className="content">
                <div className="content-inner">
                    <form>
                        <div className="main-title">
                            <h4 className="title">Data<br/>perusahaan</h4>
                        </div>
                        <div className="login-content-section">
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="circle-icon icon-briefcase"></i>
                                    </span>
                                    <div className="form-input">
                                        <label className="form-label">Nama usaha</label>
                                        <input className="form-control" onChange={(e) => this.setState({namaUsaha: e.target.value})}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="circle-icon icon-layers"></i>
                                    </span>
                                    <div className="form-input">
                                        <label className="form-label">Jenis usaha</label>
                                        <select className="form-control" onChange={(e) => this.setState({jenisUsaha: e.target.value.toLowerCase()})}>
                                            <option>--</option>
                                            <option>Ritel</option>
                                            <option>Jasa</option>
                                            <option>Produksi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="circle-icon icon-home"></i>
                                    </span>
                                    <div className="form-input">
                                        <label className="form-label">Lokasi usaha</label>
                                        <input className="form-control" onChange={(e) => this.setState({kota: e.target.value})}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="login-content-submit">
                            <button className="btn btn-block btn-primary" type="submit" onClick={this.submitUsaha}>Simpan data</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
</main>
        );
    }
}

export default SettingUsaha;