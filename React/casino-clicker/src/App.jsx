import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

//set number
  const crazyNumber = 7;

  //function for generate random numbers
    const generateRandomNumber = (maxnum) => {
      return Math.floor(Math.random() *maxnum +1)
    }

  //logic to handle user clcking the button
  const handleClcik = () => {
    let rand = generateRandomNumber(10);
    console.log("the random num is :"+ rand);
  //update the state
    setCount{rand}
  }

  // logic to display the message
  const displayMessage = () => {
    if(count === crazyNumber) {
      return {<h2>You Win!</h2>}
    }else {
      return (
      <button onClick={handleClcik} >
        The number is {count}
      </button>
    )
}
  }

// what is shown on the browser
// create an onClick event and add handleClcik function
  return (
   <>
      <div>
        <h1>Casino Clicker</h1>
        <button onClick={handleClick}>The number is {count}</button>
      </div>
    </> 
  )
}

export default App
