"use strict"

// Object literal
const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 200,
  disponible: true
}

Object.freeze(producto)

producto.imagen = 'imagen.jpg'
producto.disponible = false

console.log(producto)