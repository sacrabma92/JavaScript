// Object literal
const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 200,
  disponible: true,
  informacion: {
    medidas: {
      peso: '1kg',
      medidad: '1m'
    },
    fabricacion: {
      pais: 'Colombia',
      ciudad: 'Bucaramanga'
    }
  }
}

const { nombre,informacion, informacion: { fabricacion, fabricacion: {pais} } } = producto

console.log(informacion);
console.log(fabricacion);
console.log(pais);