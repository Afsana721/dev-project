const { error } = require('console');
var needle = require('needle');
const { join } = require('path');

// needle.get('http://www.google.com', function(error, response, body) {
//     if(!error && response.statusCode ==200)
//     console.log(body);
// });

// needle.get("https://jsonplaceholder.typicode.com/users", (error, response, body) => {
//     if(!error && response.statusCode == 200)
//     console.log(response.body[9].name, response.body[9].phone);
//     console.log(response.body[9].address.geo.lat);
// });

needle.get("https://type.fit/api/quotes", (error, response,body) => {
    if(!error && response.statusCode== 200)
    var parseJson = JSON.parse(response.body);
    console.log(parseJson[0].text, parseJson[0].author);
    console.log("Author & Quote is :"+parseJson[3].author, parseJson[3].text);
})