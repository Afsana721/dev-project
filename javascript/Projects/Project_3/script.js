// function to calculate the sum of three numbers and  display an alert

function calculateSum() {
    var numbers = [];
    var numInputs =3;

    for(var i = 0; i<numInputs; i++) {
        var number = prompt("Give a number.");
        number =Number(number);

        if(isNaN(number)) {
            alert("Invalid input : Please enter valid numbers.");
            return;
        }

        numbers.push(number);
    }

    var sum =0;
    for(var j = 0; j<numbers.length; j++) {
        sum = numbers[j];
    }

    alert("The sum of all ouf your numbers is " + sum + ".");
}