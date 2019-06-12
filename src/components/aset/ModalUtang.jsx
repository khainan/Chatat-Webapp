import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ModalUtangComponent from './ModalUtangComponent';

class ModalUtang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPiutang:
                [{
                    costumer:null,
                    nominal: null
                }]
        };
        this.handleData = this.handleData.bind(this);
        this.addData = this.addData.bind(this);
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
        })
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
                    { this.state.dataPiutang.map((val, index) => 
                        <ModalUtangComponent
                            title={"Utang Usaha"}
                            value={val}
                            id={index}
                            handleData={this.handleData}
                        />
                    )
                    }
                    <div className="btn-groups">
                        <div className="right">
                            <a className="link" onClick={this.addData} >Tambah Modal</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalUtang;