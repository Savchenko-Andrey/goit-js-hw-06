// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const validationInputEl = document.querySelector('#validation-input')
const inputDataLength = document.querySelector('input[data-length="6"]')
const count = Number(inputDataLength.dataset.length)


validationInputEl.addEventListener('blur', onCheckInput)

function onCheckInput(event) {
    if (event.currentTarget.value.length <= count) {
        validationInputEl.classList.add('valid')
        validationInputEl.classList.remove('invalid')
    } else if (event.currentTarget.value.length > count) {
        validationInputEl.classList.remove('valid')
        validationInputEl.classList.add('invalid')
    }
    
}

