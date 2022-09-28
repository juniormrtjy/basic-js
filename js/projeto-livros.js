// VARIÁVEIS

var buyValue = 0
var bookOne = 36.9
var bookTwo = 39.8
var bookThree = 28.48
var bookFour = 12.4

// PEGANDO AS TAGS PARA INSERIR OS VALORES

var showValue = document.querySelector('header nav .valor span')
const booksValue = document.querySelectorAll('.book-value span')

// PEGANDO AS TAGS PARA INSERIR A QUANTIDADE

const booksAmmount = document.querySelectorAll('.book-ammount span')

// EXPORTANDO OS VALORES

const booksArr = [bookOne, bookTwo, bookThree, bookFour]

for (let index in booksArr) {
  booksValue[index].innerHTML = booksArr[index]
}
showValue.innerHTML = buyValue

// FUNCTIONS
// pensar em como posso otimizar isso
// FUNCTION BOOK ONE

var oneAmmount = 0
function addValueOne() {
  buyValue += bookOne
  oneAmmount++
  showValue.innerHTML = buyValue.toFixed(2)
  booksAmmount[0].innerHTML = oneAmmount
}

function removeValueOne() {
  if (oneAmmount > 0) {
    buyValue = buyValue - bookOne
    oneAmmount--
    showValue.innerHTML = buyValue.toFixed(2)
    booksAmmount[0].innerHTML = oneAmmount
  } else if (buyValue <= 0) {
    showValue.innerHTML = '0'
  } else if (oneAmmount == 0) {
    booksAmmount[0].innerHTML = 0
  }
}

// FUNCTION BOOK TWO

var twoAmmount = 0
function addValueTwo() {
  buyValue += bookTwo
  twoAmmount++
  showValue.innerHTML = buyValue.toFixed(2)
  booksAmmount[1].innerHTML = twoAmmount
}

function removeValueTwo() {
  if (twoAmmount > 0) {
    buyValue = buyValue - bookTwo
    twoAmmount--
    showValue.innerHTML = buyValue.toFixed(2)
    booksAmmount[1].innerHTML = twoAmmount
  } else if (buyValue <= 0) {
    showValue.innerHTML = '0'
  } else if (twoAmmount == 0) {
    booksAmmount[1].innerHTML = 0
  }
}

// FUNCTION BOOK THREE

var threeAmmount = 0
function addValueThree() {
  buyValue += bookThree
  threeAmmount++
  showValue.innerHTML = buyValue.toFixed(2)
  booksAmmount[2].innerHTML = threeAmmount
}

function removeValueThree() {
  if (threeAmmount > 0) {
    buyValue = buyValue - bookThree
    threeAmmount--
    showValue.innerHTML = buyValue.toFixed(2)
    booksAmmount[2].innerHTML = threeAmmount
  } else if (buyValue <= 0) {
    showValue.innerHTML = '0'
  } else if (threeAmmount == 0) {
    booksAmmount[2].innerHTML = 0
  }
}

// FUNCTION BOOK ONE

var fourAmmount = 0
function addValueFour() {
  buyValue += bookFour
  fourAmmount++
  showValue.innerHTML = buyValue.toFixed(2)
  booksAmmount[3].innerHTML = fourAmmount
}

function removeValueFour() {
  if (fourAmmount > 0) {
    buyValue = buyValue - bookFour
    fourAmmount--
    showValue.innerHTML = buyValue.toFixed(2)
    booksAmmount[3].innerHTML = fourAmmount
  } else if (buyValue <= 0) {
    showValue.innerHTML = '0'
  } else if (fourAmmount == 0) {
    booksAmmount[3].innerHTML = 0
  }
}

// DESCONTO

// function showOffer() {
//   var offer = (buyValue * 15) / 100
//   let offerDiscount = buyValue - offer
//   console.log('% ' + offer)
//   console.log(offerDiscount)
// }

function showOffer() {
  var offer = (buyValue * 15) / 100
  let offerDiscount = buyValue - offer
  let descount = document.querySelector('.offer-phrase')
  if (buyValue >= 50) {
    descount.innerHTML =
      'Parabéns, você ganhou 15% de desconto. Sua compra está em: R$' +
      offerDiscount.toFixed(2)
    showValue.innerHTML = offerDiscount.toFixed(2)
  } else {
    descount.innerHTML = 'Seu valor ainda está abaixo de R$50,00'
  }
}

// DARK MODE

let darkMode = localStorage.getItem('darkm')
const mode = document.querySelector('.mode')
mode.addEventListener('click', () => {
  if (darkMode != 'on') {
    document.body.classList.add('dark')
    localStorage.setItem('darkm', 'on')
    darkMode = 'on'
  } else {
    document.body.classList.remove('dark')
    localStorage.setItem('darkm', 'off')
    darkMode = 'off'
  }
})

function loadMode() {
  if (darkMode === 'on') {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
}

// TESTE

let oojj = 8.9876
let oojh = 9.877
let aabb = oojj + oojh
console.log(aabb.toFixed(2))
