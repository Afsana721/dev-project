/*var frozenCoffee1 = "French Vanilla";
var frozenCoffee2 = "Hazelnut";
var frozenCoffee3 = "Caramel";

function customer1(flavor) {
    var frozenCoffee1 = "Hazelnut";
    console.log(frozenCoffee1);     //Hazelnut
    return flavor;
};

var theOrder = customer1(frozenCoffee1); // French Vanilla
document.write(theOrder);
console.log(customer1());*/


var frozenCoffee1 = "French Vanilla";
var frozenCoffee2 = "Hazelnut";
var frozenCoffee3 = "Caramel";

function customer1(flavor){
    var frozenCoffee1 = "Hazelnut";
    return flavor;
}

var theOrder = customer1(frozenCoffee1); //French Vanilla

function customer2(){
    var theOrder = "Hazelnut";
    var frozenCoffee2 = "Mocha";
    console.log("I need a  " + theOrder + " and an order of  " + frozenCoffee2+ " please!");
    console.log("Also, can I get a  " + frozenCoffee3 + "?");
};
customer2(); // Hazelnut , Mocha
console.log(theOrder); //French vanilla