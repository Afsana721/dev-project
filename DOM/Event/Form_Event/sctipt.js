
// create two variable for email and password

var theEmail=document.getElementById("email");
var warning = document.getElementById("theMessage");

theEmail.addEventListener("focus", function() {
    warning.textContent="Enter your valid email";
})


theEmail.addEventListener("blur", function() {
    
    if (theEmail.value == "") {
        alert("Email cannot be blank")
    } else {
        warning.textContent = "";
    }
});