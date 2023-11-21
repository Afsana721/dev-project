import { useState, useEffect } from "react";
import BlogList from "./BlogList";



const Home = () => {
//create a blogs array object data to display on the home component
//use map method from JS to cycles through an array, it can do something with each item in the array.
/* Now, we want to do is return a bit of template for each item as we iterate through each one
     and then that template is going to be output to the browser. Inside the template we can output
        javascript, or we can write javascript. We do that using '{ }' braces.*/

    const [ blogs , setBlogs ] = useState([
        { title: "My new website", body: "lorem ipsum ...", auther: "Asef", id: 1},
        { title: "Welcome party!", body: "lorem ipsum ...", auther: "Masud", id: 2},
        { title: "Web dev top tips", body: "lorem ipsum ...", auther: "Asef", id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
   
    useEffect(() => {
        console.log("use effect ran");
        console.log(blogs);
    });

    return ( 
        <div className="home">
           <BlogList blogs = {blogs} title = "All blogs"  handleDelete= { handleDelete }/>
           
        </div>
     );
}
 
export default Home;