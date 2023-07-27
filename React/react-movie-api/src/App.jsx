import { useState } from 'react'
import './App.css'
import key from "./config/key"

function App() {

  // add some moke data for movies with movies endpoint (API).

  /*const [movies, setMovies] = useState([
   {
     id: 0,
     poster_path: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
     title: "Avengers: Infinity War",
     overview: "The Avengers fight Thanos."
   },
   {
     id: 1,
     poster_path: "https://image.tmdb.org/t/p/w185/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
     title: "The Avengers",
     overview: "The Avengers fight Loki."
   }
 ])*/

  const [movies, setMovies] = useState([])

  //create a new state variable and update function

  const [searchTerm, setSearchTerm] = useState("");

  const searchChangeHandler = (event) => {
    console.log("I am the event.target.value", event.target.value);
    setSearchTerm(event.target.value);
  }

  const performSearch = () => {

    const baseUrl = `https://api.themoviedb.org/3`
    const route = `/search/movie?api_key=${key.TMDB_KEY}&query=${searchTerm}`
    const endpoint = baseUrl + route;

    //Create a Get request by fetch add endpoint variable who holds baseUrl and route= path+query parameters.

    fetch(endpoint)
      .then(response => {                                 //then method get response object & Parsing JSON.
        return response.json()
      })
      .then(searchResult => {                           //then method get user search data & set state after getting search result
        //console.log(searchResult);
        setMovies(searchResult.results)
        setSearchTerm("")                             //update searchbar for next user input

      })
      .catch(error => {
        console.log("Error coming from API:", error)      // catch method handle exception if any error happens 
      })
  }

  return (

    <div className="App">
      <h1>Movie Search</h1>
      <div className="searchBar">
        <input id="inputField" type="text" placeholder="Enter a movie title"
          onChange={searchChangeHandler} value={searchTerm}/>
        <button onClick={() => performSearch(searchTerm)} >Search</button>
      </div>

      {
        movies.map(movie => (
          <div key={movie.id} style={{ marginBottom: "5rem" }}>
            {<img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="poster" />     /*add image basic source from TMDB */}
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p>
            <p>{movie.vote_average}</p>
            <p>{movie.vote_count}</p>
          </div>
        ))

      }
    </div>


  )
}

export default App
