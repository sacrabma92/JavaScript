// Object literal
const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 200,
  disponible: true
}

// Obkect Constructor
function Producto(nombre, precio){
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true
}

const producto2 = new Producto('Carro de Juguete',400)

console.log(producto2)

