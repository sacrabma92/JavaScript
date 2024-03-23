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


console.log(producto);
console.log(producto.informacion.fabricacion.pais);
console.log(producto.informacion);