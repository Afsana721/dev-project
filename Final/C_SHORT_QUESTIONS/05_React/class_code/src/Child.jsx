import React from 'react'


class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newName = event.target.value;
    this.props.onChange(newName);
  }

  render(){
    return (
      <>
        <input
          type="text"
          placeholder="Please Enter Your Name"
          onChange={this.handleChange}
        />
      </>
    );
  }
}




// export default Child;
//   render(){
//     return (
//         <>
//             <input type="text" placeholder="Please Enter Your Name" onChange={this.handlechange} />
//         </>
//     )
//   }
// } 


// class Child extends React.Component {
//   render(){
//     return (
//         <>
//             <input type="text" placeholder="Please Enter Your Name"/>
//         </>
//     )
//   }
// } 

export default Child