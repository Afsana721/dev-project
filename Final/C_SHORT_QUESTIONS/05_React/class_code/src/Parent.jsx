import React from 'react';
import Child from './Child';

class Parent extends React.Component {

  constructor(props){
    super(props);
    this.state = { name: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newName) {
    this.setState({ name: newName });
  }

  render(){
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <Child onChange={this.handleChange} />
      </div>
    );
  }
}

export default Parent;


















// import React from 'react'
// import Child from './Child'

// class Parent extends React.Component {

//   constructor(props){
//     super(props)
//     this.state = {name: ''}
//     this.handleChange = this.handleChange.bind(this);
//   }
//   //function to update teh name state
//   handleChange(newName) {
//     this.setState({ name:newName});
//   }

//   render(){
//     return (
//       <div>
//         <h1>Hello {this.state.name}</h1>
//         <Child onChange = {this.handleChange} />
//       </div>
//     )
//   }

// } 

// export default Parent