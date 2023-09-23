


//create varibles to get by React Dom

//const todoTitle = "Call Family";
//const todoDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";


const date = new Date();
const cYear = date.getFullYear();
const cMonth = date.getMonth();
const cdate = date.getDate();
const currentTime = cdate + "/" + cMonth + "/" + cYear;



//create a function to use as a components, so that we can use Card component multiple time. 
//use props and destructuring props
  function Card(props) {
    //destructuring props
    const { titleText, descText } = props;
   
    return(
    <div className="card">
      {/* <h3 className='cardTitle'>{props.titleText}</h3>
      <p className='cardDesc'>{props.descText}</p> */}

  {/* after destructuring props no need to use props.value keyword. */}

      <h3 className='cardTitle'>{titleText}</h3>
      <p className='cardDesc'>{descText}</p>
      <p className='cardFooter'>{currentTime}</p> 
  </div>
    )
  }

// export Card component to others / index.js file
export default Card;