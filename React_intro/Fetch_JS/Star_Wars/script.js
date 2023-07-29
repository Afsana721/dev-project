
//API call using Fetch function

/* The Star Wars API: People
A People resource is an individual person or character within the Star Wars universe.

Endpoints

/people/ -- get all the people resources
/people/:id/ -- get a specific people resource
/people/schema/ -- view the JSON schema for this resource */

//Create endpoint to get People data from the Star Wars API
//Use fetch function to fetch the endpoint, it get response object then we can parse the response as json object user json()


const endpoint = 'https://swapi.dev/api/people/1';
const person = document.getElementById('app');

fetch(endpoint)                 
.then(response => response.json())
.then(dataJson => {
    console.log(dataJson);
    person.innerHTML=`<h1>${dataJson.name}</h1>`
})
