$(document).ready(function () {

  // Initialize modal (this is the KEY line)
  $('.modal').modal();

  // Sample cards (from PDF concept)
  const recipes = [
  {
    name: "Pasta",
    desc: "Italian pasta dish",
    image: "images/recipe1.jpg"
  },
  {
    name: "Sandwich",
    desc: "Healthy veg sandwich",
    image: "images/recipe2.jpg"
  },
  {
    name: "Pizza",
    desc: "Italian Dish",
    image: "images/recipe3.jpg"
  }
];


  // Render cards
  recipes.forEach(r => {
    $('#card-section').append(`
      <div class="col s4">
        <div class="card">
        <div class="card-image">
          <img src="${r.image}">
          </div>
          <div class="card-content">
            <span class="card-title">${r.name}</span>
            <p>${r.desc}</p>
          </div>
        </div>
      </div>
    `);
  });

  // Submit handler (console output as per PDF)
  $('#formSubmit').click(function () {
    console.log({
      recipe: $('#recipe_name').val(),
      description: $('#recipe_desc').val()
    });
  });

});