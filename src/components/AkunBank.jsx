import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AkunBankComponent from './AkunBankComponent';

class AkunBank extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <div>
                { this.props.data.akunbank.map((val, index) => 
                    <AkunBankComponent
                        data={this.props.data}
                        value={val}
                        id={index}
                        handleSetData={this.props.handleSetData}
                    />
                )
                }
                <div className="btn-groups">
                    <div className="right">
                        <a className="link" href="#!">Tambah Akun Bank</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AkunBank;