class Shape {

    draw(){
        return "I am generic shpae";
    }
}

class Square extends Shape {

    draw() {
        return "I am square";
    }
};

class Circle extends Shape{
    draw(){
        return "I am Circle";
    }
}

let s = new Shape();
console.log(s.draw());

let sq = new Square();
console.log(sq.draw());

let ci = new Circle();
console.log(ci.draw());