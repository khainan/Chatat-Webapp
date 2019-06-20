import React, { Component } from "react";

import PiutangComponent from './PiutangComponent';

class Piutang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPiutang:
                [{
                    costumer:null,
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
        
        let dataPiutang = this.state.dataPiutang;
        
        dataPiutang[index][prefix] = value;
        this.setState({
            dataPiutang: dataPiutang
        },()=> this.props.handleSetData("piutang" , dataPiutang))
    }

    addData(){
        let dataPiutang = this.state.dataPiutang;
        let data = {
            costumer:null,
            nominal: null
        }

        dataPiutang.push(data);

        this.setState({
            dataPiutang:dataPiutang
        },()=> this.props.handleSetData("piutang" , dataPiutang))
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
        let dataPiutang = this.state.dataPiutang;

        if(dataPiutang.length > 1){
            dataPiutang.splice(value, 1);
        
            this.setState({
                dataPiutang:dataPiutang
            },()=> this.refreshPage()
            ,()=> this.props.handleSetData("piutang" , dataPiutang))
        }
    }

    componentDidMount(){
        if(this.props.data){
            this.state.dataPiutang = this.props.data;
            this.setState({
                dataPiutang:this.state.dataPiutang
            })
        }
    }



    render() {
        return (
            <div>
                <div>
                    { this.state.ready && this.state.dataPiutang.map((val, index) => 
                        <PiutangComponent
                            title={"Piutang"}
                            value={val}
                            id={index}
                            handleData={this.handleData}
                            deleteData={this.deleteData}
                        />
                    )
                    }
                    <div className="btn-groups">
                        <div className="right">
                            <a className="link" onClick={this.addData} >Tambah Piutang</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Piutang;