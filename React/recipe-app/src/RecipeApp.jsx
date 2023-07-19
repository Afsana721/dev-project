
import '../RecipeApp.css'
import Recipe from './Recipe'


//create a function that returns recipeApp

function RecipeApp() {
  
  return (
    <div className='App'>
   
    <Recipe 
   
    image ='https://s3.amazonaws.com/accsoftwarebootcamp.com/7aco0Iu.jpeg'
    title = "Pasta"
    ingredients = {['flour', 'water', 'salt', 'eggs', 'sauce']}
    steps = {[
            {"step 1" : "Combine flour and salt in a medium bowl. Make a well in the center and add beaten egg. Mix well untill a stiff dough forms, adding up to 2 tablespoons water if needed. "},
            {"step 2" : "Knead dough on lightly floured surface until smooth, 3 to 4 minutes."},
            {"step 3": "Roll dough by hand or with a pasta machine to desired thickness, then cut into strips for desired width and length."}
          ]}
    />
    </div>

  )
}

//export default App

export default RecipeApp;
