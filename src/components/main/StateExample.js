import React, { Component } from 'react'

export default class StateExample extends Component {
    constructor(props){
        super();
        this.state={
            name:"Avani",
            contact:"234567",
        };
    }

    changeName=()=>{
        this.setState({name:"Bhavna", contact:"765432"});
    }
    render() {
        return (
            <div class="jumbotron">
            <h1 class="display-4">Welcome {this.state.name} To State Component</h1>
        <p class="lead">{this.state.contact}This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4"/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <button class="btn btn-primary btn-lg" onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}
