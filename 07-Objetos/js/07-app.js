// Object literal
const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 200,
  disponible: true
}

producto.disponible = false

delete producto.precio

console.log(producto)