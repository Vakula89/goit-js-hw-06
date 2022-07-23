const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = ingredients.map(ingredient => {

	const liEl = document.createElement("li");
	liEl.textContent = ingredient;
	liEl.className = "item";
	return liEl;
});

document.querySelector("ul#ingredients").append(...ingredientsList);
