
// requiring needle module, so create variable needel & store needle module.

var needle = require("needle");

/*needle.get("http://www.google.com", function(error, response, body) {
    if(!error && response.statusCode == 200)
    console.log(body);
   
})*/

needle.get("https://jsonplaceholder.typicode.com/users", function(error, response, body) {
    if(!error && response.statusCode ==200) {
        //console.log(body);
        console.log(body[0]);
        console.log(body[0].name);
        console.log(body[0].id);
    }
});