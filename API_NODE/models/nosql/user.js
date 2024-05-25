// Declaramos la constante mongoose y requerimos el paquete mongoose
const mongoose = require('mongoose');

// Definimos el esquema de la colección User
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  },
}, {
  timestamps: true, // Guarda la fecha de creación y actualización de los registros createdAt y updatedAt
  versionKey: false, // No crea el atributo _v en la colección
});

module.exports = mongoose.model('users', UserSchema); // Exportamos el modelo User