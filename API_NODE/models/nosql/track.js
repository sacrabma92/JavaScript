// Declaramos la constante mongoose y requerimos el paquete mongoose
const mongoose = require('mongoose');

// Definimos el esquema de la colección User
const TrackSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  album: {
    type: String,
  },
  cover: {
    type: String,
    valdiate: {
      validator: (req) => {
        return true;
      },
      message: "ERROR_URL",
    },
  },
  artist: {
    name: {
      type: String,
    },
    nickname: {
      type: String,
    },
    nationality: {
      type: String
    }
  },
  duration: {
    start: {
      type: Number,
    },
    end: {
      type: Number,
    },
  },
  mediaId: {
    type: mongoose.Types.ObjectId,
  }
},
  {
    timestamps: true, // Guarda la fecha de creación y actualización de los registros createdAt y updatedAt
    versionKey: false, // No crea el atributo _v en la colección
  });

module.exports = mongoose.model('tracks', TrackSchema); // Exportamos el modelo User