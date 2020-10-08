import React, { Component } from 'react'
import { Alert } from 'reactstrap';

export default class Abc extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to First Component</h1>
                <Alert color="primary">
                    This is a primary alert — check it out!
                </Alert>
                <div className="alert alert-primary">
                     This is a primary alert — check it out!
                </div>
            </div>
            
        )
    }
}
