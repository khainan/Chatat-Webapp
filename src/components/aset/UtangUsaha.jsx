import React, { Component } from "react";

import UtangUsahaComponent from './UtangUsahaComponent';

class UtangUsaha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUtangUsaha:
                [{
                    customer:null,
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
        
        let dataUtangUsaha = this.state.dataUtangUsaha;
        
        dataUtangUsaha[index][prefix] = value;
        this.setState({
            dataUtangUsaha: dataUtangUsaha
        },()=> this.props.handleSetData("utang usaha" , dataUtangUsaha))
    }

    addData(){
        let dataUtangUsaha = this.state.dataUtangUsaha;
        let data = {
            custumer:null,
            nominal: null
        }

        dataUtangUsaha.push(data);

        this.setState({
            dataUtangUsaha:dataUtangUsaha
        },()=> this.props.handleSetData("utang usaha" , dataUtangUsaha))
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
        let dataUtangUsaha = this.state.dataUtangUsaha;

        if(dataUtangUsaha.length > 1){
            dataUtangUsaha.splice(value, 1);
        
            this.setState({
                dataUtangUsaha:dataUtangUsaha
            },()=> this.refreshPage()
            ,()=> this.props.handleSetData("utang usaha" , dataUtangUsaha))
        }
    }

    componentDidMount(){
        if(this.props.data){
            this.state.dataUtangUsaha = this.props.data;
            this.setState({
                dataUtangUsaha:this.state.dataUtangUsaha
            })
        }
    }



    render() {
        return (
            <div>
                <div>
                    { this.state.ready && this.state.dataUtangUsaha.map((val, index) => 
                        <UtangUsahaComponent
                            title={"Utang Usaha"}
                            value={val}
                            id={index}
                            handleData={this.handleData}
                            deleteData={this.deleteData}
                        />
                    )
                    }
                    <div className="btn-groups">
                        <div className="right">
                            <a className="link" onClick={this.addData} >Tambah Utang Usaha</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UtangUsaha;