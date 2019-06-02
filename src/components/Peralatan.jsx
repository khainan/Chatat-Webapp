import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PeralatanComponent from './PeralatanComponent';

class Peralatan extends Component {
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
                        <PeralatanComponent
                            title={"Peralatan"}
                        />
                    )
                    }
                    <div className="btn-groups">
                        <div className="right">
                            <a className="link" href="#!">Tambah Peralatan</a>
                        </div>
                    </div>
                </div>
                <div>
                    { this.props.data2.map(val => 
                        <PeralatanComponent
                            title={"Kendaraan"}
                        />
                    )
                    }
                    <div className="btn-groups">
                        <div className="right">
                            <a className="link" href="#!">Tambah Kendaraan</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Peralatan;