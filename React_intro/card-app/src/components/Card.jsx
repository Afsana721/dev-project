

const todoTitle = "Call Family"
  const todoDes = "Details about the card information"
  const date = new Date();
  const dateName = date.getDate();
  const monthName = date.getMonth();
  const currentYear = date.getFullYear();

// create a function for the card component, so that we can reuse it. 
// create a function name as Card and get the return card component code value, so we can use it multiple time.

  function Card() {

    return (
      <div className="card">
        <h3 className="cardTitle">{todoTitle}</h3>
        <p className="cardDesc">{todoDes}</p>
        <p className="cardFooter">{dateName + "/" + monthName + "/" + currentYear}</p>
      </div>

    );
  };
//give the accessibility for the card component using export keyword, so that other jsx file can use it. 
  export default Card;