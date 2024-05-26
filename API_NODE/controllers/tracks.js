// importar el modelo de tracks
const {tracksModel} = require('../models');


// Obtener la lista de la BD
const getItems = async (req, res) => {
  const data = await tracksModel.find({})
  res.send({data});
}

// Obtener un item de la BD por su ID
const getItem = (req, res) => {
  res.send('Detalle de un item');
}

// Crear un item en la BD 
const createItem = async(req, res) => {
  const {body} = req;
  // mandamos a llamar el modelo de tracks y creamos un nuevo registro
  const data = await tracksModel.create(body);
  // respondemos con el registro creado
  res.send(data);
}

// Actualizar un item en la BD 
const updateItems = (req, res) => {

}

// Eliminar un item de la BD
const deleteItem = (req, res) => {

}




module.exports = { 
getItems,
getItem,
createItem,
updateItems,
deleteItem
}