// Declaramos la constante mongoose y requerimos el paquete mongoose
const mongoose = require('mongoose');

// Definimos el esquema de la colección User
const StorageSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  filename: {
    type: Number,
  },
}, {
  timestamps: true, // Guarda la fecha de creación y actualización de los registros createdAt y updatedAt
  versionKey: false, // No crea el atributo _v en la colección
});

module.exports = mongoose.model('storages', StorageSchema); // Exportamos el modelo User