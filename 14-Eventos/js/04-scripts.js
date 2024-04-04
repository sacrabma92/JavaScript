
const formulario = document.querySelector('#formulario')


formulario.addEventListener('submit', (e) => {
  e.preventDefault()

  console.log('Buscando....')
  console.log(e.target.method)
  console.log(e.target.action)
})


// Otra forma de enviar
formulario.addEventListener('submit', validarFormulario)

function validarFormulario (e) {
  e.preventDefault()

  console.log(e.target.method)
}