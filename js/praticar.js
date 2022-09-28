var heroGame = document.querySelector('#hero')

let left = 0
let walkX = 0
let walkY = 0
let walk = 20

function moveRight() {
  personagem.toRight(walk)
}
function moveLeft() {
  personagem.toLeft(walk)
}
function moveTop() {
  personagem.toTop(walk)
}
function moveBottom() {
  personagem.toBottom(walk)
}

var personagem = {
  toRight: function (number) {
    walkX += number
    heroGame.style.translate = walkX + 'px'
  },
  toLeft: function (number) {
    walkX -= number
    heroGame.style.translate = walkX + 'px'
  },
  toTop: function (number) {
    walkY -= number
    heroGame.style.transform = `translateY(${walkY}px)`
  },
  toBottom: function (number) {
    walkY += number
    heroGame.style.transform = `translateY(${walkY}px)`
  }
}
