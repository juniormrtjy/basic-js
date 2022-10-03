const setUsername = document.querySelector('.set-user')
const getLogin = document.querySelector('.login')
let login = false

function setUser() {
  if (
    localStorage.getItem('Username') == 'null' ||
    localStorage.getItem('Username') == undefined
  ) {
    localStorage.setItem('Username', prompt('Escolha o seu nome de usuário'))
    if (localStorage.getItem('Username') != 'null') {
      login = true
    }
  } else {
    alert('Você já escolheu o seu nome')
  }
}

function userLogin() {
  if (login == true) {
    alert('Login Efetuado')
  } else {
    alert('Você ainda não registrou um nome de usuário')
  }
}
