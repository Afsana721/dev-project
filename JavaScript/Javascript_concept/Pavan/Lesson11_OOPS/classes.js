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
//then call the display mehtod to retrieve variable value.
let stu = new Student();
stu.setDetails(200, "Asef", "A+");
stu.display();

