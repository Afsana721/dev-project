import { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const myUser ='piyush'

function App() {
  //mockdata helps to display initial items
  const mockData = [
    { id: 1, description: "Visit New Zealand", isComplete: false },
    { id: 2, description: "Backpack through Europe", isComplete: false },
  ];

  useEffect(
    () => {
      fetch(`https://accbucketlists-3d666dd75daa.herokuapp.com/${myUser}/bucket`)
      .then(
      //got a successful response from the fetch
      res => res.json()
        
      )
      //array of items for a user returned by the backend
      .then(data =>setTodos(data)
      )
      //if somthing goes wrong, like statusCode is not 1xx, 2xx, 3xx depends on the http call
      .catch(
        err => {
          console.log('fetch from teh effect failed:', err)
        }
      )
    },
    //dependancy arry
    //1.put something in it, then useEffect will run if that something changes
    //2. runs once initially when the component is loaded (if it's an empty array)
    //3. runs every time the render happens (very freq) (if this array is completely omitted)

    []
  )

  //todo
  const [todos, setTodos] = useState(mockData);
  //You copy what the user typed in the input box
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };
//submit items
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodos = [...todos, { id: Date.now(), description: newTodo, isComplete: false }];
    setTodos(newTodos);
    setNewTodo("");
  };

  const handleClick = idArgument => {
    //make a true copy
    let copyOfTodos = [...todos];
    //obtain a ref to the object corresponding to clicked todo li
    let clickedTodoObject = copyOfTodos.find(t => t.id === idArgument)
    console.log("clickedTodoObject is ", clickedTodoObject);
    //toggle the status
    clickedTodoObject.isComplete = !clickedTodoObject.isComplete;
    //replace the todo state with altered copy
    setTodos(copyOfTodos);
  }

  // add the delete handle funciton to our trashcan
  const handleDelete = (id) => {
    //make a copy of the tody 
    let copyOfTodos = [...todos]

    //create a filtered list, rejecting the item after deleting
    let filteredTodos = copyOfTodos.filter(t => t.id !== id);

    //now set the state to hold the new list after filtering / deleting todos list
    setTodos(filteredTodos);

  }

// using stopPropagation() method prevent an event
  const todoList = todos.map((todo) => {
    return (
      <li key={todo.id} onClick={() => { handleClick(todo.id) }} className={todo.isComplete ? "completed" : ""}>
        {todo.description}
        <span
          style={{ paddingLeft: "10px" }}
          onClick={(event) => {
            event.stopPropagation();
            handleDelete(todo.id)
          }}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </span>
      </li>
    );
  });

//renders teh collection of item
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          autoComplete="off"
          type="text"
          name="newTodo"
          placeholder="What needs to be done?"
          onChange={handleChange}
          value={newTodo}
        />
        <input type="submit" className="save-button" />
      </form>
      <div className="todo-content">
        <ol>{todoList}</ol>
      </div>
    </div>
  );
}

export default App;