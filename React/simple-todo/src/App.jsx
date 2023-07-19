import { useState } from 'react'
import './App.css'

// Presentational Component - it is only for HTML & CSS
//                          - no dynamic nature, no state, no handlers
function TodoItem(props){
  return <li className={props.isComplete ? "completed" : ""}>
    {props.description}
  </li>
}

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      description: 'Learn SQL',
      isComplete: true
    }, {
      id: 2,
      description: 'Learn AWS',
      isComplete: false
    }
  ])

  return (
    <>
      <h3>My BucketList App</h3>
      <ol>
        {
          items.map(itemObj => (
            <TodoItem key={itemObj.id} {...itemObj}  />
          ))
        }
      </ol>
    </>
  )
}

export default App