document.body.style.fontFamily = 'Poppins'

/* pensar em algo com tudo o que eu aprendi até aqui

atribuições
operadores lógicos
operadores comparativos
strings
if
operador ternário
switch
for e while
arrays
objetos: propriedades, métodos, construtores
datas
const let e var
manipulação de dados (rocketseat)
push() e unshift()
pop() e shift()
slice()
splice()
includes()
indexOf()
date()

não lembro muito bem de tudo, mas dá p fazer algo

*/

// MÉDIA

{
  function Aluno(nome, n1, n2) {
    this.name = nome
    this.nota1 = n1
    this.nota2 = n2
    this.media = (this.nota1 + this.nota2) / 2
    this.result = this.media >= 7 ? 'Aprovado' : 'Reprovado'
  }
  let alunos = ['Paulo', 'Roberto', 'Souza']

  alunos.forEach(aluno => {
    let a1 = parseInt(Math.random() * 11)
    let a2 = parseInt(Math.random() * 11)
    // console.log(a1 + ' ' + a2)
    let classe = new Aluno(aluno, a1, a2)
    // console.log(classe)
    console.log(
      `O aluno ${classe.name} tirou as notas: ${classe.nota1} e ${classe.nota2}. A sua média foi: ${classe.media}. Portando, ele foi: ${classe.result}`
    )
  })
}

// par ou ímpar
{
  let n1 = 2 // trocar por prompt() para o usuário interagir.
  if (n1 % 2 == 0) {
    console.log('O número é par.')
  } else {
    console.log('O número é ímpar.')
  }
}

// tentando uma manipulação doida. Vou fazer o que vier a mente e vou codando.

{
  function aBtn() {
    return `<button onclick="addAr()">Adicionar array</button>`
  }

  function consoleLog() {
    return `<button onclick="consLog()">Console</button>`
  }

  function showArr() {
    return `<button onclick="showArray()">Mostrar nomes</button>`
  }

  function divArr() {
    return `<div id="arrayy"></div>`
  }

  function createSpan(txt) {
    return `<span>${txt}</span>`
  }

  let a1 = []
  let addLast
  let arrHidden = 0
  function addAr() {
    addLast = prompt('Escreva um nome:')
    let stopThem = addLast.includes(' ')
    if (addLast == null || addLast == undefined || addLast == '' || stopThem) {
      alert('Você não inseriu uma informação válida.')
    } else {
      a1.push(addLast)
      arrHidden = 0
    }
  }

  function consLog() {
    console.log(a1)
  }

  function showArray() {
    let elem = []
    a1.forEach(aa => {
      elem.push(createSpan(aa))
    })
    if (arrHidden == 0) {
      arrayy.innerHTML = elem
      arrHidden = 1
    } else {
      alert('O array está atualizado')
    }
    let nai = document.querySelectorAll('span')
    nai.forEach(items => {
      items.style.display = 'inline-block'
      items.style.padding = '10px'
      items.style.border = '1px solid #b2bec3'
      items.style.borderRadius = '5px'
      items.style.color = '#b2bec3'
    })
  }

  document.body.innerHTML += aBtn() + consoleLog() + showArr() + divArr()

  const buttons = document.querySelectorAll('button')
  buttons.forEach(btns => {
    btns.style.display = 'block'
    btns.style.color = '#2d3436'
    btns.style.backgroundColor = '#dfe6e9'
    btns.style.padding = '10px'
    btns.style.marginBottom = '10px'
    btns.style.borderRadius = '4px'
    btns.style.border = '1px solid #b2bec3'
    btns.style.cursor = 'pointer'
  })
}
