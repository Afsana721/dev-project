//import app.js file & config .env file variable
require("dotenv").config();

const app = require("./app");
const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
    console.log(`Server is running on the http://localhost:${PORT}`);
});