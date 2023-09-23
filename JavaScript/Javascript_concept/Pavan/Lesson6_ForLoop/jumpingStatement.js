//Jumping statement for JS -> break and continue

for(let i =1; i <= 10; i++) {

    //if(i == 5)
    if(i == 3 || i== 5 || i== 7)
    //break;        //when i value is 5, then break command will exit the loop, not printing 5
    continue;        // when i value is 5 then it will stop to print then it will start from 5+1=6 to print
    console.log(i)
    
}