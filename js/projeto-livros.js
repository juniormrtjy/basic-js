// VARIÁVEIS

var buyValue = 0
var bookOne = 36
var bookTwo = 39
var bookThree = 14
var bookFour = 12

// PEGANDO AS TAGS PARA INSERIR OS VALORES

var showValue = document.querySelector('header nav .valor span')
var bookOneValue = document.querySelector('.book-one-value span')
var bookTwoValue = document.querySelector('.book-two-value span')
var bookThreeValue = document.querySelector('.book-three-value span')
var bookFourValue = document.querySelector('.book-four-value span')

// PEGANDO AS TAGS PARA INSERIR A QUANTIDADE
var bookOneAmmount = document.querySelector('.book-one-ammount span')
var bookTwoAmmount = document.querySelector('.book-two-ammount span')
var bookThreeAmmount = document.querySelector('.book-three-ammount span')
var bookFourAmmount = document.querySelector('.book-four-ammount span')

// EXPORTANDO OS VALORES

bookOneValue.innerHTML = bookOne
bookTwoValue.innerHTML = bookTwo
bookThreeValue.innerHTML = bookThree
bookFourValue.innerHTML = bookFour
showValue.innerHTML = buyValue

// FUNCTION BOOK ONE

var oneAmmount = 0
function addValueOne() {
  buyValue += bookOne
  oneAmmount++
  showValue.innerHTML = parseInt(buyValue)
  bookOneAmmount.innerHTML = oneAmmount
}

function removeValueOne() {
  if (oneAmmount > 0) {
    buyValue = buyValue - bookOne
    oneAmmount--
    showValue.innerHTML = parseInt(buyValue)
    bookOneAmmount.innerHTML = oneAmmount
  } else if (buyValue <= 0) {
    showValue.innerHTML = '0'
  } else if (oneAmmount == 0) {
    bookOneAmmount.innerHTML = 0
  }
}

// FUNCTION BOOK TWO

var twoAmmount = 0
function addValueTwo() {
  buyValue += bookTwo
  twoAmmount++
  showValue.innerHTML = parseInt(buyValue)
  bookTwoAmmount.innerHTML = twoAmmount
}

function removeValueTwo() {
  if (twoAmmount > 0) {
    buyValue = buyValue - bookTwo
    twoAmmount--
    showValue.innerHTML = parseInt(buyValue)
    bookTwoAmmount.innerHTML = twoAmmount
  } else if (buyValue <= 0) {
    showValue.innerHTML = '0'
  } else if (twoAmmount == 0) {
    bookTwoAmmount.innerHTML = 0
  }
}

// FUNCTION BOOK THREE

var threeAmmount = 0
function addValueThree() {
  buyValue += bookThree
  threeAmmount++
  showValue.innerHTML = parseInt(buyValue)
  bookThreeAmmount.innerHTML = threeAmmount
}

function removeValueThree() {
  if (threeAmmount > 0) {
    buyValue = buyValue - bookThree
    threeAmmount--
    showValue.innerHTML = parseInt(buyValue)
    bookThreeAmmount.innerHTML = threeAmmount
  } else if (buyValue <= 0) {
    showValue.innerHTML = '0'
  } else if (threeAmmount == 0) {
    bookThreeAmmount.innerHTML = 0
  }
}

// FUNCTION BOOK ONE

var fourAmmount = 0
function addValueFour() {
  buyValue += bookFour
  fourAmmount++
  showValue.innerHTML = parseInt(buyValue)
  bookFourAmmount.innerHTML = fourAmmount
}

function removeValueFour() {
  if (fourAmmount > 0) {
    buyValue = buyValue - bookFour
    fourAmmount--
    showValue.innerHTML = parseInt(buyValue)
    bookFourAmmount.innerHTML = fourAmmount
  } else if (buyValue <= 0) {
    showValue.innerHTML = '0'
  } else if (fourAmmount == 0) {
    bookFourAmmount.innerHTML = 0
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
      offerDiscount
    showValue.innerHTML = offerDiscount
  } else {
    descount.innerHTML = 'Seu valor ainda está abaixo de R$50,00'
  }
}
