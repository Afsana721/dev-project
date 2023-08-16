import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, { id: uuid(), text: todo }]);
      setTodo('');
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter your todo..."
        />
        <button className="add-btn" onClick={addTodo}>
          Add Todo
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((item) => (
          <li key={item.id}>
            {item.text}
            <button className="delete-btn" onClick={() => deleteTodo(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
