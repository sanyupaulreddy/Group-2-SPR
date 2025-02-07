import React, { Component } from 'react' 

class CBCPropEX1 extends Component{ 
    render(){ 
        console.log(this)
        return(
        <div>CBCPropEx1
        <div>
            <h1>{this.props.username}</h1>
            <h1>{this.props.age}</h1>
            <h3>{this.props.hobbies.map(hobby=>{
                return<li>{hobby}</li>
        }
            )}</h3>
            <h3>{this.props.address.city}</h3>
            <h3>{this.props.address.area}</h3>

        </div> 
        <button onClick={this.props.sendFun}>Submit</button>
        </div>
        )
}
}

export default CBCPropEX1;