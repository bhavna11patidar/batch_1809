import React, {useState} from 'react'

export default function RegisterWithHooks() {


    const initialFormData={name:"", email:"", mobile:""};
    const [formData, setFormData]=useState(initialFormData);
    const onHandleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    const register=()=>{
        console.log(formData);
    }
    return (
        <div className="container mt-5">
            <div className="form-group">
                <label>Name:</label>
                <input className="form-control" value={formData.name} type="text" name="name" onChange={onHandleChange}/>
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input className="form-control" type="text" name="email" onChange={onHandleChange}/>
            </div>
            <div className="form-group">
                <label>Mobile:</label>
                <input className="form-control" type="text" name="mobile" onChange={onHandleChange}/>
            </div>
            <button className="btn btn-info" onClick={register}>Register</button>
        </div>
    )
}
