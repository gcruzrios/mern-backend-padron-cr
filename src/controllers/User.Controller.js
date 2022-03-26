const  UserCtrl={}
const User = require('../models/User.model')

const bcrypt= require('bcryptjs')
const jwt=require('jsonwebtoken')


UserCtrl.crear = async(req, res)=>{

    const {CEDULA,CODELEC,SEXO,FECHACADUC,JUNTA,NOMBRE,PAPELLIDO,SAPELLIDO} = req.body;
    

    //const {nombre, apellidos, identificacion, puesto, tcontrato, jefe} = req.body;
    const NuevoUser = new User({
        CEDULA,CODELEC,SEXO,FECHACADUC,JUNTA,NOMBRE,PAPELLIDO,SAPELLIDO
    })
    const respuesta = await NuevoUser.save();
    res.json({
        mensaje:'User Creado',
        respuesta
    })



}

UserCtrl.listar = async(req, res)=>{
    const respuesta = await User.find({CEDULA:601050658});
    //const Users = await User.find({});
    res.json({
       respuesta
    }) 
}

UserCtrl.buscarId = async(req, res)=>{
    const { CEDULA } = req.params;
    //{$regex:".*"+CEDULA+".*"}
    console.log(CEDULA);
    const respuesta = await User.find({CEDULA:CEDULA});
    res.json(respuesta)
}


module.exports = UserCtrl