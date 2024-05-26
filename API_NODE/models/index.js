// creamos un objeto que contenga todos los modelos de la base de datos
const models = {
  userModel: require('./nosql/user'),
  tracksModel: require('./nosql/track'),
  storageModel: require('./nosql/storage'),
}



module.exports = models;