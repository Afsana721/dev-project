import React, { useState } from 'react';

//Create the Clicker component
const Clicker = () => {

//State to store the random number generated
  const [randomNumber, setRandomNumber] = useState(null);

//State to track if the game is over
  const [gameOver, setGameOver] = useState(false);

//create function to generate a random number between 1 and 10
  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 10) + 1;
    setRandomNumber(newRandomNumber);

//check if the random number is 7
    if (newRandomNumber === 7) {
      setGameOver(true);
    }
  };

//create function to hide 'Generate Random Number' button
  const hideButton = () => {
    setGameOver(true);
  };

//Clicker.jsx component to render on the App.jsx
  return (
    <div>
      {!gameOver ? (
        <div>
          <h1>Clicker Game</h1>
          <button onClick={generateRandomNumber}>Generate Random Number</button>
          {randomNumber && <p>Random Number: {randomNumber}</p>}
        </div>
      ) : (
        <h1>Game Over</h1>
      )}
      {gameOver && <button onClick={hideButton}>Hide Button</button>}
    </div>
  );
};

export default Clicker;
