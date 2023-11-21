//JavaScript Encapsulation 

class student{
    constructor()
    {
        let name, marks;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getMarks(){
        return this.marks;
    }

    setMarks(marks){
        this.marks = marks;
    }
}

let newStudent = new student();
newStudent.setName("Asef");
newStudent.setMarks(100);
console.log(newStudent.getName());
console.log(newStudent.getMarks());