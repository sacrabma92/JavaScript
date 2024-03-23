// Object literal
const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 200,
  disponible: true,
  mostrarInfo: function () {
    console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
  }
}

// Object literal
const producto2 = {
  nombre: "Tablet",
  precio: 400,
  disponible: true,
  mostrarInfo: function () {
    console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
  }
}



producto.mostrarInfo()
producto2.mostrarInfo()