import React, {Component} from 'react';
import './App.css';

class Counter extends Component{
    
    constructor(props){
        super(props)
       
        this.state = {count : 0};
        this.increas = this.increas.bind(this);
        this.decrease = this.decrease.bind(this);

    }

     increas() {
        const newCount = this.state.count + 1;
        this.setState({count : newCount})
     }
    decrease() {
        const newCount = this.state.count - 1;
        this.setState({count : newCount});
    }
    render(){
        return(
            <div className='main-counter'>
            <div className='counter'>
                <h2>Counter</h2>
                <p> Counter : {this.state.count}</p>
                <button onClick={this.increas}>Increasing</button>
                <button onClick={this.decrease}>Decreasing</button>
            </div>
            </div>
        )
    }
}






export default Counter;