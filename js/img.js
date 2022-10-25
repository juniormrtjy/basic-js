const divs = document.querySelectorAll('.effect')

divs.forEach(index => {
  index.addEventListener('mouseover', () => {
    index.classList.add('test')
  })
  index.addEventListener('mouseleave', () => {
    index.classList.remove('test')
  })
})
