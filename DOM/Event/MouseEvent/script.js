
//var randomColor ="#"+((1<<24)*Math.random()|0).toString(16);
var randomColor =Math.floor(Math.random()*16777215).toString(16);

document.querySelector("div").addEventListener("click", function() {
    document.querySelector("div").style.backgroungColor = randomColor;
    document.querySelector("div").textContent ="I have't seen this before.";
}