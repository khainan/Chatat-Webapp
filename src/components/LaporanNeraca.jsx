import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class LaporanNeraca extends Component {
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
            <section className="section-header">
                <div className="container">
                    <div className="section-top">
                        <ul className="breadcrumb">
                            <li><a href="index.html">Dashboard</a></li>
                            <li><a href="#!">Neraca</a></li>
                        </ul>
                        <div id="current-date"></div>
                    </div>
                    <div className="section-title">
                        <div className="page-title">
                            <div className="main-title">
                                <h4 className="title">Neraca</h4>
                            </div>
                        </div>
                        <div className="cash-in text-right">
                            <div className="cash-in-label">
                                <span className="text-label">Sisa Kas</span>
                                <div className="cash-in-value">Rp 1.000.000</div>
                            </div>
                            <div className="cash-in-icon">
                                <a className="btn btn-circle btn-primary btn-sm" href="#!"><i className="icon-email"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="panel panel-border">
                                <div className="panel-heading">
                                    <h5 className="panel-title">Assets</h5>
                                </div>
                                <div className="panel-body">
                                    <p className="text-label">Current assets</p>
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tr>
                                                <td>Cash</td>
                                                <td><b>2,100</b></td>
                                            </tr>
                                            <tr>
                                                <td>Potty Cash</td>
                                                <td><b>100</b></td>
                                            </tr>
                                            <tr>
                                                <td>Temporary Investments</td>
                                                <td><b>10,000</b></td>
                                            </tr>
                                            <tr>
                                                <td>Accounts receivable - net</td>
                                                <td><b>40,500</b></td>
                                            </tr>
                                            <tr>
                                                <td>Inventory</td>
                                                <td><b>31,000</b></td>
                                            </tr>
                                            <tr>
                                                <td>Supplies</td>
                                                <td><b>3,800</b></td>
                                            </tr>
                                            <tr>
                                                <td>Prepaid Insurance</td>
                                                <td><b>1,500</b></td>
                                            </tr>
                                            <tr>
                                                <td><b>Total current assets</b></td>
                                                <td><b className="fs14 text-primary">89,000</b></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tr>
                                                <td>Investments</td>
                                                <td><b className="fs14 text-primary">36,000</b></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <p className="text-label">Property, plant & equipment</p>
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tr>
                                                <td>Land</td>
                                                <td><b>5,500</b></td>
                                            </tr>
                                            <tr>
                                                <td>Land improvements</td>
                                                <td><b>5,500</b></td>
                                            </tr>
                                            <tr>
                                                <td>Buildings</td>
                                                <td><b>180,000</b></td>
                                            </tr>
                                            <tr>
                                                <td>Equipments</td>
                                                <td><b>201,000</b></td>
                                            </tr>
                                            <tr>
                                                <td><b>Prop, paint & equip - net</b></td>
                                                <td><b className="fs14 text-primary">337,000</b></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <p className="text-label">Intangible assets</p>
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tr>
                                                <td>Goodwill</td>
                                                <td><b>105,000</b></td>
                                            </tr>
                                            <tr>
                                                <td>Trade names</td>
                                                <td><b>200,000</b></td>
                                            </tr>
                                            <tr>
                                                <td><b>Total intangible assets</b></td>
                                                <td><b className="fs14 text-primary">305,000</b></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm m0">
                                            <tr>
                                                <td>Other assets</td>
                                                <td><b className="fs14 text-primary">3,000</b></td>
                                            </tr>
                                            <tr>
                                                <td><b>Total assets</b></td>
                                                <td><b className="fs14 text-primary">$ 770,000</b></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="panel panel-border">
                                <div className="panel-heading">
                                    <h5 className="panel-title">Liabilities</h5>
                                </div>
                                <div className="panel-body">
                                    <p className="text-label">Current Liabilities</p>
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm">
                                            <tr>
                                                <td>Notes Payable</td>
                                                <td><b>5,000</b></td>
                                            </tr>
                                            <tr>
                                                <td>Accounts payable</td>
                                                <td><b>35,900</b></td>
                                            </tr>
                                            <tr>
                                                <td>Wages payable</td>
                                                <td><b>8,500</b></td>
                                            </tr>
                                            <tr>
                                                <td>Interest payable</td>
                                                <td><b>2,900</b></td>
                                            </tr>
                                            <tr>
                                                <td>Taxes payable</td>
                                                <td><b>6,100</b></td>
                                            </tr>
                                            <tr>
                                                <td>Waranty liability</td>
                                                <td><b>1,100</b></td>
                                            </tr>
                                            <tr>
                                                <td>Unearned revenues</td>
                                                <td><b>1,500</b></td>
                                            </tr>
                                            <tr>
                                                <td><b>Total current liabilities</b></td>
                                                <td><b className="fs14 text-primary">61,000</b></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <p className="text-label">Long-term liabilities</p>
                                    <div className="table-responsive table-wrapper">
                                        <table className="table list-table table-sm m0">
                                            <tr>
                                                <td>Notes Payable</td>
                                                <td><b>20,000</b></td>
                                            </tr>
                                            <tr>
                                                <td>Bonds payable</td>
                                                <td><b>400,000</b></td>
                                            </tr>
                                            <tr>
                                                <td><b>Total long-term liabilities</b></td>
                                                <td><b className="fs14 text-primary">420,000</b></td>
                                            </tr>
                                            <tr>
                                                <td><b>Total liabilities</b></td>
                                                <td><b className="fs14 text-primary">481,000</b></td>
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
        
    </section>
    
</main>
        </div>
        );
    }
}

export default LaporanNeraca;