import React, { Component } from 'react';
import HocCounter from './HocCounter';

class CounterComp1 extends Component {
    render() {
        const {count,onButtonClick}=this.props;
        return (
            <div>   
                <h1>Counter: {count}</h1>
                <button onClick={onButtonClick}>Click</button> 
            </div>
        )
    }
}

export default HocCounter(CounterComp1, 1);

