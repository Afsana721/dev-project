//from react version- 17 no need to import React from ' react' library
//import React from 'react';    

//import Navbar component
import Navbar from "./Navbar";
import Home from "./Home";

function App() {

  
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <Navbar />
      <div className="content">
        <h1><Home /></h1>
        
      </div>
    
    </div>
  );
}





export default App;
