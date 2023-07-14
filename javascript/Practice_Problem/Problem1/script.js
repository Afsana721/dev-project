
var onConvertClick =function() {

//here, store value not object, so value property is used to retrieve the current value of an input element.
// By appending .value- accessing the value that has been entered or selected in the input field with the id "Kilometers". 

    var kilometer = document.getElementById("Kilometers").value;
    var output =document.getElementById("output");


    if(isNaN(kilometer)) {
// error message
        output.textContent = "Sorry, you didn't enter a number."
    } else {
        var miles =   parseFloat(kilometer) * 0.621371;
        
        output.textContent = "Miles = " + miles + " mi";
    }
};


// miles to kilometer

/*var onConvertClick =function() {
    var miles = document.getElementById("miles").value;
    var output =document.getElementById("output");


    if(isNaN(parseFloat(miles))) {
// error message
        output.textContent = "Sorry, you didn't enter a number."
    } else {
        var kilo =  1.60934 * parseFloat(miles);
        
        output.textContent = "Kilometers = " + kilo + ".";
    }
};*/