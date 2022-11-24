// register
const userName = document.querySelector('#username')
const userPass = document.querySelector('#userpass')

function register() {
  localStorage.setItem('Registerusername', userName.value)
  localStorage.setItem('Registeruserpass', userPass.value)
}
const getUserName = localStorage.getItem('Registerusername')
const getUserPass = localStorage.getItem('Registeruserpass')
