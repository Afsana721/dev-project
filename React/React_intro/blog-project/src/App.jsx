import { useState } from 'react'
import './App.css'

function App() {

  const todoTilte = "Call Family";
  const todoDescription = "House rent going to up. So many are looking for a new affordable home, but  home price is high now. ";
  const date = new Date();
  const dateName = date.getDate();
  const currentyear = date.getFullYear();
  const monthName = date.getMonth();

  //use CSS as javaScript object variable
  const secondHeadStylelll = {
    color: "blue",
    fontSize: "26px"
  }

  return (
    //use {} to add javascript variable inside html using jsx file.
    //add function for current date using javascript Date object
    //use cSS {{inside}}- css properties are javascript object, so ues two {{}}
    <div>
      <h1 style={{ color: "white", background: "purple", textAlign: "center", padding: "15px" }}>Todo App</h1>          {/* use CSS inline style with jsx */}
      <h3 style={secondHeadStylelll}>{todoTilte}</h3>            {/*use CSS as java object */}
      <p className="content">{todoDescription}</p>
      <p>{currentyear}</p>                                       {/*use Date function to get current date or year. */}
      <p>{new Date().getFullYear()}</p>                          {/*use JS Date function to get current date or year inside HTML tag. */}
      <p>{monthName}</p>
      <p>{dateName + "/" + monthName + "/" + currentyear}</p>
    </div>


  )
}

export default App
