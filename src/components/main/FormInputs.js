import React, { Component } from 'react'

export default class FormInputs extends Component {
    constructor(props){
        super();
        this.state={name:"", email:""};
    }

    onHandleChange=(e)=>{
       // console.log(e.target);
       // this.setState({name:e.target.value});
       this.setState({[e.target.name]:e.target.value});
    }

    render() {
        const {name, email}=this.state;
        return (
            <div className="container mt-3">
               <div className="form-group">
                    <label>Name:</label>
                    <input className="form-control" type="text" name="name" onChange={this.onHandleChange}/>
                    <label>Email:</label>
                    <input className="form-control" type="email" name="email" onChange={this.onHandleChange}/>
                    <p>Welcome: {name} Email: {email} </p>
                </div> 
            </div>
        )
    }
}
