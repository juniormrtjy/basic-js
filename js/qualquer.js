const showMenu = document.querySelector('.show-menu')
const nav = document.querySelector('nav')
const links = document.querySelectorAll('.menu a')

showMenu.addEventListener('click', function () {
  nav.classList.toggle('show')
})

links.forEach(link => {
  link.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
})
