const getName = document.querySelector('header h3')

const user = {
  name: localStorage.getItem('Username'),
  description: localStorage.getItem('userDescription')
}

function load() {
  getName.innerHTML = user.name
}
