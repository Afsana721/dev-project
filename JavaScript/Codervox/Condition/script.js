

/*var paidMember = false;
// if first condition is false then it will go else part.

if(paidMember === true){
    document.write("Welcome to our clud!");
}else {
    document.write("Sorry, you do not have access");
}*/

// Check more than one condition

var paidMemeber = false;
var rewardPoindts =49;

if(paidMemeber ===true) {
    document.write("Welcom to our club!" );
 }else if (rewardPoindts >=50) {
    document.write("You're not a member. Would you like to redeem you points?");
 } else{
    document.write("Sorry, you do not have access.");
}