//initialize and implement meedle module
console.clear();
const needle = require('needle');
//const app = needle();                   //create a app variable instance for needle module
//const PORT = process.env.PORT || 3000;  //create local host port variable

// app.get('http://www.google.com', function(error, response) {
//   if (!error && response.statusCode == 200)
//     console.log(response.body);
// });

needle.get('https://type.fit/api/quotes', function(error, response, body) {
  if(!error && response.statusCode == 200){
    var obj = JSON.parse(response.body);
    console.log(obj[3]);
    console.log(obj[3].text);
  }
})