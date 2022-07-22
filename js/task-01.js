// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

//Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

//----------------------------------------------------------

const refItemList = document.querySelectorAll(".item");
console.log(`Number of categories: ${refItemList.length}`);
console.log('')


const categoriesEl = document.querySelectorAll("h2") 

const elements = document.querySelectorAll('.item ul')


const categories = [...categoriesEl]
const el = [...elements]

let f;

for (const cat of categories) {
    f += cat;
    console.log(cat.textContent)
}




console.log('')
const x = el.map(function (element) {
        
        console.log(`Category: ${f.textContent}`)
        console.log(`Elements: ${element.children.length}`)
    })















