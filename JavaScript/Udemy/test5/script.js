


//create a function who can add two numbers
//use document object & getElementId to located html elements & get the value, store in a variable
//then take result variable and add two variable with Addition, but input box giving string text value from user
// we need to parse them as number for addition action by parseInt and located innerHTML section

function add2Numbers() {
    let a =document.getElementById("val1").value;
    let b =document.getElementById("val2").value;
    let sum = parseInt(a) + parseInt(b);
//get the result id element to show the result
    document.getElementById("Result").innerHTML = sum;
}

function sub2Numbers() {
    let a =document.getElementById("val1").value;
    let b =document.getElementById("val2").value;
    let sum = parseInt(a) - parseInt(b);
//get the result id element to show the result
    document.getElementById("Result").innerHTML = sum;
}

function mult2Numbers() {
    let a =document.getElementById("val1").value;
    let b =document.getElementById("val2").value;
    let sum = parseInt(a) * parseInt(b);
//get the result id element to show the result
    document.getElementById("Result").innerHTML = sum;
}
//when user give input and click event happens then trigger the function as variable and display the sum of Result. 

document.getElementById("addbtn").onclick=add2Numbers;
document.getElementById("subbtn").onclick=sub2Numbers;
document.getElementById("multbtn").onclick=mult2Numbers;


