import React, { Component } from "react";

import ModalUtangComponent from './ModalUtangComponent';

class ModalUtang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataModalUtang:
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
        
        let dataModalUtang = this.state.dataModalUtang;
        
        dataModalUtang[index][prefix] = value;
        this.setState({
            dataModalUtang: dataModalUtang
        },()=> this.props.handleSetData("modal utang" , dataModalUtang))
    }

    addData(){
        let dataModalUtang = this.state.dataModalUtang;
        let data = {
            costumer:null,
            nominal: null
        }

        dataModalUtang.push(data);

        this.setState({
            dataModalUtang:dataModalUtang
        },()=> this.props.handleSetData("modal utang" , dataModalUtang))
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
        let dataModalUtang = this.state.dataModalUtang;

        if(dataModalUtang.length > 1){
            dataModalUtang.splice(value, 1);
        
            this.setState({
                dataModalUtang:dataModalUtang
            },()=> this.refreshPage()
            ,()=> this.props.handleSetData("modal utang" , dataModalUtang))
        }
    }

    componentDidMount(){
        if(this.props.data){
            this.state.dataModalUtang = this.props.data;
            this.setState({
                dataModalUtang:this.state.dataModalUtang
            })
        }
    }



    render() {
        return (
            <div>
                <div>
                    { this.state.ready && this.state.dataModalUtang.map((val, index) => 
                        <ModalUtangComponent
                            title={"Modal Usaha"}
                            value={val}
                            id={index}
                            handleData={this.handleData}
                            deleteData={this.deleteData}
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