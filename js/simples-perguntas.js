var desbloqueio = document.querySelector('.img')
var pontos = 0

function perguntas() {
  // pergunta 01
  var p01 = prompt(
    `1. Normalmente, quantos litros de sangue uma pessoa tem? Em média,quantos são retirados numa doação de sangue? 
    a) Tem entre 2 a 4 litros. São retirados 450 mililitros; 
    b) Tem entre 4 a 6 litros. São retirados 450 mililitros; 
    c) Tem 10 litros. São retirados 2 litros; 
    d) Tem 7 litros. São retirados 1,5 litros; 
    e) Tem 0,5 litros. São retirados 0,5 litros`
  )
  if (p01 == 'b' || p01 == 'B') {
    alert('Parabéns! Você acertou, ganhou 1 ponto.')
    pontos++
    alert('Sua pontuação: ' + pontos)
  } else if (p01 != 'b') {
    alert('Você errou!')
  }

  // PERGUNTA 02

  var p02 = prompt(
    `2. De quem é a famosa frase “Penso, logo existo”? 
    a) Platão; 
    b) Galileu Galilei; 
    c) Descartes; 
    d) Sócrates; 
    e) Francis Bacon`
  )

  if (p02 == 'c' || p02 == 'C') {
    alert('Parabéns! Você acertou, ganhou 1 ponto.')
    pontos++
    alert('Sua pontuação: ' + pontos)
  } else if (p02 != 'c') {
    alert('Você errou!')
  }

  // PERGUNTA 03

  var p03 = prompt(
    `3. De onde é a invenção do chuveiro elétrico? 
    a) França; 
    b) Inglaterra; 
    c) Brasil; 
    d) Austrália; 
    e) Itália`
  )

  if (p03 == 'c' || p03 == 'C') {
    alert('Parabéns! Você acertou, ganhou 1 ponto.')
    pontos++
    alert('Sua pontuação: ' + pontos)
  } else if (p03 != 'c') {
    alert('Você errou!')
  }

  // PERGUNTA 04

  var p04 = prompt(
    `4. Quais o menor e o maior país do mundo? 
    a) Vaticano e Rússia; 
    b) Nauru e China; 
    c) Mônaco e Canadá; 
    d) Malta e Estados Unidos; 
    e) São Marino e Índia`
  )

  if (p04 == 'a' || p04 == 'A') {
    alert('Parabéns! Você acertou, ganhou 1 ponto.')
    pontos++
    alert('Sua pontuação: ' + pontos)
  } else if (p04 != 'a') {
    alert('Você errou!')
  }

  // PERGUNTA 05

  var p05 = prompt(
    `5. Qual o nome do presidente do Brasil que ficou conhecido como Jango? 
    a) Jânio Quadros; 
    b) Jacinto Anjos; 
    c) Getúlio Vargas; 
    d) João Figueiredo; 
    e) João Goulart`
  )

  if (p05 == 'e' || p05 == 'E') {
    alert('Parabéns! Você acertou, ganhou 1 ponto.')
    pontos++
    alert('Sua pontuação: ' + pontos)
  } else if (p05 != 'e') {
    alert('Você errou!')
  }

  function addImg() {
    desbloqueio.classList.add('add-img')
  }

  if (pontos == 5) {
    alert(
      'Parabéns! Você atingiu a pontuação necessária para liberar a imagem.'
    )
    addImg()
  }
}
