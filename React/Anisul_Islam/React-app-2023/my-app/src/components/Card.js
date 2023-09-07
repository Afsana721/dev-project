// create variable
const todoTitle = "Call family";
const todoDesc = "Hello, how are you? What about others. What is your next plan?";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

//create component with capital for first letter
  function Card(){
    return   <div className="card">
                <h3 className="cardTitle">{todoTitle}</h3>
                <p className="cardDesc">{todoDesc}</p>
                <p className="cardFooter">{dateName +"/"+ monthName + "/"+ currentYear}</p>
              </div>
  }



    
 


//CSS style
// const headingStyle = {
//       backgroundColor: "purple",
//       color: "white",
//       textAlign: "center",
//       padding: "15px"
  
// }


/* different CSS uses */

    {/* <h1 style={headingStyle}>Todo App</h1>  */}
    {/* <h1 style={{
            backgroundColor: "purple",
            color: "white",
            textAlign: "center",
            padding: "15px"}}>Todo App</h1>
    <h3>{todoTitle}</h3> */}

    //allow import Card from others
    export default Card;