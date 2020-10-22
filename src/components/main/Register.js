import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props){
        super();
        this.state={
            name:"",
            email:"",
            contact:"",
            data:[],
        }
      //  this.abc=this.abc.bind(this);
    }

    onHandleChange=(e)=>{
        //console.log(e.target.name +":" + e.target.value);
        this.setState({[e.target.name]:e.target.value});
    }

    abc(a,b){
        alert(a+b);
    }

    register=()=>{
        //console.log(this.state);
        let newData=[...this.state.data, {name:this.state.name, email:this.state.email, contact:this.state.contact}];
        this.setState({data:newData, name:"",email:"",contact:""});
    }

    render() {
       // console.log(this.state.data);
       const {name, email, contact, data}=this.state;
      // console.log(data);
        return (
            <div className="container mt-5">
                <h1 className="text-center text-info mb-5">Registration</h1>
                <div className="row">
                    <div className="col-md-5">
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={this.onHandleChange}/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" className="form-control" name="email" value={email} onChange={this.onHandleChange}/>
                </div>
                <div className="form-group">
                    <label>Contact:</label>
                    <input type="text" className="form-control" name="contact"value={contact}  onChange={this.onHandleChange}/>
                </div>
                <div className="text-center">
                    <button type="button" className="btn btn-info" onClick={this.register}>Register</button>
                    <button onClick={this.abc.bind(this,2,4)}>Abc</button>
                </div>
                </div>
                <div className="col-md-7">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((d,i)=>(
                            <tr key={i}>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.contact}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        )
    }
}
