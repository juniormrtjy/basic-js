// DEPOIS, com os formulários, elaborar esse login.

const setUsername = document.querySelector('.set-user')
const getLogin = document.querySelector('.login')

function setUser() {
  if (
    localStorage.getItem('Username') == 'null' ||
    localStorage.getItem('Username') == undefined
  ) {
    localStorage.setItem('Username', prompt('Escolha o seu nome de usuário'))
    if (localStorage.getItem('Username') != 'null') {
      localStorage.setItem('UserIsTrue', true)

      let setLink = 'Login'
      let linkUrl = '../html/profile.html'
      getLogin.innerHTML = setLink.link(linkUrl)
    }
  } else {
    alert('Você já escolheu o seu nome')
  }
}

function userLogin() {
  if (localStorage.getItem('UserIsTrue') != 'true') {
    alert('Você não registrou um nome.')
  }
}

function load() {
  if (localStorage.getItem('UserIsTrue') == 'true') {
    let setLink = 'Login'
    let linkUrl = '../html/profile.html'
    getLogin.innerHTML = setLink.link(linkUrl)
  }
}
