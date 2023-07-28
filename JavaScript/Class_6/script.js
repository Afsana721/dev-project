
//Arrow function:

//simple function

// function gretting(message="good morning") {
//     return alert(`${message} everyone!`);
// }

//we can write this function using one line: array function is anonymous function
//let gretting =message => alert(`${message} everyone!`);         //one line not need add bracket as parameter


//call the function / invoke the function
    //gretting("hello");


let createBlog = (title, body) => {
    if(!title) {
        throw new Error("A title is required");
    }

    return alert(`${title} -${body}`);
}

createBlog('Blog Title', 'Blog Body');