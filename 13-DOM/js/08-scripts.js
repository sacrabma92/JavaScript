
const navegacion = document.querySelector('.navegacion')

// console.log(navegacion)
// console.log(navegacion.childNodes) // Los espacios en blanco son considerados en elementos
// console.log(navegacion.children)


// console.log(navegacion.children[1].nodeName)
// console.log(navegacion.children[1].nodeType)

const card = document.querySelector('.card')

// card.children[1].children[1].textContent = 'Nuevo texto desde traversing the DOM'
// card.children[0].src = 'img/hacer3.jpg'

// console.log(card.children[1].children[1].textContent)


// Traversing de Hijo al padre

// console.log(card.parentNode)
// console.log(card.parentElement.parentElement.parentElement)

// console.log(card)
// console.log(card.nextElementSibling.nextElementSibling)



const ultimoCard = document.querySelector('.card:nth-child(4)')
console.log(ultimoCard.previousElementSibling)