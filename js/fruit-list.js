// criar section
function createSection(content) {
  return `<section><div class="wrapper">${content}</div></section>`
}

function createDivBox(...content) {
  return `<div class="box">${content}</div`
}

function createParagraph(content) {
  return `<p>${content}</p>`
}

function createSpan(content) {
  return `<span>${content}</span>`
}

function createDivBtn(...content) {
  return `<div class="btns">${content}</div>`
}

function createPlusButton(content) {
  return `<button class="add">${content}</button>`
}

function createMinusButton(content) {
  return `<button class="remove">${content}</button>`
}

function addItem() {
  let fruitName = prompt('Digite o nome de alguma fruta')
  let fruitArray = fruitName.split('')
  fruitArray[0] = fruitArray[0].toUpperCase()
  fruitArray = fruitArray.join('')
  const sectionHtmlAdd = createSection(
    createDivBox(
      createParagraph(createSpan(`${fruitArray}`)) +
        createDivBtn(createPlusButton('+') + createMinusButton('-'))
    )
  )
  const main = document.querySelector('main')
  main.innerHTML += sectionHtmlAdd
}
