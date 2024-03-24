const producto = {
  nombre: 'Monito 20 Pulgadas',
  precio: 300,
  disponible: true
}

// Destructuring
const { nombre } = producto

console.log(nombre)

// Destructuring con Arreglos
const numeros = [10,20,30,40,50]

// const [primero, segundo, tercero, cuarto, quinto] = numeros
const [primero,  ...tercero] = numeros

console.log(tercero)