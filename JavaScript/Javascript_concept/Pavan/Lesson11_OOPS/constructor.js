class student{

    constructor(sid, sname, sgrade) {
        this.sid=sid;
        this.sname=sname;
        this.sgrade=sgrade;
        
    }

    display(){
        console.log(this.sid, this.sname, this.sgrade);
    }
}

let newStudent = new student(11, "Asef", "A");
newStudent.display();


