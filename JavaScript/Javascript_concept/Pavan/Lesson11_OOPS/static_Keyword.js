//static keyword in Javascript
/* we can use static method, then it will also common for every class instance of objects.
 And occupied memory only one time. */
class Test
{
    static a = 10;  //a is static variable
    b = 20;

    static m1(){
        console.log("This is static method");
    }

    m2(){
        console.log("This is non-static method");
    }
}

//we can directly access static variables and methods, using class name
console.log(Test.a);
//console.log(Test.b);

Test.m1();
//Test.m2();    //not gettig access by Test class name (error will comes)

let Test1 = new Test();     //creating object then getting access.
Test1.m2();
console.log(Test1.b);