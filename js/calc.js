const numberOne = document.querySelector('.number-01')
const numberTwo = document.querySelector('.number-02')
const result = document.querySelector('.resultado')
const btns = document.querySelectorAll('.btns button')
const operators = ['+', '-', '*', '/']
let zeroOne = 0
let zeroTwo = 0
function addOne() {
  if (zeroOne >= 0) {
    numberOne.innerHTML = ++zeroOne
  }
}
function removeOne() {
  if (zeroOne > 0) {
    numberOne.innerHTML = --zeroOne
  }
}
function addTwo() {
  if (zeroTwo >= 0) {
    numberTwo.innerHTML = ++zeroTwo
  }
}
function removeTwo() {
  if (zeroTwo > 0) {
    numberTwo.innerHTML = --zeroTwo
  }
}

for (let i in operators) {
  btns[i].innerHTML = operators[i]
}

function plus() {
  result.innerHTML = zeroOne + zeroTwo
}

function minus() {
  if (zeroTwo > zeroOne) {
    result.innerHTML = zeroTwo - zeroOne
  } else {
    result.innerHTML = zeroOne - zeroTwo
  }
}

function multi() {
  result.innerHTML = zeroOne * zeroTwo
}

function divi() {
  result.innerHTML = zeroOne / zeroTwo
}
