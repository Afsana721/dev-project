
$("#btn").on("click", () => {
    var endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json";
    fetch(endpoint)
    .then((response) => {
        //parse the response
        if(!response.ok) {
            throw Error(response.statusText)
        }
        return response.json();
    })
    .then((data) => {
        //do something with the data
        var country = $('input[name="country"]:checked').val();
        console.log(data);
        var rate = data.bpi[country].rate_float.toFixed(2);
        var symbol = data.bpi[country].symbol;
        $("#displayPrice").html(symbol + rate);
    })
    .catch((error) => {
        //what if there is an error?
        let theStyles = {
            color: "red",
            marginTop: 0
          }
        console.log(error);
        $("#error").html(error).css(theStyles);
    });
});















Message in-class-demos









