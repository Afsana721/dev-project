
var url ="https://api.coindesk.com/v1/bpi/currentprice.json";

$("#btn").on("click", () => {
fetch(url)
.then((response) => {
 // parse response
    if(!response.ok) {
        throw Error(response.statusText)

    } return response.Json();
})
.then((data) => {
//make varibles to pass dynamic value for country & currency

 var country = $('input[name="country"]:checked').val();
 console.log(data);

 var rate =data.bpi[country].rate_float.toFixed(2);
 var symbol =data.bpi[country].symbol;

 $("#displayPrice").html(symbol + rate);
 //console.log(data);
})

.catch((error) => {
// if error comes text will be red color.
var theStyles = {
    color: "red",
    marginTop: 0
}
    console.error("Error from network: ", error);

    $("$error").html(error).css(theStyles);
    // what if there is on error
});

});



/*
fetch(endpoint)
.then((response) => {

// parse the response

)}
.then((data) => {
    //do something with the data
})
.catch((error) => {
    // what if there is on error
})


*/