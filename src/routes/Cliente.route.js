const {Router} = require('express');
const router=Router();

const ClienteCtrl= require('../controllers/Cliente.Controller');
const Auth = require('../helpers/Auth');


router.post('/crear',Auth.verificarToken, ClienteCtrl.crear);
router.get('/listar',Auth.verificarToken, ClienteCtrl.listar);
router.get('/listar/:id',Auth.verificarToken, ClienteCtrl.listarId);
router.get('/listar-jefe/:id',Auth.verificarToken, ClienteCtrl.clientesDeunJefe);

router.put('/actualizar/:id',Auth.verificarToken, ClienteCtrl.actualizar);
router.delete('/eliminar/:id',Auth.verificarToken, ClienteCtrl.eliminar);

router.get('/buscar/:nombre/:id',Auth.verificarToken, ClienteCtrl.buscarCliente);


module.exports = router;