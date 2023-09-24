import icons from 'url:../img/icons.svg';
import "core-js/stable";
import "regenerator-runtime";
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

const renderSpinner = function(parentEl) {
  const markup = `
    <div class="spinner">
       <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div> 
  `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterBegin', markup);
}

const showRecipe = async function() {
  try{
    // 1) Loading recipe
    renderSpinner(recipeContainer)

    const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
    const data = await res.json();

    if(!res.ok) throw new Error(`${data.message} (${res.status})`);
    let {recipe} = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title, 
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }
    console.log(recipe);

    // 2) Rendering recipe
    const markup = `
      <figure class="recipe__fig">
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="${icons}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${recipe.ingredients.map(ing => {
            return `
            <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${icons}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${ing.quantity}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${ing.unit}</span>
              ${ing.description}
            </div>
          </li>  
          `;
          }).join('')}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${recipe.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `;
    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin',markup);
    console.log(res, data);
  }catch(err) {
    console.log(err);
  }
}


showRecipe();

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
*/