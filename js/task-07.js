// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputFontSizeControlEl = document.querySelector('#font-size-control')
const textControlEl = document.querySelector('#text')



inputFontSizeControlEl.addEventListener("input", setOutput);
textControlEl.style.fontSize = '56px'

function setOutput(event) {
    textControlEl.style.fontSize = event.currentTarget.value + 'px'
}
