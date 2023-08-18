import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [days, setDays] = useState(303)

    const updateCount = (incr = 1) => {
    setCount((d) => {
  // returning updated value of the state variable
      return d  + incr
      
    })
  }

  //render the App
  return (
    <div className='App'>
      <h1>Birthday Part Count Down App</h1>
      <div className='card'>
        <buttom onClick= {() => setDays(days => days -1)}>
          Days remaining until Jon's Birthday are: {days}
        </buttom>
      </div>
    </div>
  )
}

export default App
