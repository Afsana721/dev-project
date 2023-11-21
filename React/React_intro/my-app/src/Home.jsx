//The useEffect Hook allows to perform side effects in the components.

import { useState, useEffect } from "react";

import BlogList from "./BlogList";



//components -> home

const Home = () => {
//create some state to hook them with the component, the initial value is the state is [] of blogs

const [blogs, setBlogs] = useState([
    {title: "My new website", body: "loren ipsum...", author:"mario", id:1},
    {title:"Welcome party!", body:"lorem ipsum...", author:"yoshi", id:2},
    {title: "Web dev top tips", body: "Iorem ipsum...", author:"mario", id:3}
    
]);  
//create function to delect item and get update state. And create another variable - new Blog - to store after deleting Array item 
// it will change the state 
const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
}

//useEffect : it will work when the data chnages (first time/ initially or any time when render)
// get access state inside useEffect
    useEffect(() => {
        console.log("use effect ran");
        console.log(blogs);
    });

{/* use same component for different blogs and add some function - filter() method, 
this filter method fire a call back function for each item in the Array, if return true it keeps items in array or false keeps out items in Array.
And return a new Array, only not filtered and passing that as a props. 
Here, returns true where author values are mariio & else false. reused blog list component */}

    return (
        <div className="home">
            <BlogList  blogs={blogs} title="All Blogs!" />

            <BlogList  blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's blogs" handleDelete ={handleDelete} />

        </div>

    );
}


export default Home;