const sectionHtmlAdd = `<section><div class="wrapper"> <div class="box"><p><span> ${fruitName} </span></p></box></wrapper> <div class="btns"><button>+</button> <button>-</button></div></section>`

function addItem() {
  let fruitName = prompt('Escolha a fruta')
  let fruitArray = fruitName.split('')
  fruitArray[0] = fruitArray[0].toUpperCase()
  fruitArray = fruitArray.join('')
  const sectionHtmlAdd = `<section><div class="wrapper"> <div class="box"><p><span> ${fruitArray} </span></p></box></wrapper> <div class="btns"><button>+</button> <button>-</button></div></section>`
  document.body.innerHTML += sectionHtmlAdd
}
