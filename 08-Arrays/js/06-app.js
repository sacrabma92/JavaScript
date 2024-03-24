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

let resultado

resultado = [...carrito, producto]
resultado = [...resultado, producto2]
resultado = [producto3,...resultado]

console.table(resultado)