import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BahanBakuComponent from './BahanBakuComponent';

class BahanBaku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataBahanBaku:
                [{
                    bahanbaku:null,
                    unit: null,
                    harga: null,
                    satuan:null,
                    vendor:null
                }]
        };
        this.handleData = this.handleData.bind(this);
        this.addData = this.addData.bind(this);
    }

    handleData(prefix, index, value){
        
        let dataBahanBaku = this.state.dataBahanBaku;
        
        dataBahanBaku[index][prefix] = value;
        this.setState({
            dataBahanBaku: dataBahanBaku
        },()=> this.props.handleSetData("bahan baku" , dataBahanBaku))
    }

    addData(){
        let dataBahanBaku = this.state.dataBahanBaku;
        let data = {
            bahanbaku:null,
            unit: null,
            harga: null,
            satuan:null,
            vendor:null
        }

        dataBahanBaku.push(data);

        this.setState({
            dataBahanBaku:dataBahanBaku
        })
    }

    componentDidMount(){
        if(this.props.data){
            this.state.dataBahanBaku = this.props.data;
            this.setState({
                dataBahanBaku:this.state.dataBahanBaku
            })
        }
    }


    render() {
        return (
            <div>
                <div>
                    { this.state.dataBahanBaku.map((val, index) => 
                        <BahanBakuComponent
                            title={"Bahan Baku"}
                            value={val}
                            id={index}
                            handleData={this.handleData}
                        />
                    )
                    }
                    <div className="btn-groups">
                        <div className="right">
                            <a className="link" onClick={this.addData}>Tambah Bahan Baku</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BahanBaku;