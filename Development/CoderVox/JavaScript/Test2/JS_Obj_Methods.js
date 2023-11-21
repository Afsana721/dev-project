// accessing object data / information

/*
var onlineOrder = {
    product: "Banana nut bread",
    quantity: 1,
    delicious: true,
    shippingCost: function(){
        return "shipping is free because we're rich!!!";
    },
    notes: "Extra moist"
};

console.log(onlineOrder.shippingCost());
*/

/*
var onlineOrder = {
    product: "Banana nut bread",
    quantity: 1,
    delicious: true,
    shippingCost: function(person){
        return "Thank you for your order " + person + "!!!";
    },
    notes: "Extra moist"
};
console.log(onlineOrder.shippingCost("Asef"));
console.log(onlineOrder);

//Object in Arrays -> We can nest objects inside of an Array.

    var onlineOrder = [
        {
            name: "Bella",
            order: "Banana nut bread",
            quantity: 3
    },
        {
            name: "Lucy",
            order: "Chocolate chip cookie",
            quantity: 4
    } ];

    //console.log(onlineOrder);
    console.log(onlineOrder[1]);
    console.log(onlineOrder[1].name +" " + onlineOrder[1].order +" " + onlineOrder[1].quantity);
    */

// Arrays in Objects
var onlineOrder = {
        order1: ["Bella", "Banana nut bread", 3],
        order2: ["Lucy", "Chocolate chip cookie", 4],
        order3: ["Emily", "Blueberry muffin", 2]
    };

    console.log(onlineOrder);
    console.log(onlineOrder.order2);
    console.log(onlineOrder.order3[1]);
    console.log(onlineOrder.order1[0]);