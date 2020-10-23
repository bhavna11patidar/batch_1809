import React, {useState} from 'react'


export default function Hooks() {
    const [name, setName]=useState("");
    const [count, setCount]=useState(0);
    const [count2, setCount2]=useState(0);
    const setCounterValue=()=>{
        setCount2(count2+1);
    }


    const [email, setEmail]=useState("");
    const [newEmail, changeEmail]=useState("");

    return (
        <div className="mt-5 text-center">
            <h1 className="text-center">Hello {name}</h1> 
            <button onClick={()=>setName("Bhavna")}>Set Name</button>
            <h2>Count = {count}</h2>
            <button onClick={()=>setCount(count+1)}>Counter</button>

            <h2>Count2 = {count2}</h2>
            <button onClick={setCounterValue}>Counter</button>
            <br></br>
            <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)}/>
            <br></br><button onClick={()=>changeEmail(email)}>Click To Change Email </button>
            <h2>Email: {newEmail} </h2>
        </div>
    )
}
