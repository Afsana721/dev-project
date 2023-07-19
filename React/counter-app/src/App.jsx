import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // establish a state variable called 'count iwth a initial
  // starting value of 296
  //Machanics of establishing any state variable
  const [count, setCount] = useState(296)

  //function that update teh state by incremeting /decrementing
  // the count value
  //the default value of incr (if nothing is given to it) is set to 1

  const updateCount = (incr = 1) => {
    setCount((d) => {
  // returning updated value of the state variable
      return d  + incr
      
    })
  }

  return (
    <>
      <h1>Jon's Birthday Countdown</h1>
      <h1>(days till his birthday)</h1>
       
      <div className="card">
        <button onClick={() => updateCount(-1)}>
        Days till Jon's birthday are {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
