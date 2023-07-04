 // function with parameter /arguments

  /*function restaurants(place1, place2) {
    console.log("I am going to out side to pick food from " +place1+ " and " +place2);
  };

  restaurants("McDonalds", "In-N-Out");*/

 /* function multiplier(num, num1, num2) {
     document.write(num * num1 * num2);
    console.log(num * num1 * num2);
  };

  multiplier(10, 20, 30);*/

  /*function theCat(name) {

    if(name === "Garfield") {
      document.write("Jon, where is my lasagna?");
    }else if(name ==="Odie") {
      document.write("Bark");
    } else{
      document.write("Garfield, look at what you've done!");
    }
  }

  theCat("Jon");*/


  /*function theNumbers(x, y, z) {

    if(x+y >10) {
      document.write("Chicken Sausage & Bean Biscuit");
    } else if( z-y <10) {
      document.write("Double-Smoked Bacon, Cheddar & Egg Sandwich");
    }else {
      document.write("Bacon, Gouda & Egg Breakfast Sandwich");
    }
  }

  theNumbers(3,6,9);*/

// undefined data type, where return comes undefined
  /*function stuff() {

  }

  document.write(stuff());*/

  /*function stuff1() {
    document.write("What?");
    console.log("What")
  }

  document.write(stuff1());*/

// retun a value, must use return keyword

 /* function stuff() {
    return "office";
  }

  document.write(stuff());
  console.log("office");*/

 // return statement will end the function execution, not going to any further execution of this function. So here only return - WHat?
 /* function stuff() {
    return "What?";
    var question ="Why?";
    return question;
  };

  document.write(stuff());*/


 /* function emotion(feelings) {
    return feelings;
  }

  // function stored in a variable current Feeling.
  var currentFeeling = emotion(45);
  //document.write(currentFeeling);
  //document.write(currentFeeling);
  document.write(false);*/

 
  var currentFeeling = emotion("realy love");

  function theNum(num) {
    return num;
  }
  function emotion(feelings) {
    return feelings;
  }
  var times = theNum(3);
  

  function restaurants(place1) {
    console.log("I  " +currentFeeling + " eating at " +place1+ " and I've been there " +times + " times");
  };

  restaurants("In-N-Out");
  document.write(restaurants("In-N-Out"));

