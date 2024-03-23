"use strict"

// Object literal
const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 200,
  disponible: true
}

Object.seal(producto)

producto.disponible = false
// producto.imagen = 'imagen.jpg'
// delete producto.precio

console.log(producto)

console.log(Object.isFrozen(producto))