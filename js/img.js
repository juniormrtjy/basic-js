const hOne = document.querySelector('#add-h1')
const sec = document.querySelector('section .wrapper')
const hh1 = document.querySelector('.h1')

function moveH1() {
  let removeH1 = document.querySelector('.h1 button')
  removeH1.style.display = 'inline'
  removeH1.style.opacity = '1'
  removeH1.style.visibility = 'visible'
}

function testH1(aw) {
  let removeH1 = document.querySelector('.h1 button')
  removeH1.addEventListener('click', function () {
    aw.remove(this)
    removeH1.remove(this)
  })
}

function addH1() {
  sec.innerHTML += `<h1>${hOne.value}</h1>`
}
