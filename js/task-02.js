// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

//--------------------------------------------------------------------

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElement = document.querySelector('#ingredients')
const el = []

function ingredientsEl(string) {
  
  let liElement;

  liElement = document.createElement('li')
  liElement.classList.add('item')
  liElement.textContent = string

  el.push(liElement)
}

const enumeration = ingredients.map((ingredient) => {
  return ingredientsEl(ingredient)
}).join('');

ulElement.append(...el)