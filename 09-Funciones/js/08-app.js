
function sumar( a, b){
  return a + b
}

const resultado = sumar(2,3)
console.log(resultado)

// Ejemplo mas avanzado
let total = 0
function agregarCarrito(precio){
  return total += precio
}

function calcularImpuesto(total){
  return total * 1.19
}

total = agregarCarrito(300)
total = agregarCarrito(100)

const totalPagar = calcularImpuesto(total)

console.log(total)
console.log(`Total a pagar: ${totalPagar}`)