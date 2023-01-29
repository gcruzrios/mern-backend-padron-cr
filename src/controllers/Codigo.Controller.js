const  CodigoCtrl={}
const Codigo = require('../models/Codigo.model')

const bcrypt= require('bcryptjs')
const jwt=require('jsonwebtoken')


CodigoCtrl.listarProvincia = async(req, res)=>{

    const respuesta = await Codigo.distinct('Provincia')  
    //const respuesta = await Codigo.find({CEDULA:601050658});
    //const Users = await User.find({});
    res.json({
       respuesta
    }) 
}


CodigoCtrl.listarCanton = async(req, res)=>{

    const { provincia } = req.params;
    const respuesta = await Codigo.distinct('Canton', {Provincia:provincia});
    //const Users = await User.find({});{Cod_Prov:1,Cod_Canton:1}
    res.json({
       respuesta
    }) 
}

CodigoCtrl.listarDistrito = async(req, res)=>{
    const { provincia,canton } = req.params;
    const respuesta = await Codigo.distinct('Distrito',{Provincia:provincia, Canton:canton});
    //const Users = await User.find({});
    res.json({
       respuesta
    }) 
}

CodigoCtrl.listarBarrio = async(req, res)=>{
    const { provincia,canton,distrito } = req.params;
    const respuesta = await Codigo.distinct('Barrio',{Provincia:provincia,Canton:canton,Distrito:distrito});
    //const Users = await User.find({});
    res.json({
       respuesta
    }) 
}
CodigoCtrl.buscarBarrio = async(req, res)=>{
    const { Barrio } = req.params;
    //{$regex:".*"+CEDULA+".*"}
    console.log(Barrio);
    const respuesta = await Codigo.find({Barrio:Barrio});
    res.json(respuesta)
}


module.exports = CodigoCtrl