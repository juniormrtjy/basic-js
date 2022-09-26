// VARIÁVEIS

var buyValue = 0
var bookOne = 36
var bookTwo = 39
var bookThree = 14
var bookFour = 12

// PEGANDO AS TAGS PARA INSERIR OS VALORES

var showValue = document.querySelector('header nav .valor span')
const booksValue = document.querySelectorAll('.book-value span')

// PEGANDO AS TAGS PARA INSERIR A QUANTIDADE

const booksAmmount = document.querySelectorAll('.book-ammount span')

// EXPORTANDO OS VALORES

booksValue[0].innerHTML = bookOne
booksValue[1].innerHTML = bookTwo
booksValue[2].innerHTML = bookThree
booksValue[3].innerHTML = bookFour
showValue.innerHTML = buyValue

// FUNCTIONS
// pensar em como posso otimizar isso
// FUNCTION BOOK ONE

var oneAmmount = 0
function addValueOne() {
  buyValue += bookOne
  oneAmmount++
  showValue.innerHTML = parseInt(buyValue)
  booksAmmount[0].innerHTML = oneAmmount
}

function removeValueOne() {
  if (oneAmmount > 0) {
    buyValue = buyValue - bookOne
    oneAmmount--
    showValue.innerHTML = parseInt(buyValue)
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
  showValue.innerHTML = parseInt(buyValue)
  booksAmmount[1].innerHTML = twoAmmount
}

function removeValueTwo() {
  if (twoAmmount > 0) {
    buyValue = buyValue - bookTwo
    twoAmmount--
    showValue.innerHTML = parseInt(buyValue)
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
  showValue.innerHTML = parseInt(buyValue)
  booksAmmount[2].innerHTML = threeAmmount
}

function removeValueThree() {
  if (threeAmmount > 0) {
    buyValue = buyValue - bookThree
    threeAmmount--
    showValue.innerHTML = parseInt(buyValue)
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
  showValue.innerHTML = parseInt(buyValue)
  booksAmmount[3].innerHTML = fourAmmount
}

function removeValueFour() {
  if (fourAmmount > 0) {
    buyValue = buyValue - bookFour
    fourAmmount--
    showValue.innerHTML = parseInt(buyValue)
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
      offerDiscount
    showValue.innerHTML = offerDiscount
  } else {
    descount.innerHTML = 'Seu valor ainda está abaixo de R$50,00'
  }
}
