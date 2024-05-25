// Importamos la libreria dotenv para poder usar las variables de entorno
require('dotenv').config();
// Importamos la libreria express
const express = require('express');
// Importamos la libreria cors
const cors = require('cors');
// Importamos el archivo de configuracion de la base de datos
const dbConnect = require('./config/mongo');
// Creamos la variable app que contendra la aplicacion
const app = express();


// Le asigano a la variable app el uso de la libreria cors
app.use(cors());

// Definimos el puerto en el que se ejecutara la aplicacion
const port = process.env.PORT || 3000;

// Definimos app.listen para que la aplicacion se ejecute en el puerto definido
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

dbConnect();