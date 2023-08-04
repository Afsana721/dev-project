//create an object & function inside object call as method
let employee = 
{
    empName: "Scott", 
    empId: 11,
    job:"Engineer",
    basicSalary: 3000,
    bonus: function() 
    
    {  
        return ((this.basicSalary * 10)/100);    
       
    }


};

//Accessing the object properties
    //console.log(employee);
   // console.log(employee["empName"])
    console.log(employee.bonus())