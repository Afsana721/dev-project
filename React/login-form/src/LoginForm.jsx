import React from 'react';
import Child from './Child'; // Import the Child component

const LoginForm = () => {
  // Function to handle form submission
  const handleSubmit = (username) => {
    // In this example, we simply log the submitted username
    console.log('Submitted username:', username);
  };

  return (
    <div>
      <h2>Login Form</h2>
      {/* Render the Child component and pass the handleSubmit function as a prop */}
      <Child onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginForm;
