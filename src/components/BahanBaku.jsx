import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BahanBakuComponent from './BahanBakuComponent';

class BahanBaku extends Component {
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
                        <BahanBakuComponent
                            title={"Bahan Baku"}
                        />
                    )
                    }
                    <div className="btn-groups">
                        <div className="right">
                            <a className="link">Tambah Bahan Baku</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BahanBaku;