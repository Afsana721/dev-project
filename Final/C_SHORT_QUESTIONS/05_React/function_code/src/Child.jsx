
function Child(props) {
  //create handleInputChange and call the function from props
  const handleChange = (event) => {
    const newValue = event.target.value;
    props.onChange(newValue);
  }
  return (
    <>
      <input 
        type="text" 
        placeholder="Please Enter Your Name"
        onChange={handleChange}
        value={props.value}
        />
    </>
  )
}







// function Child(props) {
//   return (
//     <>
//       <input 
//         type="text" 
//         placeholder="Please Enter Your Name"
//         onChange={props.handleChange}
//         value={props.name}
//         />
//     </>
//   )
// }

export default Child