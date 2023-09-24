document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipeForm');
    const recipesContainer = document.getElementById('recipesContainer');

    // Default recipes
    const defaultRecipes = [
        // ... (your default recipes)
    ];

    // Display the default recipes
    defaultRecipes.forEach(recipe => {
        addRecipeCard(recipe);
    });

    recipeForm.addEventListener('submit', event => {
        event.preventDefault();  // Prevents the default form submission behavior

        // Gather the recipe data from the form
        const recipe = {
            title: document.getElementById('recipeName').value,
            ingredients: document.getElementById('ingredients').value,
            instructions: document.getElementById('instructions').value,
            image: document.getElementById('recipeImage').value
        };

        // Call the function to add the recipe card
        addRecipeCard(recipe);

        // Reset the form
        recipeForm.reset();
    });

    function addRecipeCard(recipe) {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <h3>${recipe.title}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.substring(0, 100)}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions.substring(0, 100)}</p>
            <img src="${recipe.image}" alt="Recipe Image">
            <button class="more-button" onclick="toggleRecipe(this)">Click for more</button>
            <div class="full-recipe" style="display: none;">
                <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            </div>
        `;

        recipesContainer.appendChild(card);
    }

    function toggleRecipe(button) {
        const fullRecipe = button.nextElementSibling;
        if (fullRecipe.style.display === 'none' || fullRecipe.style.display === '') {
            fullRecipe.style.display = 'block';
            button.innerText = 'Click to hide';
        } else {
            fullRecipe.style.display = 'none';
            button.innerText = 'Click for more';
        }
    }
});
