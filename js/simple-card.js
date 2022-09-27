// get html classes
const userName = document.querySelector('.text strong')
const userLikes = document.querySelector('.text span')
const simpleCard = document.querySelector('.card')
const userRegister = document.querySelector('.register')

// other variables
const likes = 0

const user = {
  name: localStorage.getItem('userName'),
  age: '',
  register: true,
  like: likes
}

let registerOn = false

function setUserName() {
  localStorage.setItem('userName', prompt('Qual o seu nome?'))
}

function loadPage() {
  userName.innerHTML += user.name
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
