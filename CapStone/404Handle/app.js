
//create variable for the modules. 
const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // Use your preferred port

// Set your static directory for serving images and other assets
app.use(express.static(path.join(__dirname, 'public')));

// Other routes and middleware...

// Handle 404 error
 app.use((req, res) => {
  res.status(404).render('404.ejs');
 });





//handle 404 without ejs file
  
// 404 error handling route
// app.use((req, res) => {
//   const imageUrl = '/sad-emoji.png';
//   const styles = `
//   /* Center the container */
//   .error-container {
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//       height: 100vh;
      
//     }
    
//     /* Style for the sad emoji image */
//     .sad-emoji {
//       width: 250px;
//       height: 250px;
//       margin-bottom: 30px;
//       animation: bounce 1s infinite alternate;
//     }
  
//     p{
//       color: red;
//       font-size: 24px;
//       font-family: cursive;
//       font-weight: bold;
//     }
    
//     /* Animation keyframes */
//     @keyframes bounce {
//       0% {
//         transform: translateY(0);
//       }
//       100% {
//         transform: translateY(-10px);
//       }
//     }
//   `;
//   res.status(404).render('404', { 'assets/sorry.jpg , styles });
// });




// Start listening the server on the port
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
