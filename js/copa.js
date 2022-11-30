/* 



*/

// TESTE

function createCalendarTitle(day, date) {
  return `
    <h3><strong>Copa do Mundo 2022</strong> ${day} ${date}</h3>
  `
}

function createTeamBox(teamIcon, team, score) {
  return `
        <div class="g-box">
          <div>
            <img src="../assets/copa/${teamIcon}-icon.svg" alt="" />
            <span>${team}</span>
          </div>
          <span>${score}</span>
        </div>
  `
}

function createGames(teamOne, teamTwo) {
  return `
      <div class="games">
        ${teamOne}
        ${teamTwo}
      </div>
  `
}

function createSection(date, ...game) {
  return `
      <section>
        <div class="wrapper">
          ${date}
          <div class="games-box">
            ${game}
          </div>
        </div>
      </section>
  `
}

document.body.innerHTML +=
  createSection(
    createCalendarTitle('Domingo', '20/11'),
    createGames(
      createTeamBox('Catar', 'Catar', 0),
      createTeamBox('Equador', 'Equador', 2)
    )
  ) +
  createSection(
    createCalendarTitle('Segunda', '21/11'),
    createGames(
      createTeamBox('Inglaterra', 'Inglaterra', 6),
      createTeamBox('Ira', 'Irã', 2)
    ) +
      createGames(
        createTeamBox('senegal', 'Senegal', 0),
        createTeamBox('holanda', 'Holanda', 2)
      ) +
      createGames(
        createTeamBox('usa', 'Estados Unidos', 1),
        createTeamBox('wales', 'País de Gales', 1)
      )
  ) +
  createSection(
    createCalendarTitle('Terça', '22/11'),
    createGames(
      createTeamBox('argentina', 'Argentina', 1),
      createTeamBox('arabia', 'Arábia Saudita', 2)
    ) +
      createGames(
        createTeamBox('dinamarca', 'Dinamarca', 0),
        createTeamBox('tunisia', 'Tunísia', 0)
      ) +
      createGames(
        createTeamBox('mexico', 'México', 0),
        createTeamBox('polonia', 'Polônia', 0)
      ) +
      createGames(
        createTeamBox('france', 'França', 4),
        createTeamBox('australia', 'Austrália', 1)
      )
  ) +
  createSection(
    createCalendarTitle('Quarta', '23/11'),
    createGames(
      createTeamBox('marrocos', 'Marrocos', 0),
      createTeamBox('croacia', 'Croácia', 0)
    ) +
      createGames(
        createTeamBox('alemanha', 'Alemanha', 1),
        createTeamBox('japao', 'Japão', 2)
      ) +
      createGames(
        createTeamBox('espanha', 'Espanha', 7),
        createTeamBox('costa', 'Costa Rica', 0)
      ) +
      createGames(
        createTeamBox('belgica', 'Bélgica', 1),
        createTeamBox('canada', 'Canadá', 0)
      )
  )
