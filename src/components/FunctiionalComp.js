import React from 'react'

export default function FunctiionalComp(props) {
    return (
        <div>
          <h1>Functional Component</h1>
            <h2>Title: {props.title}</h2>  
    <h2>Name: {props.name}</h2>
        </div>
    )
}
