
//create a prompt() method which allows user input, the stored user input date in a variable to access it. 
//var order = prompt("Tell me what you want?");

//document.write(order + " is a good idea");

var paidMember = false;
var rewardPoints =50;

if(paidMember === true){
    document.write("You can enter here.");
} else if(rewardPoints >=50){
    document.write("Ok, you can enter because of you rewardPoint, you can redeem it")
} else{
    document.write("Sorry, not allowed to go inside!");
}
