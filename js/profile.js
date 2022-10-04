const getName = document.querySelector('header h3')
const nav = document.querySelector('#nav')

const user = {
  name: localStorage.getItem('Username'),
  description: localStorage.getItem('userDescription')
}

function load() {
  getName.innerHTML = user.name
}

function navShow() {
  nav.classList.toggle('show')
}

function navClose() {
  nav.classList.remove('show')
}

// nav.addEventListener('mouseover', () => {
//   nav.classList.add('show')
// })
// nav.addEventListener('mouseleave', () => {
//   nav.classList.remove('show')
// })

// nav.addEventListener('click', () => {
//   nav.classList.add('show')
// })
