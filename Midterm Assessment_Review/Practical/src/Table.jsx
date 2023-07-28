//importing React library here
import React from "react";



const Table = ({ people }) => {
  // Check if 'people' prop is defined and has data, otherwise show 'No data found' message, and checking people exist with length greater than '0'

  const theCharacters = people && people.length ? (                     //iterate over each character object.
    people.map(character => (
      <tr key={character.name}>
        <td>{character.name}</td>
        <td>{character.height}</td>
        <td>{character.mass}</td>
        <td>{character.hair_color}</td>
        <td>{character.eye_color}</td>
      </tr>
    ))
  ) : (                                                                 //ternary oprator which is conditional expression.
    <tr>
      <td colSpan="5">No data found</td>
    </tr>
  );

  //retrun is Rander table structure with the 'theCharacters' component
  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Star Wars Characters</h1>
      <table className="table table-striped m-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair Color</th>
            <th>Eye Color</th>
          </tr>
        </thead>
        <tbody>
          {theCharacters}
        </tbody>
      </table>
    </div>
  );
}

// Table component is being exported using default exporet not  export {Table}; 
export default Table;