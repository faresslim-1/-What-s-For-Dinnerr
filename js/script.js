// 1-select all elements
var mealRating = document.getElementById("mealRating");
var mealReview = document.getElementById("mealReview");

var prepTime = document.getElementById("prepTime");
var cookTime = document.getElementById("cookTime");
var servingTime = document.getElementById("servingTime");

var mealImage = document.getElementById("mealImage");

var difficulty = document.getElementById("difficulty");
var cuisine = document.getElementById("cuisine");

var recipeTitle = document.getElementById("recipeTitle");
var recipeDesc = document.getElementById("recipeDesc");

var timeWarning = document.getElementById("timeWarning");


var calories = document.getElementById("calories");
var protein = document.getElementById("protein");
var carbs = document.getElementById("carbs");
var fat = document.getElementById("fat");
var fiber = document.getElementById("fiber");
var sodium = document.getElementById("sodium");


// 5 meals
var recipes = [
    {
        rating: "4.5",
        reviews: "(156 reviews)",
        prep: "20 min",
        cook: "35 min",
        serve: "2 People",
        image: "./imgs/food4.jpg",
        difficulty: "Easy",
        cuisine: "Italian",
        title: "Caprese Sandwich",
        desc: "Fresh Italian sandwich with mozzarella, tomato, and basil.",
        timeWarning: "",
        ingredients: [
            "1 ciabatta bread",
            "200g fresh mozzarella",
            "2 large tomatoes",
            "Fresh basil leaves",
            "3 tbsp pesto",
            "2 tbsp balsamic glaze",
            "Olive oil",
            "Salt & pepper"
        ],

        steps: [
            "Slice bread horizontally.",
            "Toast bread lightly.",
            "Spread pesto on both sides.",
            "Add mozzarella, tomato, and basil.",
            "Drizzle with oil & balsamic.",
            "Close sandwich and serve."
        ],

        nutrition: {
            calories: "480 kcal",
            protein: "22g",
            carbs: "48g",
            fat: "22g",
            fiber: "3g",
            sodium: "680mg"
        },

        tips: [
            "Use ripe tomatoes.",
            "Don't over-toast the bread.",
            "Buffalo mozzarella tastes better.",
            "Add salami for extra flavor."
        ]
    },

    {
        rating: "4.9",
        reviews: "(220 reviews)",
        prep: "10 min",
        cook: "15 min",
        serve: "4 People",
        image: "./imgs/food2.webp",
        difficulty: "Medium",
        cuisine: "Mexican",
        title: "Chicken Quesadilla",
        desc: "Crispy tortilla stuffed with cheese and chicken.",
        timeWarning: null,
        ingredients: [
            "2 tortillas",
            "1 cup shredded chicken",
            "1 cup cheddar cheese",
            "1/4 cup onions",
            "1/4 cup bell pepper",
            "1 tbsp butter",
            "Spices",
            "Salt"
        ],

        steps: [
            "Heat butter in a pan.",
            "Add veggies and sauté.",
            "Add chicken and spices.",
            "Fill tortillas with mixture.",
            "Toast until crispy.",
            "Slice and serve."
        ],

        nutrition: {
            calories: "520 kcal",
            protein: "30g",
            carbs: "40g",
            fat: "26g",
            fiber: "4g",
            sodium: "720mg"
        },

        tips: [
            "Use fresh tortillas.",
            "Add jalapeños for spice.",
            "Use two types of cheese.",
            "Serve with sour cream."
        ]
    },

    {
        rating: "4.7",
        reviews: "(178 reviews)",
        prep: "12 min",
        cook: "20 min",
        serve: "3 People",
        image: "./imgs/food3.jpg",
        difficulty: "Easy",
        cuisine: "Asian",
        title: "Beef Stir Fry",
        desc: "Quick beef stir fry with veggies and soy sauce.",
        timeWarning: "",
        ingredients: [
            "300g sliced beef",
            "1 cup broccoli",
            "1 cup carrots",
            "1 onion",
            "2 tbsp soy sauce",
            "1 tbsp honey",
            "Olive oil",
            "Salt & pepper"
        ],

        steps: [
            "Heat pan with oil.",
            "Add beef and cook.",
            "Add veggies.",
            "Pour soy sauce & honey.",
            "Stir until cooked.",
            "Serve hot."
        ],

        nutrition: {
            calories: "450 kcal",
            protein: "32g",
            carbs: "25g",
            fat: "20g",
            fiber: "5g",
            sodium: "600mg"
        },

        tips: [
            "Slice beef thin.",
            "Cook on high heat.",
            "Don't overcook veggies.",
            "Add sesame seeds for flavor."
        ]
    },

    {
        rating: "5.0",
        reviews: "(310 reviews)",
        prep: "8 min",
        cook: "0 min",
        serve: "1 People",
        image: "./imgs/food5.jpg",
        difficulty: "Easy",
        cuisine: "American",
        title: "Avocado Toast",
        desc: "Healthy toast with smashed avocado.",
        timeWarning: null,
        ingredients: [
            "1 bread slice",
            "1 avocado",
            "1 tsp lemon",
            "Salt",
            "Pepper",
            "Chili flakes",
            "Olive oil",
            "Tomato slice"
        ],

        steps: [
            "Toast bread.",
            "Mash avocado.",
            "Add lemon and seasoning.",
            "Spread on toast.",
            "Add tomato slice.",
            "Serve fresh."
        ],

        nutrition: {
            calories: "320 kcal",
            protein: "5g",
            carbs: "28g",
            fat: "20g",
            fiber: "7g",
            sodium: "300mg"
        },

        tips: [
            "Use ripe avocado.",
            "Add egg for protein.",
            "Use sourdough bread.",
            "Drizzle with olive oil."
        ]
    },

    {
        rating: "4.6",
        reviews: "(140 reviews)",
        prep: "5 min",
        cook: "10 min",
        serve: "5 People",
        image: "./imgs/food6.webp",
        difficulty: "Easy",
        cuisine: "Mediterranean",
        title: "Greek Yogurt Bowl",
        desc: "A refreshing yogurt bowl with fruits & honey.",
        timeWarning:null,
        ingredients: [
            "1 cup Greek yogurt",
            "1 banana",
            "Strawberries",
            "Honey",
            "Granola",
            "Walnuts",
            "Chia seeds",
            "Blueberries"
        ],

        steps: [
            "Add yogurt to bowl.",
            "Slice fruit.",
            "Add granola.",
            "Drizzle honey.",
            "Top with nuts.",
            "Serve chilled."
        ],

        nutrition: {
            calories: "390 kcal",
            protein: "18g",
            carbs: "50g",
            fat: "12g",
            fiber: "8g",
            sodium: "90mg"
        },

        tips: [
            "Use cold yogurt.",
            "Add different fruits.",
            "Use raw honey.",
            "Add coconut flakes."
        ]
    },
    {
        rating: "4.8",
        reviews: "(190 reviews)",
        prep: "15 min",
        cook: "20 min",
        serve: "3 People",
        image: "./imgs/food8.jpg",
        difficulty: "Medium",
        cuisine: "Italian",
        title: "Spicy Shrimp Pasta",
        desc: "Creamy pasta with garlic, shrimp, and chili flakes.",
        timeWarning: "",
        ingredients: [
            "200g pasta",
            "250g shrimp",
            "3 garlic cloves",
            "1 cup cream",
            "1 tbsp chili flakes",
            "2 tbsp parmesan",
            "Olive oil",
            "Salt & pepper"
        ],

        steps: [
            "Boil pasta until al dente.",
            "Cook shrimp in olive oil.",
            "Add garlic and chili flakes.",
            "Pour cream and simmer.",
            "Add pasta and mix.",
            "Top with parmesan."
        ],

        nutrition: {
            calories: "540 kcal",
            protein: "34g",
            carbs: "52g",
            fat: "22g",
            fiber: "3g",
            sodium: "580mg"
        },

        tips: [
            "Don’t overcook shrimp.",
            "Use fresh garlic.",
            "Add lemon zest for freshness.",
            "Use fettuccine for best texture."
        ]
    },
    {
        rating: "4.4",
        reviews: "(90 reviews)",
        prep: "5 min",
        cook: "7 min",
        serve: "1 People",
        image: "./imgs/food8.jpg",
        difficulty: "Easy",
        cuisine: "French",
        title: "Veggie Omelette",
        desc: "Fluffy omelette packed with vegetables.",
        timeWarning:null,
        ingredients: [
            "2 eggs",
            "1/4 cup bell peppers",
            "1/4 cup onions",
            "1/4 cup mushrooms",
            "2 tbsp milk",
            "1 tbsp butter",
            "Salt",
            "Pepper"
        ],

        steps: [
            "Whisk eggs with milk.",
            "Melt butter in a pan.",
            "Add chopped veggies.",
            "Pour egg mixture.",
            "Cook until fluffy.",
            "Fold and serve."
        ],

        nutrition: {
            calories: "260 kcal",
            protein: "14g",
            carbs: "10g",
            fat: "18g",
            fiber: "2g",
            sodium: "320mg"
        },

        tips: [
            "Cook on low heat.",
            "Use fresh veggies.",
            "Add cheese for richness.",
            "Don’t overmix eggs."
        ]
    },
    {
        rating: "4.9",
        reviews: "(260 reviews)",
        prep: "12 min",
        cook: "18 min",
        serve: "2 People",
        image: "./imgs/food9.jpg",
        difficulty: "Medium",
        cuisine: "Asian",
        title: "Teriyaki Chicken Bowl",
        desc: "Juicy chicken served with rice and veggies in teriyaki sauce.",
        timeWarning: "",
        ingredients: [
            "250g chicken breast",
            "1 cup rice",
            "1/2 cup broccoli",
            "1/2 cup carrots",
            "3 tbsp teriyaki sauce",
            "1 tbsp honey",
            "1 tbsp sesame oil",
            "Sesame seeds"
        ],

        steps: [
            "Cook rice.",
            "Sauté chicken.",
            "Add veggies.",
            "Pour teriyaki & honey.",
            "Simmer until glazed.",
            "Serve with sesame seeds."
        ],

        nutrition: {
            calories: "480 kcal",
            protein: "36g",
            carbs: "54g",
            fat: "12g",
            fiber: "4g",
            sodium: "700mg"
        },

        tips: [
            "Use boneless chicken.",
            "Add ginger for aroma.",
            "Don’t burn the glaze.",
            "Serve immediately."
        ]
    },
    {
        rating: "4.6",
        reviews: "(130 reviews)",
        prep: "10 min",
        cook: "0 min",
        serve: "2 People",
        image: "./imgs/food7.jpg",
        difficulty: "Easy",
        cuisine: "American",
        title: "Classic Caesar Salad",
        desc: "Crisp lettuce with creamy Caesar dressing.",
        timeWarning:null,
        ingredients: [
            "2 cups romaine lettuce",
            "1/2 cup croutons",
            "1/4 cup parmesan",
            "2 tbsp Caesar dressing",
            "1 tbsp lemon",
            "Black pepper",
            "Olive oil",
            "Salt"
        ],

        steps: [
            "Chop lettuce.",
            "Add croutons.",
            "Drizzle dressing.",
            "Add lemon.",
            "Mix well.",
            "Top with parmesan."
        ],

        nutrition: {
            calories: "310 kcal",
            protein: "9g",
            carbs: "20g",
            fat: "22g",
            fiber: "3g",
            sodium: "410mg"
        },

        tips: [
            "Use fresh lettuce.",
            "Toast your own croutons.",
            "Add grilled chicken.",
            "Use real parmesan."
        ]
    },
    {
        rating: "4.8",
        reviews: "(200 reviews)",
        prep: "5 min",
        cook: "0 min",
        serve: "1 People",
        image: "./imgs/food7.webp",
        difficulty: "Easy",
        cuisine: "Tropical",
        title: "Mango Smoothie",
        desc: "Refreshing creamy mango drink.",
        timeWarning:null,
        ingredients: [
            "1 mango",
            "1 cup milk",
            "1 tbsp honey",
            "1/2 cup ice",
            "2 tbsp yogurt",
            "Pinch cinnamon",
            "Vanilla drop",
            "Salt pinch"
        ],

        steps: [
            "Cut mango.",
            "Add all to blender.",
            "Blend until smooth.",
            "Taste sweetness.",
            "Adjust milk.",
            "Serve cold."
        ],

        nutrition: {
            calories: "280 kcal",
            protein: "6g",
            carbs: "52g",
            fat: "5g",
            fiber: "4g",
            sodium: "70mg"
        },

        tips: [
            "Use ripe mango.",
            "Add more ice for thickness.",
            "Use almond milk if needed.",
            "Serve instantly."
        ]
    }

];

