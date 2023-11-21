JavaScript: OOPS Concept - Object Oriented Programming Language
with Class, Object, Methods & Constructor

JS_Class: Class is a logical entity which contain variable & methods
JS_Object: Object is Physical Entity & an instance of class
    -Method contains statements. Some times method can accept argument. 
    -Class also contains Constructors.
    -Constructor will be called when you create object 

Object: Object is a Physical entity as a instance of any class. So, we can create any class instance as a object and any number of objects for this class. And Objects are independent.
Example: 
    class student {
        let name = "Afsana";
    }

Object: let stu = new student();
        let stu1 = new student();
        let stu2 = new student();

Constructor: Constructor only pass the 
Method & Constructor are different, method can be called explicitly but construcotor invoke automatically at the object creation. Method perform some logic, can take arguments, with complex operation. We can get access method through the Object only. But Constructor invoke at the time of Object creation. Constructor takes the agrument but only initilize the value.

Example: Class in JavaScript

class Student 
{
    setDetails()
    {
        this.sid = 101;
        this.sname = "John";
        this.grade = "A";
    }
    display()
    {
        console.log(this.sid, this.sname, this.grade);
     }
}

//to use the Student class, we need to create a object using new keyword.
// then we can access the setDetails() method who assign the variable value and 
//then call the display mehtod to retrieve.
let stu = new Student();
stu.setDetails();
stu.display();

Note: I can use parameter in the method to pass dynamic data, not hardcoding use data

class Student 
{
    setDetails(sid, sname, grade)
    {
        /*this.sid = 101;
        this.sname = "John";
        this.grade = "A";*/
    //assign the values & refere to Class
        /*this.sid = sid;
        this.sname = sname;
        this.grade = grade;*/

        this.id = sid;
        this.name = sname;
        this.grade = grade;
    }

    display()
    {
       // console.log(this.sid, this.sname, this.grade);
       console.log(this.id, this.name, this.grade);
    }

    
}

//to use the Student class, we need to create a object using new keyword.
// then we can access the setDetails() method who assign the variable value and 
//then call the display mehtod to retrieve.
let stu = new Student();
stu.setDetails(200, "Asef", "A+");
stu.display();


Static Keyword in JavaScript: 
                - When we create Object, it is a physically entity, so every object own it individual memory. So, if I create one class and it has different variables, but after creatig different objects by this class instance, that time all object will occupy there set of memory. So if there is any common value that will carry every objects, then we can create a static variable in the class, so every object will get same value and after changing in the class static variable value, it will be change for every instance of class objects. 
So, we can use static method, then it will also common for every class instance of objects. And occupied memory only one time. 
And we can access these static variable or method, using class name. No need to create object for this class. 

Encapsulation: Encapsulation is defined as teh wrapping up of data under a single unit. It is a machanism thta binds together code and the data. The JavaScript Encapsulation is a process of binding the data (i.e variables) with the functions acting on that data.

Prototype in JavaScript: Prototype is an object that is associated with every function & object by defaule. 
    * If we want to add new properties at later stage to a function / class, we can take the help of prototype.

Polymorphism in JavaScript: Polymorphism is the ability to create a variable, a function, or an objec that has more than one form.