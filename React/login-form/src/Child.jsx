import React, { useState } from 'react';

const Child = ({ onSubmit }) => {
  // State to store the username entered in the input field
  const [username, setUsername] = useState('');

  // Function to handle the input change in the child component
  const handleChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    onSubmit(username); // Call the function passed from the parent component with the username
  };

  return (
    <div>
      <h3>Child Component</h3>
      {/* Render the login form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          {/* Input field linked to the username state */}
          <input type="text" value={username} onChange={handleChange} />
        </div>
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Child;
