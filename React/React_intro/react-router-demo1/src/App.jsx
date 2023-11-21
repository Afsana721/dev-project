import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Root from './components/Root'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
//we need to wrap our component into <Router></Router>
  return (
    <Router>
      <div className="App">
        <div className="container">
         
      {/*Routes will go here */}
      <Routes>
        <Route path="/" element={<Root />} />
        <Router path="/home" element={<Home/>} />
        <Router path="/about" element={<About/>} />
        <Router path="/contact" element={<Contact/>} />
        </Routes>
        </div>
       
      </div>
      </Router>
  )
}

export default App
