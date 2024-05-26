// importamos express
const express = require('express');
// importamos el modulo de file system
const fs = require('fs');
// importamos las rutas de express
const router = express.Router();

// Declaramos la constante PATH_ROUTES que contiene la ruta de la carpeta routes
const PATH_ROUTES = __dirname;

// Declaramos la constante removeExtension que recibe un parametro fileName y retorna el nombre del archivo sin la extension
const removeExtension = (fileName) => {
  return fileName.split('.').shift();
}

// funcion para leer los archivos de la carpeta routes
fs.readdirSync(PATH_ROUTES).filter((file) => {
  // almacenamos el nombre del archivo sin la extension
  const name = removeExtension(file);
  // si el nombre del archivo es diferente de index
  if(name !== 'index') {
    // la ruta usara el nombre del archivo y requerira el archivo
    router.use(`/${name}`, require(`./${file}`));
  }
});




// exportamos el modulo de rutas
module.exports = router;