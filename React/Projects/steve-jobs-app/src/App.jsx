import { useState } from 'react'

import img from './assets/steve.jpg'

import './App.css'


function App() {
  const imag1 =img;

  return (
      <div>
        <h1>Welcome to the Ultimate Steve Jobs Fan Website!</h1>
        <img src={imag1} alt='steve1' />
        <p>Steve Jobs wat the co-foundeer and CEO of Apple Inc. He is widely considered a to be a brilliant
        businessman, as well as one of the greatest tech visionaries on out time.</p>
        <p class="p20">Steve Jobs wat the co-foundeer and CEO of Apple Inc. He is widely considered a to be a brilliant
     businessman, as well as one of the greatest tech visionaries on out time.</p>
     <p>The story of his life is nothing short of fascination. After dropping out of college, he stared Apple with 
      his friend <a href="https://en.wikipedia.org/wiki/Steve_Wozniak" target="_blank">Steve Wozniak</a> in 1976 at the age of 21.
      The duo gained wealth and fame a year latter for the <a href="https://en.wikipedia.org/wiki/Apple_II" target="_blank">Apple 11,
      </a> one of the first highly successfull mass-produced personal computers. This was followed by the very successful 
      Macintosh in 1984, the first mass-produced computer with a GUI(graphical user interface). After being ousted of 
      Applie in 1985, he went on to oversee the creation of two new companies: NeXT computer and <a href="https://en.wikipedia.org/wiki/Pixar" target="_blank">Pixar.</a>Pixar. 
      With the success of the movie Toy Story, Steven became a billionaire.
    </p>

    <p>In 1997, Steve returned to Apple. Bill Gates and Microsoft dominated the computer industry, and Apple was on the brink of extinction. 
    Nonetheless, <a href="https://en.wikipedia.org/wiki/Reality_distortion_field" target="_blank">Steve was a fantastic salesman,</a> and used his business acumen 
    to slowly bring the company back to profitability.</p>

      </div>
     
  )
}

export default App
