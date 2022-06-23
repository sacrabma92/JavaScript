"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//Congelar el objeto
Object.freeze(producto);

console.log(producto);

//Preguntar si el objeto esta congelado
console.log(Object.isFrozen(producto));
