document.body.innerHTML += `<h1> This is my comeback, i think</h1>`
document.body.innerHTML += `<p>How many exercise i can do for my recap? And, how i can do this while i practice my english. I have a many levels of english. Writting = basic i think. Speak = basic i think. Listen = intermediary. If have more, i dont remember now.</p>`

document.body.innerHTML += `<h2> Just do it</h2>`

const divRed = document.querySelector('.red')
const divBlue = document.querySelector('.blue')
const divGreen = document.querySelector('.green')

const myText = document.querySelector('#my-txt')

const resetAll = document.querySelector('#reset')

function resetTxt() {
  myText.style.background = 'none'
  myText.style.color = 'black'
  myText.style.fontSize = '16px'
}

function getText(aaa) {
  myText.innerText = aaa.value
  if (myText.innerText.length == 0) {
    myText.innerText = 'Escreva algo'
    resetTxt()
  }
}

function makeRed() {
  myText.style.background = 'red'
}

function makeBlue() {
  myText.style.background = 'blue'
}

function makeGreen() {
  myText.style.background = 'green'
}

let valueTxt = 16
function plusTxt() {
  valueTxt = valueTxt + 4
  myText.style.fontSize = valueTxt + 'px'
}

function minusTxt() {
  valueTxt = valueTxt - 4
  myText.style.fontSize = valueTxt + 'px'
}

const pickImg = document.querySelector('#img')
function imgLink(link) {
  pickImg.src = link.value
}
