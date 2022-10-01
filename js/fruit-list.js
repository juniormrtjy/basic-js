function addItem() {
  let fruitName = prompt('Digite o nome de alguma fruta')
  let fruitArray = fruitName.split('')
  fruitArray[0] = fruitArray[0].toUpperCase()
  fruitArray = fruitArray.join('')
  const sectionHtmlAdd = `<section> <div class="wrapper"> <div class="box"><p><span> ${fruitArray} </span></p> <div class="btns"><button>+</button> <button>-</button></div> </div> </div></section>`
  const main = document.querySelector('main')
  main.innerHTML += sectionHtmlAdd
}
