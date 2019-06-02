import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PiutangComponent from './PiutangComponent';

class Piutang extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <div>
                    { this.props.data.map(val => 
                        <PiutangComponent
                            title={"Piutang"}
                        />
                    )
                    }
                    <div className="btn-groups">
                        <div className="right">
                            <a className="link">Tambah Piutang</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Piutang;