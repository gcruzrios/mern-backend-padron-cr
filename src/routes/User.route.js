const {Router} = require('express');
const router=Router();

const UserCtrl= require('../controllers/User.Controller');
const Auth = require('../helpers/Auth');


router.post('/crear',UserCtrl.crear);
router.get('/listar',UserCtrl.listar);

//router.get('/buscar/:cedula/:id', UserCtrl.buscarEmpleado);

module.exports = router;