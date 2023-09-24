import React from "react";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";

function App() {
  return (
    <div className="App">
      < Card1 name= "card1" desc="this is card1" />
      <Card2 />
    </div>
  );
}

export default App;
