import { Component } from "react";

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            Counter:0,
        }
    }
    // allow one parent html element component
    render() {
        return(<div>                                    
        <h1>Count value is:{this.state.Counter} </h1>
        <button>Click</button>
        </div> )
    }
}

export default Counter;