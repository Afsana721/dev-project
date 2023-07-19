//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Garfield from './components/Garfield'

function App() {
 const feelingsArray = ['Hungry', 'Determined'];

  return (
    
      <div>
      <Garfield feelings = {feelingsArray} />
      </div>
  )
}

export default App
