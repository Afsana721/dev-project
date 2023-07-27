import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
//imported three components here

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Root from './components/Root'
import './App.css'


function App() {
  

  return (
  //create three routs for Home, About & Contact & Root for root path
    <Router>
      <div className="App">
        <div className="container">
         
          <Routes>
          <Route path="/" element={<Root/>} />
          <Route path="/home" element={<Home/>} />            {/*components */}
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
       
      </div>
      </Router>
     
  )
}

export default App
