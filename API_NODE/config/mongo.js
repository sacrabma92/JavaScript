// Declaramos la constante mongoose y requerimos el paquete mongoose
const mongoose = require('mongoose');

// Declaramos la constante dbConnect y le asignamos una funcion flecha. Dentro de la funcion flecha declaramos una constante llamada uri y le asignamos la direccion de la base de datos que se encuentra en la variable de entorno MONGO_URI. Luego declaramos una constante llamada db y le asignamos la conexion a la base de datos con mongoose.connect. Finalmente, declaramos un evento para saber si la conexion fue exitosa o no.
const dbConnect = () => {
  // Declaramos la constante uri y le asignamos la direccion de la base de datos que se encuentra en la variable de entorno MONGO_URI
  const DB_URI = process.env.DB_URI;
  // Configuramos la conexion a la base de datos. Utilizamos el metodo connect de mongoose y le pasamos la uri y un objeto con las opciones useNewUrlParser y useUnifiedTopology
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  // Declaramos una funcion flecha con dos parametros, err y res. Si hay un error, lo mostramos en consola. Si no hay error, mostramos un mensaje de exito en consola
  (err, res) => {
    // Si hay un error, lo mostramos en consola
    if (err) {
      console.error(err);
      console.log('❌ Error connecting to the database');
    } else {
      // Si no hay error, mostramos un mensaje de exito en consola
      console.log('✅ Successfully connected to the database');
    }
  }
);
}

// Exportamos la constante dbConnect
module.exports = dbConnect;