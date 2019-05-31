import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AkunBankComponent from './AkunBankComponent';

class AkunBank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:["dummy","dummy","dummy","dummy","dummy"]
        };
    }


    render() {
        return (
            <div>
                { this.state.data.map(val => 
                    <AkunBankComponent/>
                )
                }
            </div>
        );
    }
}

export default AkunBank;