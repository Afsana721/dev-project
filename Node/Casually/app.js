
// Fake data generator -random city, address, countries, name, data, some of the numbers
// create a variable to make ref. for casual class / library, then use required methods / properties
var casual = require("casual");

var name = casual.name;
var city = casual.city;
var color = casual.color;
var phone = casual.phone;

console.log(" Well hello there," + name + "! I do hope that your trip to " +city+ "was marvelous. Is your favorite color still" 
+color+ "? And finally, can I still contact you at "+phone+ "? Send your regards to "+name+ " for me!" )

