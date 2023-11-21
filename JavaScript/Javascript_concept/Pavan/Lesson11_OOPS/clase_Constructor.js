// create Class Constructor to invoke method automatically

class Student1 {
//create Student1 class Constructor & this constructor will automatically invoke at the time
// of object creation for this Student1 class. If constructor has parameter, then we have to 
//pass the parameter value at the time of Object creation of Student1 use it's constructor.

    constructor(sid, sname, grade){
        this.id = sid;
        this. name = sname;
        this.grade = grade;
    }

    display(){
        console.log(this.id, this.name, this.grade);
    }
}

let stu1 = new Student1(11,"Masud", "B");
stu1.display();

/*
    Object: Object is a Physical entity as a instance of any class. So, we can create any 
    class instance as a object and any number of objects for this class. And Objects are 
    independent.
*/
let stu2 = new Student1(300, "khan", "B");
stu2.display();