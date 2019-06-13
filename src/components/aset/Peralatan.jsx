import React, { Component } from "react";

import PeralatanComponent from './PeralatanComponent';

class Peralatan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPeralatan:
                [{
                    peralatan:null,
                    nominal: null,
                    masapakai: null
                }],
            dataKendaraan:
                [{
                    kendaraan:null,
                    nominal: null,
                    masapakai: null
                }],
            ready:true
        };
        this.handleData = this.handleData.bind(this);
        this.addData = this.addData.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
    }

    handleData(prefix, prefix2, index, value){
        
        let peralatan = this.state.dataPeralatan;
        let kendaraan = this.state.dataKendaraan;
        
        if(prefix === "peralatan"){
            peralatan[index][prefix2] = value;
            this.setState({
                dataPeralatan:peralatan
            },()=> this.props.handleSetData("peralatan" , peralatan) )
        }
        else{
            kendaraan[index][prefix2] = value;
            this.setState({
                dataKendaraan: kendaraan
            },()=> this.props.handleSetData("kendaraan" , kendaraan) )
        }
    }

    addData(prefix){
        let peralatan = this.state.dataPeralatan;
        let kendaraan = this.state.dataKendaraan;
        let data = 
        prefix === "peralatan" ? {
            peralatan:null,
            nominal:null,
            masapakai:null
        }
        :
        {
            kendaraan:null,
            nominal:null,
            masapakai:null
        }

        if(prefix === "peralatan"){
            peralatan.push(data)
            this.setState({
                dataPeralatan:peralatan
            },()=> this.props.handleSetData("peralatan" , peralatan))
        }
        else{
            kendaraan.push(data)
            this.setState({
                dataKendaraan:kendaraan
            },()=> this.props.handleSetData("kendaraan" , kendaraan))
        }
    }

    refreshPage(){
        this.setState({
            ready:false
        })
        setTimeout(() => {
            this.setState({ready:true})    
        })
    }

    deleteData(prefix , value){
        let dataPeralatan = this.state.dataPeralatan;
        let dataKendaraan = this.state.dataKendaraan;

        if(prefix === "peralatan"){
            if(dataPeralatan.length > 1){
                dataPeralatan.splice(value, 1);
            
                this.setState({
                    dataPeralatan:dataPeralatan
                },()=> this.refreshPage()
                ,()=> this.props.handleSetData("peralatan" , dataPeralatan))
            }
        }
        else{
            if(dataKendaraan.length > 1){
                dataKendaraan.splice(value, 1);
            
                this.setState({
                    dataKendaraan:dataKendaraan
                },()=> this.refreshPage()
                ,()=> this.props.handleSetData("kendaraan" , dataKendaraan))
            }
        }
    }

    componentDidMount(){
        if(this.props.dataKendaraan){
            this.state.dataKendaraan = this.props.dataKendaraan;
            this.setState({
                dataKendaraan:this.state.dataKendaraan
            })
        }
        
        if(this.props.dataPeralatan){
            this.state.dataPeralatan = this.props.dataPeralatan;
            this.setState({
                dataPeralatan:this.state.dataPeralatan
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    { this.state.ready && this.state.dataPeralatan.map((val,index) => 
                        <PeralatanComponent
                            title={"Peralatan"}
                            value={val}
                            id={index}
                            handleData={this.handleData}
                            deleteData={this.deleteData}
                        />
                    )
                    }
                    <div className="btn-groups">
                        <div className="right">
                            <a className="link" onClick={()=> this.addData("peralatan")}>Tambah Peralatan</a>
                        </div>
                    </div>
                </div>
                <div>
                    { this.state.ready && this.state.dataKendaraan.map((val,index) => 
                        <PeralatanComponent
                            title={"Kendaraan"}
                            value={val}
                            id={index}
                            handleData={this.handleData}
                            deleteData={this.deleteData}
                        />
                    )
                    }
                    <div className="btn-groups">
                        <div className="right">
                            <a className="link" onClick={()=> this.addData("kendaraan")} >Tambah Kendaraan</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Peralatan;