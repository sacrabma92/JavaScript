const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisor', precio: 200 },
  { nombre: 'Tablet', precio: 300 },
  { nombre: 'Audifonos', precio: 700 },
  { nombre: 'Teclado', precio: 1000 },
  { nombre: 'Celular', precio: 3000 },
]

carrito.forEach( (producto) => {
  console.log(`${producto.nombre} - Precio ${producto.precio}`)
})

carrito.map( (producto) => {
  console.log(`${producto.nombre} - Precio ${producto.precio}`)
})