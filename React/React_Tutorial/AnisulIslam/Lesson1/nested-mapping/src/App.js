import React from "react";

//create a users array variable
  const users = [
    {
      fullName: "Asef Khan",
      age : 12,
      phones: [{
        home: "01775568",
        },
        {
          shcool: "0177558899"
        }
        
      ],
    },
    {
      fullName: "Masud Khan",
      age : 50,
      phones: [{
        home: "017711111",
        },
        {
          shcool: "01885566"
        }
        
      ],
    }
  ];




function App() {
  return (
    <div className="App">
     <h1>Nested Lists</h1>
      {users.map((user, index) => (
        <article key={index}>
          <h3> {user.fullName}</h3>
          <p> {user.age}</p>
          
          {
            user.phones.map((phone, index) => 
            <div key={index}>
              <p>Home Phone : {phone.home}</p>
              <p>School Phone : {phone.shcool}</p>
            </div>)
          }
        </article>
      ))}
    </div>
  );
}

export default App;
