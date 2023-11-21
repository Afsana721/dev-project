		
//importy useState for establishing any state variable
//import useEffect for creaating side effects, that make the component function impure


import { useEffect, useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


//create an App component

function App() {
// create mockdata Array object helps to display initial items  

  const mockData = [
      {id: 0, description: "Visit New zeland", isComplete:false},
      {id: 1, description: "Backpack through Europe", isComplete:false},
  ];

  //create user as a vriable &  endpoint url variable.

  const myUser = "asef";
  const endpoint = "https://accbucketlists-3d666dd75daa.herokuapp.com/user/${myUser}/bucket";

  //todo state variable stores the sctive list of items: destructuring Array objects & store todos
    const[todos, settodos] = useState(mockData);
  
  //create a variable to copy what the user typed in the input box, after user imput comes then useState will hold the values

    const[newTodo, setNewTodo] = useState("");

    //  Read(Get http call) - Put all side effects in the  useEffect hook function : allows to perform side effects in the components
    //  callback function that is to be run when the useEffect function runs.
    //  making a http request to the backend
    //  result of fetch is a Promise (think a contract): fetch() method returns a Promise object that resolves to a Response object.
    //  fetch uses endpoint / url to fetch user resource/ resources.
    //  then() function works after getting successful response as a return by fetch. Then work with the Promise object (res - is response & parse to json object)
    // dependancy Array
    useEffect(
       () => {
        fetch(endpoint)
        .then(res => res.json())                                                      
        .then(items => settodos(items))                                         //then() take the parse json data as items and set settodos state as items
        .catch(e => console.log('fetch from the effect failed', e))             //catch() function handle exception uses e exception object and pass error message
        
      }, 
      []

    )

    // copies what the user typed in the input box in html page
      const handleChange = (event) => {
        setNewTodo(event.target.value);
      };

      // create / POST http call - save the new item to the state
      const handleSubmit = (event) => {
        event.preventDefault();

      // inform the backend about a new todo; this is done first before changing the frontend
        fetch(endpoint,  {
          method: 'POST',
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({ description: newTodo})
        })
        .then(res => res.json())
        .then(data => {
          setTodos([...todos, data])
          // empty out the input box
          setNewTodo("")
        })
        .catch(e => console.log("error while creating a new item:", e))
        
        
      };

      // Update / PUT http call - toggle the completion status of an existing item

      const handleClick =(idArgument) => {
        // inform the backend first
        fetch(endpoint + '/' +idArgument, {method: 'PUT'})                        // add existing id to update specific data
        .then( () => {
          //make a true copy
          let copyOfTodos = [...todos];

          // obtain a ref to the object corresponding to clicked todo li tag
          let clickedTodoObject = copyOfTodos.find((t) => t.id === idArgument );
          //consloe.log("clickedTodoObject is ", clickedTodoObject);
          // toggle the status
          clickedTodoObject.isComplete = !clickedTodoObject.isComplete;

          //replace the todo state with altered copy
          settodos(copyOfTodos);
        })

        .catch(e => console.log("error with toggle sttus: ", e))
      };


      // delete / Delete http call an item
      const handleDelete = (id) => {
        // inform the backend
        fetch(endpoint + '/' + id,  {method : 'DELETE'})
        .then(() => {
        // we cannot edit the todos state array as it already been rendered, hence we make a copy of it
        let copyOfTodo = [...todos];

        //create a filtered list, rejecting teh item we are deleting
        let filteredTodos = copyOfTodo.filter((t) => t.id !== id);
        
        setTodos(filteredTodos);

        })
        .catch(e => console.log("error with deleting : ", e))
      };

      //creating a collection of items ready to be rendered
      const todoList = todos.map((todo) => {
        return (
          <li 
          key={todo.id}
          onClick={ () => {
            handleClick(todo.id);
          }}
          className={todo.isComplete ? "completed" : ""}>
            {todo.description}
            <span style={{ paddingLeft: "10px" }}
            onClick={(event) => {
              event.stopPropagation();
              handleDelete(todo.id);

            }}>

            </span>

          </li>
          
        );
      });

  // return renders the collection of items created above

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <imput
            className="todo-input"
            autoComplete ="off"
            type="text"
            name="newTodo"
            placeholder="What needs to be done?"
            onChange ={handleChange}
            value={newTodo} />

            <input type="submit" className="save-button" />

          </form>

          <div className="todo-content">
            <ol>{todoList}</ol>
          </div>
        </div>
    
    );
}

export default App;
