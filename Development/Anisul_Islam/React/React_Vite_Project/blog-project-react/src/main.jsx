import React from 'react'
import ReactDOM from 'react-dom/client'

const todoTitle = "Call Family";
const toDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores suscipit doloremque cumque reiciendis sed. Soluta expedita sed a. Quis omnis sequi at maiores quia modi cumque facere voluptatibus perferendis quidem.";
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const today = date.getDate();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <h1>Todo App</h1>
      <h3>{todoTitle}</h3>
      <p>{ toDesc }</p>
      <p>{ month + "/"+today + "/"+ year}</p>
    </div>
  </React.StrictMode>,
)
