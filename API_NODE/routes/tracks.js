// importamos express
const express = require('express');
// importamos las rutas de express
const router = express.Router();
// importamos el controlador de tracks
const { getItems, getItem, createItem } = require('../controllers/tracks');

router.get("/", getItems );

router.post("/", createItem );



module.exports = router;