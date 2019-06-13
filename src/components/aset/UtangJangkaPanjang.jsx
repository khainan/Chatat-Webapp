import React, { Component } from "react";

import UtangJangkaPanjangComponent from './UtangJangkaPanjangComponent';

class UtangJangkaPanjang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUtangJangkaPanjang:
                [{
                    bank:null,
                    nominal: null
                }],
            ready:true
        };
        this.handleData = this.handleData.bind(this);
        this.addData = this.addData.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
    }

    handleData(prefix, index, value){
        
        let dataUtangJangkaPanjang = this.state.dataUtangJangkaPanjang;
        
        dataUtangJangkaPanjang[index][prefix] = value;
        this.setState({
            dataUtangJangkaPanjang: dataUtangJangkaPanjang
        },()=> this.props.handleSetData("utang jangka panjang" , dataUtangJangkaPanjang))
    }

    addData(){
        let dataUtangJangkaPanjang = this.state.dataUtangJangkaPanjang;
        let data = {
            bank:null,
            nominal: null
        }

        dataUtangJangkaPanjang.push(data);

        this.setState({
            dataUtangJangkaPanjang:dataUtangJangkaPanjang
        },()=> this.props.handleSetData("utang jangka panjang" , dataUtangJangkaPanjang))
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
        let dataUtangJangkaPanjang = this.state.dataUtangJangkaPanjang;

        if(dataUtangJangkaPanjang.length > 1){
            dataUtangJangkaPanjang.splice(value, 1);
        
            this.setState({
                dataUtangJangkaPanjang:dataUtangJangkaPanjang
            },()=> this.refreshPage()
            ,()=> this.props.handleSetData("utang jangka panjang" , dataUtangJangkaPanjang))
        }
    }

    componentDidMount(){
        if(this.props.data){
            this.state.dataUtangJangkaPanjang = this.props.data;
            this.setState({
                dataUtangJangkaPanjang:this.state.dataUtangJangkaPanjang
            })
        }
    }



    render() {
        return (
            <div>
                <div>
                    { this.state.ready && this.state.dataUtangJangkaPanjang.map((val, index) => 
                        <UtangJangkaPanjangComponent
                            title={"Utang Jangka Panjang"}
                            value={val}
                            id={index}
                            handleData={this.handleData}
                            deleteData={this.deleteData}
                        />
                    )
                    }
                    <div className="btn-groups">
                        <div className="right">
                            <a className="link" onClick={this.addData} >Tambah Utang Jangka Panjang</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UtangJangkaPanjang;