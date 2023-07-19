
import PropTypes from 'prop-types';
import '../recipe.css'

// create a function to return h1 text

function Recipe(props) {
    const { title, ingredients, steps } = props;
    const ingredientsList = ingredients.map((ing, index) => {
        return <li key ={index}>{ing}</li>
    });
    
    const stepsList = steps.map((step, index) => {
        let stepName = Object.keys(step)[0];
        let stepValue = step[stepName];

        return (
            <div key ={index}>
                <strong>{stepName}:</strong>
                <br />
                <p key ={index}>{stepValue}</p>
            </div>
        )
    });

    return (
        <div>
            <h1>Recipe for {title}</h1>
            <img className="Croppedimage" src ="https://s3.amazonaws.com/accsoftwarebootcamp.com/7aco0Iu.jpeg" alt="pasta image" width= "20%" >
            </img>
            <h3>Ingredients Needed:</h3>
            <ul>
                {ingredientsList}
            </ul>
            {stepsList}
        </div>
    )
}

Recipe.prototype = {
    title: PropTypes.string.isRequired,
    ingredients: 
    PropTypes.arrayOf(PropTypes.object)
}
   
    


export default Recipe;