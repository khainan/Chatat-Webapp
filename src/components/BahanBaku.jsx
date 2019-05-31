import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BahanBakuComponent from './BahanBakuComponent';

class BahanBaku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:["dummy"]
        };
    }


    render() {
        return (
            <div>
                <div>
                    { this.state.data.map(val => 
                        <BahanBakuComponent
                            title={"Bahan Baku"}
                        />
                    )
                    }
                </div>
            </div>
        );
    }
}

export default BahanBaku;