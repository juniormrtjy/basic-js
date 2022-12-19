const modal = document.querySelector('.modal')
const iconClose = document.querySelector('.modal .close')

// fechar modal
iconClose.addEventListener('click', function () {
  modal.classList.add('m-close')
})

// abrir modal
let imagensDayOne = [
  'https://images.unsplash.com/photo-1671453683999-a8d10e3a2ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1664574652984-5b5f769bef07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1671414783688-d374c237f5ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
]

let imagensDayTwo = [
  'https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1443181844940-9042ec79924b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1587465420095-0fb0d52c1b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60'
]

let imagensDayThree = [
  'https://images.unsplash.com/photo-1615979389741-6cfb168f3798?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fEFyY2hpdGVjdHVyZSUyMCUyNiUyMEludGVyaW9yc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1539009353975-b1ab0f6c04c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fEFyY2hpdGVjdHVyZSUyMCUyNiUyMEludGVyaW9yc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1553533432-a1cf4da1a74a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fEFyY2hpdGVjdHVyZSUyMCUyNiUyMEludGVyaW9yc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1663811397302-8268848ca312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fEFyY2hpdGVjdHVyZSUyMCUyNiUyMEludGVyaW9yc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1663811397374-a51d5ae11b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fEFyY2hpdGVjdHVyZSUyMCUyNiUyMEludGVyaW9yc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1663811397219-c572550dffc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fEFyY2hpdGVjdHVyZSUyMCUyNiUyMEludGVyaW9yc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60'
]

let getImgBox = document.querySelectorAll('#gallery .img')

function createImg(sources) {
  return `<img src="${sources}" alt="" onclick="openModal(this)">`
}

const getModalImg = document.querySelector('.modal img')

function openModal(sources) {
  modal.classList.remove('m-close')
  getModalImg.src = sources.src
}

imagensDayOne.forEach(imgs => {
  getImgBox[0].innerHTML += createImg(imgs)
})

imagensDayTwo.forEach(imgs => {
  getImgBox[1].innerHTML += createImg(imgs)
})

imagensDayThree.forEach(imgs => {
  getImgBox[2].innerHTML += createImg(imgs)
})
