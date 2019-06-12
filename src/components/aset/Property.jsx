import React, { Component } from "react";

import PropertyComponent from './PropertyComponent';

class Property extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProperty:
                [{
                    properti:null,
                    nominal: null,
                    status: null,
                    masapakai:null
                }]
        };
        this.handleData = this.handleData.bind(this);
        this.addData = this.addData.bind(this);
    }

    handleData(prefix, index, value){
        
        let dataProperty = this.state.dataProperty;
        
        dataProperty[index][prefix] = value;
        this.setState({
            dataProperty: dataProperty
        },()=> this.props.handleSetData("property" , dataProperty))
    }

    addData(){
        let dataProperty = this.state.dataProperty;
        let data = {
            properti:null,
            nominal: null,
            status: null,
            masapakai:null
        }

        dataProperty.push(data);

        this.setState({
            dataProperty:dataProperty
        })
    }

    componentDidMount(){
        if(this.props.data){
            this.state.dataProperty = this.props.data;
            this.setState({
                dataProperty:this.state.dataProperty
            })
        }
    }


    render() {
        return (
            <div>
                <div>
                    { this.state.dataProperty.map((val, index) => 
                        <PropertyComponent
                            title={"Property"}
                            handleData={this.handleData}
                            value={val}
                            id={index}
                        />
                    )
                    }
                    <div className="btn-groups">
                        <div className="right">
                            <a className="link" onClick={this.addData} >Tambah Property</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Property;