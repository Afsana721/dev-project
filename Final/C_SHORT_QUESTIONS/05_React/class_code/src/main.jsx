//previous code
// import React from 'react'
// import ReactDOM from 'react-dom/client.js'
// import Parent from './Parent.jsx'


//use react-dom package directly 
import React from "react"
import ReactDOM from 'react-dom'
import Parent from './Parent.jsx'

//use ReactDom.createRoot to render the content

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>,
)
