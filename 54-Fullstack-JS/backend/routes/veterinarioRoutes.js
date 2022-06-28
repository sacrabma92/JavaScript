import express from 'express';
import { 
    perfil,
    registrar,
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPaswword
 } from '../controllers/veterinarioController.js';
import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();

// Area publica
router.post('/', registrar )
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassword);
router.route('/olvide-paswword/:token').get(comprobarToken).post(nuevoPaswword)

// Area privada
router.get('/perfil', checkAuth, perfil)













export default router;