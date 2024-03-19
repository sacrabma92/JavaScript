// Cortar espacios en blanco de un string
const producto = '                Monitor 20 Pulgadas            '

console.log(producto)
console.log(producto.length)


// Eliminar espacios del inicio...
console.log(producto.trimStart())

// Eliminar espacios del final...
console.log(producto.trimEnd())

// Eliminar espacios de ambos lados
console.log(producto.trimStart().trimEnd())

// Eliminar espacios de ambos lados
console.log(producto.trim())