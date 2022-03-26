const {Router} = require('express');
const router=Router();

const UserCtrl= require('../controllers/User.Controller');
const Auth = require('../helpers/Auth');


router.post('/crear',UserCtrl.crear);
router.get('/listar',UserCtrl.listar);

router.get('/buscar/:CEDULA', UserCtrl.buscarId);

module.exports = router;