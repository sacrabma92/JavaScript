// Remplazar la palabra Pulgadas por "
const producto = 'Monitor 20 Pulgadas'

// .replace para remplazar
console.log(producto)
console.log(producto.replace('Pulgadas','"'))
console.log(producto.replace('Pulgadas','Monitor Curvo'))

// .slice para cortar desde 0 hasta 10
console.log(producto.slice(0,10) );
// .slice para cortar desde el 8 en adelante me muestre
console.log(producto.slice(8) );


// Alternativa a slice
console.log(producto.substring(0,10))
console.log(producto.substring(2,1))

// Obtener la primera letra de la cadena
const usuario = 'Carlos';
console.log(usuario.substring(0,1))
console.log(usuario.charAt(0))


