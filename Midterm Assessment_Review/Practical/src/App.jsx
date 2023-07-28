import { useState, useEffect } from 'react';
import Table from './Table';
import 'bootstrap/dist/css/bootstrap.min.css';


//Define App Component

const App = () => {

  //Initialize the state variable 'persons as characters' using useStare, so App component fetches data from the SWAPI(Star Wars API)
  //State characters handle the loading state and handle any errors if occures.
  //fetch data stored in the 'characters' state, based on the loading & error states. So, initialize the state variable 'characters' but destructuring.
  // take useState empty array to store data

  const [characters, setCharacters] = useState([]);
  //initialize the state variable 'loading' to handle loading data
  const [loading, setLoading] = useState(true);
  //initialize the state variable 'error' to handle if any errors during fetching API by fetch  
  const [error, setError] = useState(null);

  const endpoint = 'https://swapi.dev/api/people/';

  //declare useEffect hook to handle effect to fatch data from API
  useEffect(() => {
    fetch(endpoint)                                                   //use fetch to retrieve data from API URL/endpoint as a GET call.
      .then((response) => {                                           //use then() to store response data inside response variable
        if (!response.ok) {                                           //if response is not successful / Ok, then handle error by Error object and throw error
          throw new Error('Network response is not ok');
        }
        //if response is ok with status code:200, then return & parse the response object to JSON data using json();
        return response.json();
      })
      //use then() with response data as data.Contains expected results, so response will store in the data property
      .then((data) => {
        //data.results check the property results exists in the data variable. if data object is truthy.
        //if data.results is null, undefined, or '0', empty string, NaN, or false then expression is false, or true.
        if (data && data.results && data.results.length > 0) {
          setCharacters(data.results);                                    //if data is present update the characters state with fetch data
        } else {                                                          // if not getting data, handle error.
          throw new Error('No data found in the API response');
        }
        //set loading false after updating
        setLoading(false);
      })
      .catch((error) => {                                                     //catch error and setError state
        setError(error.message);
        setLoading(false);
      });
    //Empty dependency Array to get effect runs only once.
  }, []);

  return (
    <div>

      {/* Conditional rendering based on the loading and error states */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <Table people={characters} />
      )}
    </div>
  );
};


// bug fix: 
// const App = () => {
//   const [persons, setPersons] = useState([]);

//   useEffect(() => {
//     fetch('https://swapi.dev/api/people/') // Corrected: Specify the endpoint for people data
//       .then(response => response.json()) // Parse the response as JSON
//       .then(data => setPersons(data.results)) // Set the data in the state
//       .catch(error => console.log("Error loading ", error));
//   }, []);

//   return (
//     <Table people={persons} /> // Corrected: Pass 'people' prop 
//   );
// };


export default App;
