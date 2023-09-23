require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');

/**
 * GET / Home page
 */

exports.homepage = async (req, res) => {
    try {
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
    //make query to display recipe on the web page
        const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
        const thai = (await Recipe.find({ 'category': 'Thai'})).limit(limitNumber);

        const american = (await Recipe.find({ 'category': 'American'})).limit(limitNumber);

        const chinese = (await Recipe.find({ 'category': 'Chinese'})).limit(limitNumber);

        const food = { latest, thai, american, chinese };  

        console.log(categories); // Add this line to check the data
        res.render('index', { title: 'Cooking Blog - Home', categories, food });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" });
    }
}

/**
 * GET / Categories
 * exploreCategories
 */
exports.exploreCategories = async (req, res) => {
    try {
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);
        console.log(categories); // Add this line to check the data
        res.render('categories', { title: 'Cooking Blog - Categories', categories });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" });
    }
}



/**
 * GET / Categories/:id
 * Categories By Id
 */
exports.exploreCategoriesById = async (req, res) => {
    try {
        let categoryId = req.params.id;
        const limitNumber = 20;
        const categoryById = await Recipe.find({'category':categoryId}).limit(limitNumber);
        console.log(categoryById); // Add this line to check the data
        res.render('categories', { title: 'Cooking Blog - Categories', categoryById });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" });
    }
}


/**
 * GET / recipe/:id
 * Recipe page
 */
exports.exploreRecipe = async (req, res) => {
    try {
        let recipeId = req.params.id;

        const recipe = await Recipe.findById(recipeId)
      
        res.render('recipe', { title: 'Cooking Blog - Recipe', recipe});
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" });
    }
}


/**
 * POST / Search
 * Recipe page
 */
exports.serchRecipe = async(req, res) => {
//serchTerm
    try{
        let searchTerm = req.body.serchTerm;
        let recipe = await Recipe.find({ $text: { $search: searchTerm, $diacriticSensitive: true}});
        res.json(recipe);
    } catch(error) {

    }
    res.send('search', {title: 'Cooking Blog - Search'});
}


