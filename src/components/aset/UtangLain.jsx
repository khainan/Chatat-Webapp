import React, { Component } from "react";

import UtangLainComponent from './UtangLainComponent';

class UtangLain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUtangLain:
                [{
                    customer:null,
                    nominal: null
                }]
        };
        this.handleData = this.handleData.bind(this);
        this.addData = this.addData.bind(this);
    }

    handleData(prefix, index, value){
        
        let dataUtangLain = this.state.dataUtangLain;
        
        dataUtangLain[index][prefix] = value;
        this.setState({
            dataUtangLain: dataUtangLain
        },()=> this.props.handleSetData("utang lain" , dataUtangLain))
    }

    addData(){
        let dataUtangLain = this.state.dataUtangLain;
        let data = {
            customer:null,
            nominal: null
        }

        dataUtangLain.push(data);

        this.setState({
            dataUtangLain:dataUtangLain
        })
    }

    componentDidMount(){
        if(this.props.data){
            this.state.dataUtangLain = this.props.data;
            this.setState({
                dataUtangLain:this.state.dataUtangLain
            })
        }
    }



    render() {
        return (
            <div>
                <div>
                    { this.state.dataUtangLain.map((val, index) => 
                        <UtangLainComponent
                            title={"Utang Lain2"}
                            value={val}
                            id={index}
                            handleData={this.handleData}
                        />
                    )
                    }
                    <div className="btn-groups">
                        <div className="right">
                            <a className="link" onClick={this.addData} >Tambah Utang Lain</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UtangLain;