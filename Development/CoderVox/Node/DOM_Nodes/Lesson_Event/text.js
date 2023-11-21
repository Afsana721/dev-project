
var randomColor = "#"+((1<<24) * Math.random() |0).toString(16);
document.querySelector("div").addEventListener("click", function(){
    document.querySelector("div").style.backgroundColor =randomColor;
    document.querySelector("div").textContent = "I haven't seen this before.";
})


//2nd solution


// const element = document.getElementById('box');
// const colors = ['orange', 'green', 'blue', 'red', 'gray', 'black', 'purple'];
// let colorsIndx = 0;

// element.addEventListener('click', function() {
//     // Change the color of the element on click
//     element.style.backgroundColor = colors[colorsIndx];
    
//     // Increment the index or reset to 0 if at the end of the array
//     colorsIndx = (colorsIndx + 1) % colors.length;
   
// });