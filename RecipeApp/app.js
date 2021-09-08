//  API key 

let API_KEY ='095e24d988ad478990e3bb2fc1e96d60s';
let query = "chicken";

/*  baseURL:
   ('https://api.spoonacular.com/recipes/complexSearch')

  

   */

//  fetch API 

fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=095e24d988ad478990e3bb2fc1e96d60&query=chicken`)
.then(response => {
return response.json();

}).then(recipeArray)

.catch(function (error) {
  console.log(error);
});

// Declare a function for recipe array 
function recipeArray(obj){

  let recepies = obj.results;

  console.log(recepies);

  console.log(typeof recepies);

  // displaying data from HTML file 
  
  document.getElementById("cards").innerHTML =(recepies.map(recipe => 
    `
<div class="structure">
    <div class="content">
        <img  src="${recipe.image}" />
    <div class="title"><h3>Tittle:</h3>
        ${recipe.title}</div>
     </div> 
     <div class="id"><h4>ID:</h4>${recipe.id}
    </div>
    <button class="btn">See More</button>
 </div>`
).join(''));
}