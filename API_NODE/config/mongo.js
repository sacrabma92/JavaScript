// Declaramos la constante mongoose y requerimos el paquete mongoose
const mongoose = require('mongoose');

// Declaramos la constante dbConnect y le asignamos una funcion flecha. Dentro de la funcion flecha declaramos una constante llamada uri y le asignamos la direccion de la base de datos que se encuentra en la variable de entorno MONGO_URI. Luego declaramos una constante llamada db y le asignamos la conexion a la base de datos con mongoose.connect. Finalmente, declaramos un evento para saber si la conexion fue exitosa o no.
const dbConnect = async () => {
  // Declaramos la constante uri y le asignamos la direccion de la base de datos que se encuentra en la variable de entorno MONGO_URI
  const DB_URI = process.env.DB_URI;
  // Conexion a la base de datos
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(DB_URI) 
    console.log('Mongo connected')
}
catch(error) {
    console.log(error)
    process.exit()
}
}

// Exportamos la constante dbConnect
module.exports = dbConnect;