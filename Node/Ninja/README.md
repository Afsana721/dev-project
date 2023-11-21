React: Javascript library used to create websites and allows us to easily create Single page Apps (SPA's) for short.
That means the server only ever needs a single HTML page to the browser for the website to run fully and then react takes over and manages the whole website in the browser including any kind of website data or user interactivity such click events and event routing from page to page. So user can still navigate from page to page by clicking links in the web site but those new pages are not then sent to the browser from the server, instead react changes all the content in the browser depending on the route of the URL of the link that the user clicks. 

For Example: If a user clicks on a contact link then react will look at that URL - 
/contact and then maybe inject a contact form onto the page. So this process of react doing all of the work in the browser means that the new pages are loaded in really quickely an dit results in a very speedy user experience. Now, this process is in contrast to traditional websites whereby every link a user clicks sends a request to the server for a new HTML page. 
So, if we click on a contact link, traditionally without react, it would send a request to the server and server would look at this URL and then it was send back an html page to the browser and this will be the same for every page.

We'll using : create react app to create our starter project.
Use the the command from command line: "npx create-react-app dojo-blog"
Here, npx allow the "create-react-app" on the internet and install a new React project called "dojo-blog" in the specify location. 

In React we create component: 
1. Component is a function which returns a JSX template and that function is exported at the bottom of the function file. We can use "simple React Snippets" to make a easy way by installing it from the extensions in our project. 
then we can use it: like: sfc +tab button --> give a functional components layout.

function App() {
  //create a function variable
  const title = 'Welcome to the new blog';
  const likes = 50;
  //const person = { name: 'Asef', age: 12};
  const link = "https://www.google.com";
  return (
    <div className="App">
      <div className='content'>
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{ Math.random() * 5 }</p>
        <p>{ 123456 }</p>
        <p>{ "Afsana" }</p>
        <a href={ link }>Google Site</a>

       </div>
    </div>
  );
}

export default App;


CSS: inside component use CSS style -> we need to use : style { {}} - first one for JSX dynamic value, then {} -because CSS properities is Javascript Object. 

Example: Inline styling : -----------------
    const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The DoJo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</a>


            </div>
        </nav>
      );
}


* State / Data : When we talk about the state of a component. We just mean the data being used in the component at that point in time. Now, that state could be an array or values, booleans, String, Objects or any other data that our component uses. Now, we created some variables and we used them in our templates before which worked but what if we had variables or data we wanted to change over time on in reaction to some event like a user clicking a button.
But when user change the value by any event, does the changes reactive? That means, it will change the browser side by react to change the browser tmplate. That means we have to do something that will be reaction and update the browser template. 
    To make it reactive we need state concept to hoot it on the previous opsition to make it reactive. React need to watch it and make an action to change it and redender by react with the new value.
So, to make the value is reactive, so, that react detects that and re-renders it and change the templact states / properites. 

So, we need to use something called Hook in react, and called 'useState' in react. In react, it is a special type of function that does a certain job. We can tell hook by its name by the word use. 
And use state hook gives us a way to make a reactive value and also provides us with a way to change that value when user want.

    So, inorder to 'use state hook' , first we need to import it on the top of the file.
    And we can destructure the useState hook, form the react library. Then we can use in our file component.

Example: 
    import { useState } from "react";



const Home = () => {
    //let name = "Masud";
//use useState funtion and invoking it, then we need to maka value for it.
//first value is the name and second value is a function which we can use to change the name as state value.
    const [name , setName ] = useState('Masud');

    const handleClick = () =>{
       setName('Khan')
    }
   
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onClick={ handleClick }>Click me</button>
           
        </div>
     );
}
 
export default Home;


Props: props are a way to pass data from one component a parent component into a child component. we want to pass data to the component where we use this component from another file.
So, we do that is by making a pperty name on this tag.

useEffect() -- it allow call back function. We could do something like fetch data or communicate with some kind of authentication service and those things are known as side effect in react. And this function firs on every render and when we changed the data, it re-render this to the dom. 
    useEffect(() => {

    })

This is useEffect() function is really useful for any kind of code that we need to run at every render. Again it can be used for thing like fetching data.