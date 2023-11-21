//Object literals
/*const user = {
    name: "Asef",
    age: 12,
    email: "asef@gmail.com",
    location: "Austin",
    blogs: ["Why mac & cheese rules", "10 things to make with marmite"],
};

console.log(user);
console.log(user.name, user.age, user.email, user.location, user.blogs);
user.age = 13;
console.log(user.age);
console.log(user['name']);
user['name'] = 'Khan';
console.log(user['name']);

console.log(typeof(user.name));
console.log(typeof(user.blogs));*/

const user = {
    name: 'Asef',
    age: 13,
    email: 'asef@gmail.com',
    location: 'Austin',
    blogs: ['education with hours', 'reading a book'],
    login: function() {
        console.log('the user logged in')
        //return 'hello';
    },
    logout: function() {
        console.log('the user logged out')
    },
    logBlogs: function () {
        console.log('this user has written the following blogs');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
        
    }
};

//console.log(user.login());
// const name = 'masud';
// const newName = name.toUpperCase();
// console.log(name.toUpperCase());
// console.log(newName);
//user.logout();

//user.logBlogs();
//console.log(this);
user.logBlogs();