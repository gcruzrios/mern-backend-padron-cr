const {Router} = require('express');
const router=Router()

const JefeCtrl= require('../controllers/Jefe.Controller')

router.post('/crear', JefeCtrl.crearJefe);
router.put('/actualizar/:id', JefeCtrl.actualizar);
router.delete('/eliminar/:id', JefeCtrl.eliminar);

router.post('/login', JefeCtrl.login);
router.get('/listar', JefeCtrl.listar);


module.exports = router;