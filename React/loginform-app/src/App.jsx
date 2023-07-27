import React, { useState } from 'react';
import Child from './Child'; // Import the Child component

const App = () => {
  // State to store the message to be displayed
  const [message, setMessage] = useState('');

  // Function to handle form submission and receive user input from the child component
  const handleSubmit = (username) => {
    setMessage(`Hi, thanks ${username}`);
  };

  return (
    <div>
      <h2>Login Form</h2>
      {/* Render the Child component and pass the handleSubmit function as a prop */}
      <Child onSubmit={handleSubmit} />
      {/* Display the message received from the child component */}
      <p>{message}</p>
    </div>
  );
};

export default App;
