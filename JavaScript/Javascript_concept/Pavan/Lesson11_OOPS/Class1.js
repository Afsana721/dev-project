//create class in JavaScript

class student {

    setDetails(sid, sname,grade) {
        // this.sid= 101;
        // this.sname= "John";
        // this.grade= "A";

        this.sid= sid;
        this.sname= sname;
        this.grade= grade;
    }

    display(){
        console.log(this.sid, this.sname, this.grade);
    }

        
}

const newStudent = new student();
//newStudent.setDetails();
newStudent.setDetails(11,"Asef", "A+")
newStudent.display();