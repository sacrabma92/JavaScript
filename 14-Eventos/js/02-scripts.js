
const nav = document.querySelector('.navegacion');


// Evento de Click sobre navegacion
nav.addEventListener('navegacion', () => {
  console.log('Click en nav')
})

// Evento cuando el mouse entra en navegacion
nav.addEventListener('mouseenter', () => {
  console.log('Entrando en nav')

  nav.style.backgroundColor='red'
})

// Evento cuando el mouse sale de navegacion
nav.addEventListener('mouseout', () => {
  console.log('Saliendo de la navegacion')


  nav.style.backgroundColor='transparent'
})

// Evento doble click
nav.addEventListener('dblclick', () => {
  console.log('Evento Doble Click')

  nav.style.backgroundColor = 'white'
})