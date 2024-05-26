// importamos express
const express = require('express');
// importamos las rutas de express
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Obteniendo todas las canciones');
})



module.exports = router;