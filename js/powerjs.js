function showList() {
  let getList = document.querySelector('.list')
  getList.classList.add('show')
}

function closeList() {
  let getList = document.querySelector('.list')
  getList.classList.remove('show')
}

let modal
function openModal(img) {
  let modalImg = document.querySelector('#img-modal')
  let divModal = document.querySelector('.list .modal')
  let getList = document.querySelector('.list')

  modalImg.src = img.src
  divModal.style.visibility = 'visible'
  divModal.style.opacity = '1'
  modal = true
  if (modal == true) {
    getList.style.maxHeight = '100%'
    getList.style.overflow = 'hidden'
  }
}

function closeModal() {
  let divModal = document.querySelector('.list .modal')
  let getList = document.querySelector('.list')

  divModal.style.visibility = 'hidden'
  divModal.style.opacity = '0'
  modal = false
  if (modal == false) {
    getList.style.maxHeight = ''
    getList.style.overflow = 'auto'
  }
}
