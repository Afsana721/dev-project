import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//get App.js file to get components
ReactDOM.render(
 <App />,
  document.getElementById('root')
);


////use CSS inside javascript & get them by ReactDom

// const styles = {
//           backgroundColor: "purple",
//           color : "white",
//           textAlign: "center",
//           padding: "15px",
//           fontSize: "3rem"
//       }

//use CSS inside javascript & get them by ReactDom
// ReactDOM.render(
//   <div>
//     {/* <h1 style={styles}>Todo App</h1>      stylesheet css variable inside ReactDOM  */}
//     {/* <h1 style={{color:"brown", fontSize:"3rem"}}>Todo App</h1> */}

//     <h1 className="headingStyle">Todo App</h1>
//     <h3>{todoTitle}</h3>
//     <p>{todoDesc}</p>
//       <p>{currentTime}</p>
//   </div>,
//   document.getElementById('root')
// );