/*
async function insertDymmyRecipeData() {
    try {
        await Recipe.insertMany([
            {
            name: "Southern fried chicken",
            description: `This is an incredible fried chicken recipe, one that I’ve 
            subtly evolved from that of my dear friend Art Smith, one of the kings of 
            southern American comfort food. I’ve finished the chicken in the oven, 
            purely because you really do need a big fryer to do it properly, as well as 
            for good temperature control, and this method is much friendlier for home 
            cooking.
            Source: https://www.jamieoliver.com/recipes/chicken-recipes/southern-fried-chicken/`,
            email: "dummy@gmail.com.us",
            ingredients: [
                "4 free-range chicken thighs , skin on, bone in",
                "4 free-range chicken drumsticks",
                "200 ml buttermilk",
                "4 sweet potatoes",
                "200 g plain flour",
                "1 level teaspoon baking powder",
                "1 level teaspoon cayenne pepper",
                "1 level teaspoon hot smoked paprika",
                "1 level teaspoon onion powder",
                "1 level teaspoon garlic powder",
                "2 litres groundnut oil",
                "BRINE",
                "1 tablespoon black peppercorns",
                "25 g sea salt",
                "100 g brown sugar",
                "4 sprigs of fresh thyme",
                "4 fresh bay leaves",
                "4 cloves of garlic",
                "1 teaspoon fennel seeds",
                "1 teaspoon fennel seeds",          
            ],
            category: "Thai",
            image: "https://sweetpeaskitchen.com/wp-content/uploads/2021/04/Best-Southern-Fried-Chicken-Batter-OG-scaled.jpg"
         },
         {
            name: "Veggie pad Thai",
            description: `Pad Thai Is Thailand's Most Recognizable Dish. Learn How You 
            Can Make It At Home! Watch Our Short Video Here To Get An Insider's Tip On 
            Making Pad Thai Perfectly! Healthy Recipes. Vegetarian Recipes. Helping 
            Kids In Bangkok.
            Source: https://www.jamieoliver.com/recipes/vegetable-recipes/veggie-pad-thai/`,
            email: "dummy@gmail.com.us",
            ingredients: [
                "150 g rice noodles",
                "sesame oil",
                "20 g unsalted peanuts",
                "2 cloves of garlic",
                "80 g silken tofu",
                "low-salt soy sauce",
                "2 teaspoons tamarind paste",
                "2 teaspoons sweet chilli sauce",
                "2 limes",
                "1 shallot",
                "320 g crunchy veg such as asparagus, purple sprouting broccoli",
                "2 large free-range eggs",
                "olive oil",
                "dried chilli flakes",
                "½ a mixed bunch of fresh basil, mint and coriander , (15g)",
              ],
            category: "Thai",
            image: "https://img.taste.com.au/sggKm790/taste/2016/11/vegetarian-pad-thai-110735-1.jpeg"
         },

         {
            name: "Sticky Chinese ribs",
            description: `Having super-tender fall-off-the-bone pork ribs, shining with 
            a sticky Chinese glaze, always excites me. I remember when I first tried ribs
             like these – I was about 7 or 8 years old, having a family meal at our local 
             Chinese restaurant, and I remember thinking wow – I’d never tried anything 
             like that before. Bundled with other great dishes like noodles and stir-fried
              rice, it was beyond exciting. My face and hands were absolutely covered in 
              sauce and that’s how you should be after tucking into these little beauties. 
              Get stuck in.
            Source: https://www.jamieoliver.com/recipes/pork-recipes/sticky-chinese-ribs/`,
            email: "dummy@gmail.com.us",
            ingredients: [
                "olive oil",
                "3 tablespoons Chinese five-spice",
                "2 spring onions",
                "2 fresh chillies",
                "1 bunch of radishes",
                "FOR THE GLAZE:",
                "3 red onions",
                "3 star anise",
                "1 level teaspoon Chinese five-spice",
                "4 tablespoons fresh apple juice",
                "3 tablespoons hoisin sauce",
                "2 tablespoons runny honey",
                "olive oil",
                "1 tablespoon tomato ketchup",
                "1 tablespoon rice wine vinegar",
              ],
            category: "Chinese",
            image: "https://www.justonecookbook.com/wp-content/uploads/2019/04/Instant-Pot-Asian-Sticky-Ribs-I-3.jpg"
         },

         {
            name: "South American fishcakes",
            description: `I learnt this recipe from my friend Santos, who comes from Brazil 
            where they make little fritters of this recipe and deep-fry them – more like glorified 
            canapés than fishcakes really. I’ve adapted his recipe slightly to make actual fishcakes 
            – probably the nicest I’ve tasted!
            Source: https://www.jamieoliver.com/recipes/fish-recipes/south-american-fishcakes/`,
            email: "dummy@gmail.com.us",
            ingredients: [
                "1 kg potatoes",
                "1 kg haddock fillets , skin on, scaled and pinboned, ask your fishmonger",
                "140 ml milk",
                "2 bay leaves",
                "1 big bunch of fresh flat-leaf parsley",
                "1 handful of fresh mint",
                "1 fresh red chilli",
                "1 teaspoon fennel seeds",
                "2 lemons , plus extra to serve",
                "2 limes",
                "2 large free-range eggs",
                "115 g plain flour",
                "olive oil",
                "sunflower oil , for deep-frying",
             ],
            category: "American",
            image: "https://thisishowicook.com/wp-content/uploads/2018/03/irish-fish-cod-cakes-recipe-6-of-14-701x1024.jpg"
         },

         {
            name: "Mexican-inspired bowl",
            description: `Preparing several different elements, then bringing it all together in a big 
            bowl of deliciousness gets a thumbs up from me every time. Once you’ve cracked this recipe, 
            try inventing your own flavour extravaganza using the same principle.
            Source: https://www.jamieoliver.com/recipes/rice-recipes/mexican-inspired-bowl/`,
            email: "dummy@gmail.com.us",
            ingredients: [
                "320 g brown rice",
                "1 corn on the cob",
                "1 red onion",
                "2 cloves of garlic",
                "1 fresh jalapeño or green chilli",
                "1 small red pepper",
                "1 fresh red chilli",
                "1 small yellow pepper",
                "1 bunch of fresh coriander for 30g olive oil",
                "1 teaspoon ground cumin",
                "1 teaspoon ground coriander",
                "1 stick of cinnamon",
                "1 x 400 g tin of quality plum tomatoes",
                "1 ripe avocado and 2 limes",
                "extra virgin olive oil",
                "1 x 400 g tin of black beans",
                "natural yoghurt",
                "hot chilli sauce",
                "6 wholemeal tortillas ",
                "½ teaspoon smoked paprika",
             ],
            category: "Mexican",
            image: "https://healthyfitnessmeals.com/wp-content/uploads/2018/09/Mexican-grilled-chicken-bowls-7.jpg"
         },

         
         {
            name: "Indian-style baked chicken",
            description: `Whatever the weather, a little spice is always welcome. With some adult supervision 
            you can make your own Indian-inspired marinade to use on chicken thighs and drumsticks – these 
            cheaper cuts of chicken are packed with flavour and, best of all, easy to eat with your fingers! 
            Serve with salad and flatbreads, and let everyone help themselves.
            Source: https://www.jamieoliver.com/recipes/chicken-recipes/indian-style-baked-chicken/`,
            email: "dummy@gmail.com.us",
            ingredients: [
                "2 cloves of garlic",
                "5 cm piece of ginger",
                "2 fresh red chillies",
                "1 lemon",
                "1 teaspoon ground coriander",
                "1 teaspoon ground turmeric",
                "1 teaspoon garam masala",
                "1 teaspoon ground cumin",
                "2 teaspoons smoked paprika",
                "1 teaspoon ground cumin",
                "1 teaspoon ground coriander",
                "1 teaspoon tomato purée",
                "2 teaspoons natural yoghurt , plus extra to serve",
                "8 free-range chicken pieces-thighs and drumsticks and skin on a few sprigs of fresh coriander",
                "extra virgin olive oil ",
             ],
            category: "Indian",
            image: "https://spicecravings.com/wp-content/uploads/2020/08/Tandoori-Chicken-Square.jpg"
         },

        ]);
    } catch (error) {

    }
}

insertDymmyRecipeData(); */


        /* 
           
        */


// async function insertDymmyCategoryData(){
//     try{
//         await Category.insertMany();
//     }catch(error) {
//         console.log('err', + error);
//     }
// }

// insertDymmyCategoryData();