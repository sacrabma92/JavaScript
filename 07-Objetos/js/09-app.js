"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//No se pueden agregar ni eliminar propiedades, SI permite modificar
Object.seal(producto);

producto.disponible = false;

console.log(producto);

//Mirar si un objeto esta .seal
console.log(Object.isSealed(producto));
