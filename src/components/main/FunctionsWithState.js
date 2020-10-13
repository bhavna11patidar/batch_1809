import React, { Component } from 'react'

export default class FunctionsWithState extends Component {
    constructor(props){
        super();
        this.state={
            name:"",
            email:"",
            clsname:"",
        }
    }

    test=()=>{
      //  alert(1)
      this.setState({clsname:"text-success"})
    }

    test1(){
        //alert(2);
        this.setState({clsname:"text-danger"})
    }

    abc(a,b){
       // alert(a+b);
       this.setState({clsname:"text-warning"})
    }

    abc1=(a,b)=>{
        alert(a+b);
    }

    changeData=()=>{
        this.setState({name:"Bhavna", email:"Bhavna@gmail.com"});
    }
    render() {
        const {name,email, clsname}=this.state;
        return (
            <div>
                <button onClick={this.test} className="btn btn-info">Test Function</button>
                <button onClick={this.test1.bind(this)} className="btn btn-info">Test1 Function</button>
                <button onClick={this.abc.bind(this,10,12)} className="btn btn-info">Abc Function</button>
                <button onClick={()=>this.abc1(10,30)} className="btn btn-info">Abc1 Function</button>
                <button onClick={this.changeData} className="btn btn-info">Change Data</button>
                <p>Name: {name}</p>
                <p>Email: {email}</p> 
                <p className={clsname}>Hello World</p> 
            </div>
        )
    }
}
