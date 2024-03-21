const producto = 'Lavadora 75 kls'

// .repeat te va a permitir una cadena de texto...

const texto = ' en Promocion'.repeat(3)

console.log(texto)
console.log(`${producto} ${texto} !!!`)


// Split, dividir un string
const actividad = "Estoy aprendiendo JavaScript, modernos"
console.log(actividad.split(" "))

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar'
console.log(hobbies.split(', '))

const tweet = "Aprendiendo JavaScript Moderno #JSModerno"
console.log(tweet.split('#'))