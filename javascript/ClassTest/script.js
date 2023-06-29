


function changeBackground() {
    var body = document.getElementsByTagName("body")[0];
    var currentColor = body.style.backgroundColor;
    var newColor = currentColor === "orange" ? "blue" : "orange";
    body.style.backgroundColor = newColor;
}

//setInterval method/function is uses for the code to repeatedly execute the 
//changeBackground function at a specified interval. 

setInterval(changeBackground, 3000); // Change background every 5 seconds