//import useState object from react library & destructured
import { useState} from 'react';
import BlogList from './BlogList';


const Home = () => {
    //destructured the Array
    const [ blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Asef', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Asef', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    return ( 
        <div className='home'>
           <BlogList blogs= {blogs} title="All Blogs!" handleDelete= {handleDelete} />
    {/* filter the blogs array */}
           {/* <BlogList blogs= {blogs.filter((blog) => blog.author === 'Asef')} title="Asef's blogs" /> */}
        </div>
     );
}
 





export default Home;



// const Home = () => {

// //create useState destructured to make name data reactive- so, it will be changed
//     //let name = "Asef";
//     const [name, setName] = useState('Asef');
//     const [ age, setAge] = useState('12');

// // create a function to click the button with the event 
// const handleClick = () => {
//    setName('Masud');
//    setAge(50);
// }
//     return ( 
//         <div className="home">
//             <h2>HomePage</h2>
//             <p>{ name } is { age } years old.</p>
//             {/* <p>{ age}</p> */}
//             <button onClick={handleClick}>Click me</button>
//             {/* not work like : <button onClick={handleClickAgain(name)}>Click me again</button> */}
        
//             {/* <button onClick={(e) => handleClickAgain("Asef", e)}>Click me again</button>     */}
//         </div>
//      );
// }
 
