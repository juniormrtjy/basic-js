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
