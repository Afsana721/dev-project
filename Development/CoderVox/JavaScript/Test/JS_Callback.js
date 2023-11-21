//function that is used as an agrument is know as a callback function.

function theHello(name, question){
    alert("Hello " + name + "!!!");
    question();
}

function help(){
    alert("How can I assist you ?");
}

theHello("Garfield", help());