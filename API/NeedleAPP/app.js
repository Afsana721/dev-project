
// creates a variable, & store needle objece to get it's properites. Needle module converts Json object/data to Javascript data(Deserialization).

var needle = require('needle');

// use needle variable / object to access needle get() to make a HTTP Get request and pass string parameter with function,
// check status depends on the request call & handle error to give some respone, console will log respone body.
// error is an object like response. When process not getting response from server, it triggers some error message and that retrieves by error object.
// status code:200 ref. 2x- successful http connection (OK), no connection, authorization or other error. Protocol has been properly maintained.
// response object stores response data that comes from server side. Then we can ask different information from the request object.


    /*needle.get('http://www.google.com', function(error, response) {
    if (!error && response.statusCode == 200)
    console.log(response.body);
    });*/

// here add third parameter as body alias. 
    /*needle.get("https://www.google.com", function(error, respone, body) {
        if(!error && respone.statusCode == 200)
        console.log(respone.body);
    });*/

   /* needle.get("https://jsonplaceholder.typicode.com/users", function(error, respone, body) {
        if(!error && respone.statusCode == 200)
        console.log(respone.body);
    })*/

// retrieve specific user data from the response body object

    needle.get("https://jsonplaceholder.typicode.com/users" , function(error, respone,body){
        if(!error && respone.statusCode == 200)
        console.log(respone.body[0]);
        console.log(respone.body[0].name);
        console.log(respone.body[0].email);
        console.log(respone.body[0].address.city);
        console.log(respone.body[0].address.geo);
        console.log(respone.body[0].address.geo.lat);
});