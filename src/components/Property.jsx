import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropertyComponent from './PropertyComponent';

class Property extends Component {
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
                        <PropertyComponent
                            title={"Property"}
                            handleSetData={this.props.handleSetData}
                        />
                    )
                    }
                    <div className="btn-groups">
                        <div className="right">
                            <a className="link">Tambah Property</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Property;