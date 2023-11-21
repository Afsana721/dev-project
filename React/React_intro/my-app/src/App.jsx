

import Navbar from './Navbar';
import Home from './Home';



function App() {
// create variables and pass inside dev component using {} but we can numbers, string, Array but object & boolean we can't
 //App component, Navbar component, Home component

  return (
      <div className='App'>               
        <Navbar />                        
        <div className="content">
          <Home />                        
         
        </div>

      </div>
  );
}

export default App;
