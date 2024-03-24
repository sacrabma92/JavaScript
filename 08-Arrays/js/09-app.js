const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisor', precio: 200 },
  { nombre: 'Tablet', precio: 300 },
  { nombre: 'Audifonos', precio: 700 },
  { nombre: 'Teclado', precio: 1000 },
  { nombre: 'Celular', precio: 3000 },
]

for(let i = 0; i < carrito.length; i++){
  console.log(`${carrito[i].nombre} - Precio ${carrito[i].precio}`)
}

carrito.forEach( (producto) => {
  console.log(`${producto.nombre} - Precio ${producto.precio}`)
})