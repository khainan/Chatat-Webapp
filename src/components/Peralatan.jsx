import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PeralatanComponent from './PeralatanComponent';

class Peralatan extends Component {
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
                        <PeralatanComponent
                            title={"Peralatan"}
                        />
                    )
                    }
                </div>
                <div>
                    { this.state.data.map(val => 
                        <PeralatanComponent
                            title={"Kendaraan"}
                        />
                    )
                    }
                </div>
            </div>
        );
    }
}

export default Peralatan;