import React, { Component } from "react";

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
                }],
                ready:true
        };
        this.handleData = this.handleData.bind(this);
        this.addData = this.addData.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
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
        },()=> this.props.handleSetData("bahan baku" , dataBahanBaku))
    }

    refreshPage(){
        this.setState({
            ready:false
        })
        setTimeout(() => {
            this.setState({ready:true})    
        })
    }

    deleteData(value){
        let dataBahanBaku = this.state.dataBahanBaku;

        if(dataBahanBaku.length > 1){
            dataBahanBaku.splice(value, 1);
        
            this.setState({
                dataBahanBaku:dataBahanBaku
            },()=> this.refreshPage()
            ,()=> this.props.handleSetData("bahan baku" , dataBahanBaku))
        }
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
                    { this.state.ready && this.state.dataBahanBaku.map((val, index) => 
                        <BahanBakuComponent
                            title={"Bahan Baku"}
                            value={val}
                            id={index}
                            handleData={this.handleData}
                            deleteData={this.deleteData}
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