(function(){
    randomRecipe();
})();

function displayRecipe(index) {
    var r = recipes[index];

    recipeTitle.innerHTML = r.title;
    recipeDesc.innerHTML = r.desc;

    difficulty.innerHTML = r.difficulty;
    cuisine.innerHTML = r.cuisine;

    mealRating.innerHTML = r.rating;
    mealReview.innerHTML = r.reviews;

    prepTime.innerHTML = r.prep;
    cookTime.innerHTML = r.cook;
    servingTime.innerHTML = r.serve;
    mealImage.src = r.image;

    if (r.timeWarning!=null) {
        timeWarning.classList.remove("d-none");
    }
    else {
        timeWarning.classList.add("d-none");

    }
    // ingredients
    var ingHTML = "";
    for (var i = 0; i < r.ingredients.length; i++) {
        ingHTML += `
        <li class="list-unstyled d-flex  mb-3">
                                        <div class=" main-bg rounded-circle list-number">${i + 1}</div>
                                        <span>${r.ingredients[i]}</span>
                                    </li>
                                    `
    }

    document.getElementById("ingredientsList").innerHTML = ingHTML;

    // instructions
    var insHTML = "";
    for (var i = 0; i < r.steps.length; i++) {
        insHTML += `
        <div class="d-flex align-items-start   mb-3">
                                    <div class="main-bg  instruction-num d-flex justify-content-center align-items-center flex-shrink-0  text-white rounded-4 ">
                                        ${i + 1}
                                    </div>
                                    <div>
                                        <p>${r.steps[i]}</p>
                                    </div>
        </div>
        `;
    }
    document.getElementById("instructionsList").innerHTML = insHTML;

    // nutrition

    // var nutritionHTML="";
    // for(var i=0;i<r.nutrition.length;i++){
    //     nutritionHTML+=`
    //     <div class="col-md-6">
    //                                     <div class="nutrition-item d-flex justify-content-between">
    //                                         <div class="d-flex align-items-center">
    //                                             <div
    //                                                 class="nutrion-icons flame-bg d-flex justify-content-center align-items-center rounded-3 me-3 ">
    //                                                 <i class="fa-solid  fa-fire-flame-curved main-color"></i>
    //                                             </div>
    //                                             <span class="fa-sm text-secondary fw-bold">Calories</span>
    //                                         </div>
    //                                         <span class="fw-bold" id="calories">${r.nutrition.calories[i]}</span>
    //                                     </div>

    //     </div>
    //                                 <div class="col-md-6">
    //                                     <div class="nutrition-item d-flex justify-content-between">
    //                                         <div class="d-flex align-items-center">
    //                                             <div
    //                                                 class="nutrion-icons blue-bg d-flex justify-content-center align-items-center rounded-3 me-3 ">
    //                                                 <i class="fa-solid  fa-dumbbell blue-color"></i>
    //                                             </div>
    //                                             <span class="fa-sm text-secondary fw-bold">Protien</span>
    //                                         </div>
    //                                         <span class="fw-bold"  id="protein">${r.nutrition.protein[i]}</span>
    //                                     </div>

    //                                 </div>

    //                                 <div class="col-md-6">
    //                                     <div class="nutrition-item d-flex justify-content-between">
    //                                         <div class="d-flex align-items-center">
    //                                             <div
    //                                                 class="nutrion-icons yellow-bg d-flex justify-content-center align-items-center rounded-3 me-3 ">
    //                                                 <i class="fa-solid  fa-wheat-awn yellow-color"></i>
    //                                             </div>
    //                                             <span class="fa-sm text-secondary fw-bold" >Carbohydrates</span>
    //                                         </div>
    //                                         <span class="fw-bold" id="carbs">${r.nutrition.carbs[i]}</span>
    //                                     </div>

    //                                 </div>

    //                                 <div class="col-md-6">
    //                                     <div class="nutrition-item d-flex justify-content-between">
    //                                         <div class="d-flex align-items-center">
    //                                             <div
    //                                                 class="nutrion-icons red-bg d-flex justify-content-center align-items-center rounded-3 me-3 ">
    //                                                 <i class="fa-solid  fa-droplet red-color"></i>
    //                                             </div>
    //                                             <span class="fa-sm text-secondary fw-bold">Fat</span>
    //                                         </div>
    //                                         <span class="fw-bold" id="fat">${r.nutrition.fat[i]}</span>
    //                                     </div>

    //                                 </div>

    //                                 <div class="col-md-6">
    //                                     <div class="nutrition-item d-flex justify-content-between">
    //                                         <div class="d-flex align-items-center">
    //                                             <div
    //                                                 class="nutrion-icons green-bg d-flex justify-content-center align-items-center rounded-3 me-3 ">
    //                                                 <i class="fa-solid  fa-droplet green-color"></i>
    //                                             </div>
    //                                             <span class="fa-sm text-secondary fw-bold">Fiber</span>
    //                                         </div>
    //                                         <span class="fw-bold" id="fiber">${r.nutrition.fiber[i]}</span>
    //                                     </div>

    //                                 </div>

    //                                 <div class="col-md-6">
    //                                     <div class="nutrition-item d-flex justify-content-between">
    //                                         <div class="d-flex align-items-center">
    //                                             <div
    //                                                 class="nutrion-icons pink-bg d-flex justify-content-center align-items-center rounded-3 me-3 ">
    //                                                 <i class="fa-solid  fa-cube pink-color"></i>
    //                                             </div>
    //                                             <span class="fa-sm text-secondary fw-bold">Sodium</span>
    //                                         </div>
    //                                         <span class="fw-bold" id="sodium">${r.nutrition.sodium[i]}</span>
    //                                     </div>

    //                                 </div>
    //     `
    // }

    // tips
    document.getElementById("calories").innerHTML = r.nutrition.calories;
    document.getElementById("protein").innerHTML = r.nutrition.protein;
    document.getElementById("carbs").innerHTML = r.nutrition.carbs;
    document.getElementById("fat").innerHTML = r.nutrition.fat;
    document.getElementById("fiber").innerHTML = r.nutrition.fiber;
    document.getElementById("sodium").innerHTML = r.nutrition.sodium;

    var tipsHTML = "";
    for (var i = 0; i < r.tips.length; i++) {
        tipsHTML += `
         <div class="mx-4 mb-3  d-flex align-items-center p-3 rounded-4 tips-item ">
                                    <i class="fa-solid fa-circle-check yellow-color fs-5"></i>
                                    <div class="mx-2">
                                        <p>${r.tips[i]}</p>
                                    </div>
        </div>
        `;
    }
    document.getElementById("tipsList").innerHTML = tipsHTML;
}

function randomRecipe() {
    var randomIndex = Math.floor(Math.random() * recipes.length);
    displayRecipe(randomIndex);
}
