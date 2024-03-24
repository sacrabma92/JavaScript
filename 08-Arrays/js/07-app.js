const carrito = []

// Definir un producto
const producto = {
  nombre: 'Monitor de 32 Pulgadas',
  precio: 4000
}

const producto2 = {
  nombre: 'Tablet',
  precio: 2000
}

const producto3 = {
  nombre: 'Carro',
  precio: 1000000
}

const producto4 = {
  nombre: 'Jeringa',
  precio: 56
}

let resultado

carrito.push(producto)
carrito.push(producto2)
carrito.push(producto3)
carrito.push(producto4)

console.table(carrito)

// Eliminar ultimo elemento de un arreglo
// resultado.pop()
// console.table(resultado)

// Eliminar del inicio del arreglo
// carrito.shift()
// console.table(carrito)

// Eliminar en una posicion especifica
carrito.splice(1,1)
console.table(carrito)