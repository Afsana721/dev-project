

import './App.css'
import ColorBox from "./ColorBox";

const colors = [
  "red",
  "green",
  "blue",
  "orange",
  "purple",
  "brown",
  "pink",
  "yellow"
];


function App() {

 

  return (
    <div>
      <ColorBox colors= {colors} /><br/>
      <ColorBox colors= {colors} /><br/>
      <ColorBox colors= {colors} />
    </div>

  )
}

export default App
