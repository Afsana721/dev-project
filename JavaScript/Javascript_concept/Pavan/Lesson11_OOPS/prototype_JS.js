//function 
function student (){
    this.name = "John";
    this.gender = "male";
}

// student.prototype.age=40;
// student1 = new student();

// //student1.age = 35;
// console.log(student1.name);
// console.log(student1.gender);
// console.log(student1.age);

// student2 = new student();
// student2.age = 10;
// console.log(student2.name, student2.gender, student2.age);


//class
class employee {
    constructor(eid, ename){
        this.eid = eid;
        this.ename = ename;
    }
}

employee.prototype.salary = 50000;

employee.prototype.display = function()
{
    console.log(this.eid, this.ename, this.salary);
}

emp = new employee(101, "Asef");
console.log(emp.eid, emp.ename, emp.salary);
emp.display();
