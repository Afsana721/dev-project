

const todoTitle = "Call Family"
  const todoDes = "Details about the card information"
  const date = new Date();
  const dateName = date.getDate();
  const monthName = date.getMonth();
  const currentYear = date.getFullYear();

// create a function for the card component, so that we can reuse it. 
// create a function name as Card and get the return card component code value, so we can use it multiple time.
// use props a properites of objects.
// destructuring props properties -> titleText & descText


  function Card(props) {

    const {titleText, descText} = props;   //destructuring props object


    console.log(props);

   // refer props: <h3 className="cardTitle">{props.titleText}</h3>  
   // no need to refer props after creating -> const (titleText, descText) = props;
    return (
      <div className="card">
        <h3 className="cardTitle">{titleText}</h3>              
        <p className="cardDesc">{descText}</p>
        <p className="cardFooter">{dateName + "/" + monthName + "/" + currentYear}</p>
      </div>

    );
  };
//give the accessibility for the card component using export keyword, so that other jsx file can use it. 
  export default Card;