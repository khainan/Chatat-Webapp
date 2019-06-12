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
                }]
        };
        this.handleData = this.handleData.bind(this);
        this.addData = this.addData.bind(this);
    }

    handleData(prefix, index, value){
        
        let dataUtangUsaha = this.state.dataUtangUsaha;
        
        dataUtangUsaha[index][prefix] = value;
        this.setState({
            dataUtangUsaha: dataUtangUsaha
        },()=> this.props.handleSetData("utangusaha" , dataUtangUsaha))
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
        })
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
                    { this.state.dataUtangUsaha.map((val, index) => 
                        <UtangUsahaComponent
                            title={"Utang Usaha"}
                            value={val}
                            id={index}
                            handleData={this.handleData}
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