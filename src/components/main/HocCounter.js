import React, { Component } from 'react'



const  HocCounter=(WrapperComponent, Number)=>{
class HocCounter extends Component {
    constructor(props){
        super();
        this.state={
            count:0,
        }
    }
    
    _onButtonClick=()=>{
        this.setState({count:this.state.count+Number});
    }

    render() {
        const {count}=this.state;
        return (
            <div>
               <WrapperComponent onButtonClick={this._onButtonClick} count={count}></WrapperComponent> 
            </div>
        )
    }
}
    return HocCounter;
}

export default HocCounter;