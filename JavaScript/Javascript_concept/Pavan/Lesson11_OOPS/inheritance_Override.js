
class bank {

    rateOfInterest() {
        return 0;
    }
}

class axis extends bank{
    rateOfInterest(){
        return 10.5;
    }
}

class sbi extends bank{
    rateOfInterest(){
        return 12.5;
    }
}

let sbi1 = new sbi();
console.log(sbi1.rateOfInterest());
let axis1 = new axis();
console.log(axis1.rateOfInterest());