//create an object for employee
let employee = {
    empid:111,
    lastname: "Scott",
    fistname: "Lee",
    age: 35,
    city: "Austin",
    job: "teacher",
    salary: 5000,
    bonus: function () {
        return ((this.salary * 10)/100)
    }
};

//access employee object
//console.log(employee);
console.log(employee.bonus());