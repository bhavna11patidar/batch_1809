import React, { Component } from 'react'
import Child1 from './Child1';
export default class Parent1 extends Component {
    render() {
        return (
            <div>
                <h2 className="text-info">Inside Parent1 Component</h2>
                <h2>Title {this.props.title}</h2>
                <h3>Name {this.props.name}</h3>
                <Child1></Child1>
            </div>
        )
    }
}
