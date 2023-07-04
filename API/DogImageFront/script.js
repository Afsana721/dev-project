


$("button").on("click", function() {
    //alert("button clicked");
// fetch code 

// actual url
var endpoint ="https://dog.ceo/api/breeds/image/random";

// wrong url to check throw Error.
//var endpoint ="https://dog.ceo/api/breeds/image/rando";

fetch(endpoint)
.then((response) => {
// parse the respone
//console.log(response.json());

//return response.json();

if(response.ok) return response.json();
throw Error(!response.json() ? "No Data" : "Cannot connect!");

})
.then((data) => {
// do something with the data
console.log(data.message);
$("img").attr("src", data.message)
})
.catch((error) => {
//what if there is an error
console.log("Error:", error);

// showing Error message which also come form html & css style for color
var theStyles= {
    color: "red",
    marginTop: 0
}
$("#error").text(error).css(theStyles);

});

})


$("img").attr("src", "https://images.dog.ceo/breeds/terrier-russell/iguet5.jpg");
