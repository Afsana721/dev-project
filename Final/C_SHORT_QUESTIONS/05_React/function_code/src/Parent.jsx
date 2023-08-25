import { useState } from 'react'
import Child from './Child'


function Parent(){
  const [ name, setName ] = useState("")

  //create function to handle name change
    const handleNameChange = (newName) => {
      setName(newName);
    }

  return (
    <div>
      <h1>Hello {name}</h1>
           
      <Child onChange = {handleNameChange} />
    </div>
  )
}




// function Parent(){
//   const [ name, setName ] = useState("")
//   return (
//     <div>
//       <h1>Hello {name}</h1>
//       <Child />
//     </div>
//   )
// }

export default Parent