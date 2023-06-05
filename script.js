
document.addEventListener("DOMContentLoaded", function() {

    console.log("Page loaded!");

});

let recipeCount = 0;

if (recipeCount > 5) {

    console.log("You have a lot of recipes!");

} else {

    console.log("Keep exploring new recipes!");

}


for (let i = 0; i < 3; i++) {

    console.log("Iteration:", i);
    
}

let recipes = ["Lasagna Recipe", "Banana Bars", "Brownies"];

function printRecipes() {

    console.log("Available Recipes:");

    for (let i = 0; i < recipes.length; i++) {

        console.log(recipes[i]);

    }
}

printRecipes();

