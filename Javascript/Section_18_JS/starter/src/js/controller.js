import "core-js/stable";
import "regenerator-runtime";
import * as model from "./model.js";
import recipeView, { RecipeView } from './views/recipeView.js';
// last one is for polyfilling an async await 

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

console.log('TEST');

const controlRecipes = async function() {
  try{
    const id = window.location.hash.slice(1);
    console.log(id);

    if(!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);

  }catch(err) {
    console.log(err);
  }
}

controlRecipes();

['hashchange', 'load'].forEach(ev => {
  window.addEventListener(ev, controlRecipes);
});

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


/*
1. User Stories 

User story: Description of the application's functionality from the user's perspective
Common format: As s [type of user], I want [an action] so that [a benefit]


(1) As a user, I want to search for recipes, so that i can find new ideas for meals
(2) As user, I want to be able to update the number of servings, so that i can cook a meal for different number of people.
(3) As a user, I want to bookmark recipes, so that i can review them later
(4) As a user, I want to be able to create my own recipes, so that i have them all organized in the same app.
(5) As a user, I want to be able to see my bookmarks and own recipes when i have the app and come back later, so that i can close the app safely after cooking.


User Stories -------------------------------------------------------------------------------> Features

(1) Search for recipes --------------------------------------------------------------------> Search funcionality: input field to send request to API with search keywords (
                       --------------------------------------------------------------------> Display results with pagination)
                       --------------------------------------------------------------------> Display recipe with cooking time, servings and ingredients

(2) Update the number of servings ---------------------------------------------------------> Change servings functionality: update all ingredients according to current number of servings
                                  
(3) Bookmark recipes ----------------------------------------------------------------------> Bookmarking functionality: display list of all bookmarked recipes

(4) Create my own recipes -----------------------------------------------------------------> User can upload own recipes 
                          -----------------------------------------------------------------> User recipes will automatically be bookmarked
                          -----------------------------------------------------------------> User can only see their own recipes, not recipes from the users

(5) See my bookmarks and own --------------------------------------------------------------->  
    recipes when i have the 
    app and come back later 

    Parcel is also capable convert sass to pure css

    module bundler parcel take whole code and converts it into whole package



    MVC Architecture

    Components of any architecture

    Business Logic  ---> State ---> HTTP LIBRARY ---> APPLICATION LOGIC (ROUTER) ---> PRESENTATION LOGIC (UI LAYER)


    MODEL             VIEW         CONTROLLER 
    business logic                  Bridge between model and view        
    state
    http library 
*/