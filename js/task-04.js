// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


const btnDecrementEl = document.querySelector('button[data-action="decrement"]');

const btnIncrementEl = document.querySelector('button[data-action="increment"]');


let counterValue = document.querySelector('#value')
let count = 0;


btnDecrementEl.addEventListener('click', () => {
    counterValue.innerHTML = count -= 1;
})


btnIncrementEl.addEventListener('click', () => {
    counterValue.innerHTML = count += 1;

})




