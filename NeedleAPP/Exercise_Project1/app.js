
// creates a variable to store needle object to get it's properties
// express variable, app vriable.

var needle = require('needle');



// not parse JSON, so use JSON object with parse() function to parse response object 

needle.get("https://type.fit/api/quotes", function(error, response) {
    if(!error && response.statusCode == 200)
    var obj = JSON.parse(response.body);

    console.log(obj);
    console.log(obj[0].text);
    console.log(obj[5].text);
    console.log(obj[5].author);
    console.log(obj[3].text);
    console.log(obj[3].author); 
  });









