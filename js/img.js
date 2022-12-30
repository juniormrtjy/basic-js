const sec = document.querySelector('section .wrapper')
const hOne = document.querySelector('#add-h1')
const hP = document.querySelector('#add-p')

function remove(arg) {
  // arg.remove()
}

function format(arg) {
  arg.style.color = 'tomato'
}

function addH1() {
  sec.innerHTML += `<h1 onclick="remove(this)">${hOne.value}</h1>`
}

function addP() {
  sec.innerHTML += `<p onclick="remove(this), format(this)">${hP.value}</p>`
}
