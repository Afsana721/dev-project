//Object -> we can use objects to store values and functions. 
// We would group the values and functions together in an object to model something in the real world. 

    /*
    var onlineOrder = {
        product: "Banana nut bread",
        quatity: 1, 
        delicious: true,
        notes: "Extra moist"
    }

    var product = onlineOrder.product;
    console.log("the product is : "+ product);
    console.log(onlineOrder.delicious)
    console.log(onlineOrder.delicious = false);
    console.log(onlineOrder.delicious); 
    */

    var onlineOrder = {
        product: "Banana nut bread",
        quatity: 1, 
        delicious: true,
        notes: "Extra moist"
    };

    console.log(onlineOrder.quatity);
    console.log(onlineOrder["product"]);
   console.log(onlineOrder.delicious = false);
   console.log(onlineOrder.product = "coffee");
   console.log(onlineOrder["quatity"] = 2);
   console.log(onlineOrder);