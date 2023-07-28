
//basic function to check script & jquery is ok.

/*$(document).ready(() => {
    alert("I am ok to run!");
});*/

$("h1").text("I am the Header now");
$("h1").eq(2).text("I am the last Header");

var result = $("h1").eq(1).text();
console.log(result);