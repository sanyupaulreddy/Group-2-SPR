import React, { Component } from 'react'

class CBCStateEx extends Component{
    constructor(){
        super();
        // this.state=null;
        this.state={
            university:"MRU",
            count:0
        };
    }
    // changeName=()=>{
    //     this.setState({university:"MallaReddy University"})
    // }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
    reset=()=>{
        this.setState({count:0})
    }
 render(){
    console.log(this);
    return(
        <div>CBCStateEx
            {/* <h1>{this.state.university}</h1>
            <button onClick={this.changeName}>Change name</button> */}

            <h1>{this.state.count}</h1>
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        </div>
    );
 }
}
export default CBCStateEx;