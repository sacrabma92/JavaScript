const producto = 'Monitor de 19 Pulgadas '
const precio = '30 USD '

console.log(producto.concat(precio))
console.log(producto.concat('En descuento'))

// Forma de concatenar con +
console.log("El producto " + producto + " Con un precio de: " + precio)

// Template Strings, Template Literal Backtick
console.log(`El producto ${producto} tiene un precio de: $ ${precio}`)