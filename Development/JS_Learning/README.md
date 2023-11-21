Method: In JavaScript, method & function almost similar, then can be invoked so we're in a bit of code which does something for us. So, method is just a function
what distinguishes methods is, the way that we invoke them and where they are defined. 
Now if we have just a regular function or an arrow function and in fact we're going to create this, we'll say -
     function: --    
        const greet = () => 'hello';
        let resultOne = greet();
        console.log(resultOne);

Note: When we invoke the reqular arrow function, we just invoke it, like this the function name & parentheses ( ). 
But when we use a method, the method is invoke using dot ' . ' notation. So,remember we could take a string and use the method on it called to ' uppercase' and the way we do that is by taking that string and adding '.' dot notation, 
like: name.toUppercase(); 
This is still just a function, but the way we invoke it is different. So, methods are function which are associated with an object or datatype- like String.
They're define on an object or datatype.
Whereas functions are defined on its own, not an object or datatype.

Call back function: We can also pass in a function as an argument and when we do this, the function we pass in is called Call back function. 

JS_Object: Objects are huge part of the JavaScript language and they're at the core of many things we do. So, Objects in real life, they have properties, and they have things they can do. 
Like: Phone is an Object, so it has color, size, model but it has many things that can do some action, like - ring, take a picture, play music. 

JavaScritp has some built in Objects, like Date, Math, etc. And also allows us to create our own Objects
That means, 
        = User object: it has properties - email, username and method like - login, logout.
        -blog object:   properties:     title, content and author
                        methods:        publish, unpublish, delete.