const busqueda = document.querySelector('.busqueda')

// Evento que detecta cuando escribe
busqueda.addEventListener('keydown', () => {
  console.log('Escribiendo...')
})

// Evento que detecta cuando sulta una tecla
busqueda.addEventListener('keyup', () => {
  console.log('Soltando tecla')
})

// Evento que detecta cuando sales de un formulario
busqueda.addEventListener('blur', () => {
  console.log('Sali de la barra de busqueda')
})

// Evento que detecta cuando presiona Crl + C
busqueda.addEventListener('copy', () => {
  console.log('Texto copiado')
})

// Evento que detecta cuando presiona Crl + V
busqueda.addEventListener('paste', () => {
  console.log('Texto pegado')
})

// Evento que detecta cuando presiona Crl + X
busqueda.addEventListener('cut', () => {
  console.log('Texto Cortado')
})

// Evento que detecta cuando, copia, pega, corta, escribe
busqueda.addEventListener('input', () => {
  console.log('Evento que ejecuta todos...')
})

// Evento que detecta cuando, copia, pega, corta, escribe
busqueda.addEventListener('input', (e) => {
  if(e.target.value === ''){
    console.log('Fallo la validacion')
  }
  console.log(e.target.value)
})