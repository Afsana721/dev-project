import React from 'react'
import './App.css'
import Card from './components/Card';            //imported Card object from source : ./components/Card (file location.)


//create App function with different variable

function App() {
  

  return (
//call card component

    <div>
      <h1 className="headingStyle">Todo App</h1>
      < Card />
      < Card />
      < Card />
    </div>


  )
}

export default App
