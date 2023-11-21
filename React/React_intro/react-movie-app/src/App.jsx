
import { useState } from 'react'
import './App.css'


function App() {
  // add some moke data for movies

  const [movies, setMovies] = useState([
    {
      id: 0,
      poster_path: "https://image.tmdo.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      title: "Avengers: Infinity War",
      overview: "The Avengers fight Thanos."
    },
    {
      id: 1,
      poster_path: "https://image.tmdo.org/t/p/w185/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
      title: "The Avengers",
      overview: "The Avengers fight Loki."
    }
  ])

  // create a new state variable and update function

  const[searchTerm, setSearchTerm] = useState("")

  return (
  //add search bar to search for movies inside div conponent;  
      <div className="App">
       <h1>Movie Search</h1>
       <div className="searchBar">                                            
        <input id="inputField" type="text" placeholder="Enter a movie title" />   {/* create a input tag add placeholder where user can ender movie name*/}
        <button>Search</button>
       </div>

        {
          movies.map(movie => {
            <div key = { movie.id} style={{marginBottom: "5rem"}}>      {{/* use map to iterate through the movies array and idsplay it in the JSX*/}}
              <img src={ movie.poster_path} alt="poster" />
              <h2>{movie.title}</h2>
            </div>
          })
        }
      </div>
     
    
  );
}

export default App
