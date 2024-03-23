// Object literal
const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 200,
  disponible: true
}

const medidas = {
  peso: '1kg',
  medida: '1m'
}

console.log(producto)
console.log(medidas)


// Pegar dos objetos con el assign
const resultado = Object.assign(producto, medidas)
console.log(resultado)

// Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas}
console.log(resultado2)