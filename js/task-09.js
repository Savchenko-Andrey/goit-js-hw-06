// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change - color 
// и выводит значение цвета в span.color.

const colorBodyEl = document.querySelector('body')
console.log(colorBodyEl)
const paragraphEl = document.querySelector('.color')

const btnChangeColorEl = document.querySelector('.change-color')



btnChangeColorEl.addEventListener('click', () => {
  colorBodyEl.style.background = getRandomHexColor()
  paragraphEl.textContent = getRandomHexColor()
})



function getRandomHexColor() {
  return  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


