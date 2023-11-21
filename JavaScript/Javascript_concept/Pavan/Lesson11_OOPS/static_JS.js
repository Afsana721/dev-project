class Test {
    static a = 10; //static variable
    b = 20;         //non-static variable

    static m1(){
        console.log("this is m1 static method");
    }

     m2(){
        console.log("this is m2 non-static method");
    }
}

//directly access static variable & method only using class name
console.log(Test.a);
console.log(Test.b);
let tes1 = new Test();
console.log(tes1.m2());
console.log(tes1.b);
Test.m1();
//Test.m2();