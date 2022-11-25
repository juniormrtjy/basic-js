// register
const userName = document.querySelector('#username')
const userPass = document.querySelector('#userpass')
const registerBtn = document.querySelector('.register')

function register() {
  if (
    localStorage.getItem('Registerusername') == 'null' ||
    localStorage.getItem('Registerusername') == undefined ||
    localStorage.getItem('Registerusername') == ''
  ) {
    localStorage.setItem('Registerusername', userName.value)
    localStorage.setItem('Registeruserpass', userPass.value)
  } else {
    alert('Você não escolheu um nome de usuário.')
  }
}
const getUserName = localStorage.getItem('Registerusername')
const getUserPass = localStorage.getItem('Registeruserpass')

if (
  localStorage.getItem('Registerusername') != 'null' &&
  localStorage.getItem('Registerusername') != ''
) {
  let setLink = 'Registrar'
  let linkUrl = 'https://www.google.com'
  registerBtn.innerHTML = setLink.link(linkUrl)
}
