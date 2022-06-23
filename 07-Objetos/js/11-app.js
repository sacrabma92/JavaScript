const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`Ël producto: ${this.nombre} tiene un precio de: ${this.precio} `)
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 3600,
    disponible: true,
    mostrarInfo: function(){
        console.log(`Ël producto: ${this.nombre} tiene un precio de: ${this.precio} `)
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();