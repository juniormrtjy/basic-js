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
  // CRIAR BUTTON QUE ADICIONA UM ITEM AO ARRAY
  function aBtn() {
    return `<button onclick="addAr()">Adicionar array</button>`
  }

  // MOSTRA O ARRAY NO CONSOLE.LOG()
  function consoleLog() {
    return `<button onclick="consLog()">Console</button>`
  }

  // MOSTRA O ARRAY NO DOM
  function showArr() {
    return `<button onclick="showArray()">Mostrar nomes</button>`
  }

  // CRIA UMA DIV PARA CONTER OS ITEMS DO ARRAY
  function divArr() {
    return `<div id="arrayy"></div>`
  }

  // CRIA UMA TAG SPAN PARA QUE EU POSSA ESTILIZAR CADA ELEMENTO
  function createSpan(txt) {
    return `<span>${txt}</span>`
  }

  // CRIANDO O ARRAY
  let a1 = []

  // VARIÁVEL QUE VAI RECEBER O VALOR PARA ADICIONAR UM ITEM AO FINAL DO ARRAY
  let addLast

  // VARIÁVEL PARA IMPEDIR QUE O USUÁRIO CLIQUE PARA MOSTRAR OS NOMES E ISSO ACONTEÇA INFINITAMENTE
  let arrHidden = 0

  // CRIANDO A FUNÇÃO QUE ADICIONA UM ITEM AO ARRAY
  function addAr() {
    // USUÁRIO ESCOLHE O NOME
    addLast = prompt('Escreva um nome:')

    // IMPEDIR QUE INSIRA UM VALOR VAZIO
    let stopThem = addLast.includes(' ')

    // TENTATIVA DE EVITAR DADOS INVÁLIDOS
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

  // CRIANDO A FUNÇÃO QUE IMPRIME O ARRAY NO DOM
  function showArray() {
    // AINDA EM DÚDIVDA SOBRE ESSA PARTE, DEPOIS EU PENSO COM CALMA. MAS PEGA OS ITEMS DO ARRAY E COLOCA DENTRO DA TAG SPAN.
    let elem = []
    a1.forEach(aa => {
      elem.push(createSpan(aa))
    })

    // CONDICIONAL PARA IMPEDIR QUE O USUÁRIO FIQUE IMPRIMINDO O ARRAY INFINITAMENTE
    if (arrHidden == 0) {
      arrayy.innerHTML = elem
      arrHidden = 1
    } else {
      alert('O array está atualizado')
    }

    // ESTILIZANDO OS ITEMS COM A TAG <SPAN>
    let nai = document.querySelectorAll('span')
    nai.forEach(items => {
      items.style.display = 'inline-block'
      items.style.padding = '10px'
      items.style.border = '1px solid #b2bec3'
      items.style.borderRadius = '5px'
      items.style.color = '#b2bec3'
    })
  }

  // INSERINDO OS ELEMENTOS NO DOM
  document.body.innerHTML += aBtn() + consoleLog() + showArr() + divArr()

  // ESTILIZANDO OS AS TAGS <BUTTON>
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

{
  // hexadecimal
  let hex = Math.floor(Math.random() * 0x1000000).toString(16)
  console.log(`#${hex}`)
  document.body.style.background = '#' + hex
  hex = Math.floor(Math.random() * 0x1000000).toString(16)
  console.log(`#${hex}`)
  document.body.style.color = '#' + hex
}

{
  var body = document.querySelector('body')
  body.style.fontFamily = 'Poppins, sans-serif'
  // Math.random()
  var randomNumber = function (num) {
    return Math.floor(Math.random() * `${num}`)
  }

  // first: basic DOM Manipulation
  // STYLES

  // HTML TAGS
  // H1
  function createH1(content) {
    return `<h1>${content}</h1>`
  }

  // BUTTON
  function createButton(event, content) {
    return `<button onclick="${event}" style="padding:10px;color:gray;font-weight:bold">${content}</button>`
  }

  // SPAN
  function createSpan(content) {
    return `<span style="display:inline-block; padding:5px;border:1px solid black; margin-right:5px;">${content}</span>`
  }

  // INPUT TEXT
  function createInpText(content) {
    return `<input type="text" id="inserirTexto"/>`
  }

  // DIV
  function createDiv(...content) {
    return `<div style="display:flex; gap:10px;margin-block:10px;">${content}</div>`
  }

  /* ============== END ============= */

  // gerar código hexadecimal
  function randomHexadecimal() {
    return `#${Math.floor(Math.random() * 0x1000000).toString(16)}`
  }

  // object com algumas configs
  let configs = {
    color: randomHexadecimal,
    backgroundColor: randomHexadecimal
  }

  function randomBg() {
    body.style.backgroundColor = configs.backgroundColor()
  }

  function randomColor() {
    spans = document.querySelectorAll('span')
    body.style.color = configs.color()
    spans.forEach(c => {
      c.style.borderColor = body.style.borderColor
    })
  }

  function addSpanText() {
    let insText = document.querySelector('#inserirTexto')
    let check = insText.value.includes(' ')

    if (
      insText.value == '' ||
      insText.value == insText.value.includes(' ') ||
      check
    ) {
      alert('Você não inseriu um texto válido')
    } else {
      body.innerHTML += createSpan(insText.value)
      insText.innerHTML = ''
    }
  }

  body.innerHTML +=
    createH1('Maratona JavaScript 01') +
    createButton('randomBg()', 'Random bg color') +
    ' ' +
    createButton('randomColor()', 'Random txt color')

  body.innerHTML += createDiv(
    createInpText() + createButton('addSpanText()', 'Add')
  )
  var spans
}
