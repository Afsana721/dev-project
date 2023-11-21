//Super Keyword

class animal{
    constructor(color){
        this.color = color;
    }

    printColor(){
        console.log(this.color);
    }
}

class dog extends animal {
    constructor(color, food){
        super(color);
        this.food = food;
    }

    eating(){
        console.log("Eating : ", this.food);
    }

    display(){
        this.printColor();
        this.eating();
    }
}

dog1 = new dog("green", "banana");
dog1.display();