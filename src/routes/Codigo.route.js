const {Router} = require('express');
const router=Router();

const CodigoCtrl= require('../controllers/Codigo.Controller');
const Auth = require('../helpers/Auth');


router.get('/listarProvincia',CodigoCtrl.listarProvincia);

router.get('/listarCanton/:provincia', CodigoCtrl.listarCanton);

router.get('/listarDistrito/:provincia/:canton', CodigoCtrl.listarDistrito);

router.get('/listarBarrio/:provincia/:canton/:distrito', CodigoCtrl.listarBarrio);

module.exports = router;