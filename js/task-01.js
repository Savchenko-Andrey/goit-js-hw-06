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



const refCategories = document.querySelectorAll(".item h2 ");
const elementsUl = document.querySelectorAll('h2 ');




function fn () {
    for (const category of refCategories) {
        console.log(`Category: ${category.textContent}`)
    
    }

    return fn
}

fn()

console.log(`Elements: ${elementsUl.children.length}`)



// console.log(`Category: ${refCategories1[0].textContent}`);


// const productsUl = document.querySelectorAll('ul');
// // console.log(`Elements: ${AnimalsUl[1].children.length}`)

// const refCategories2 = document.querySelectorAll("h2");
// console.log(`Category: ${refCategories2[1].textContent}`);

// const productsUl1 = document.querySelectorAll('ul');
// console.log(`Elements: ${productsUl1[2].children.length}`)

// const refCategories3 = document.querySelectorAll("h2");
// console.log(`Category: ${refCategories3[2].textContent}`);

// const technologiesUl = document.querySelectorAll('ul');
// console.log(`Elements: ${technologiesUl[3].children.length}`);


// const categoriesEl = document.querySelectorAll("h2");
// const elementsEl = document.querySelectorAll('#categories ul');

// const categoryEl = [...categoriesEl];
// const elEl = [...elementsEl];

// const elementsAll = categoryEl.concat(elEl)


// console.log((elementsAll))


const categoriesEl = document.querySelectorAll('#categories');



for (const category of categoriesEl) {
    // console.log(`Category: ${category.textContent}`)
    
}

// for (const element of elementsEl) {
    
//     console.log(`Elements: ${element.children.length}`)

// };    


