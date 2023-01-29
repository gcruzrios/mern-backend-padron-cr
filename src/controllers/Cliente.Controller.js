const  ClienteCtrl={}
const  Cliente=require('../models/Cliente.model');

ClienteCtrl.crear = async(req, res)=>{

    const {identificacion,identificacionTipo,nombreComercial,nombre,papellido,sapellido,sexo,correo,telefono,provincia,canton,distrito,barrio,direccion,tcontrato,jefe} = req.body
    
    const NuevoCliente = new Cliente({
        identificacion,identificacionTipo,nombreComercial,nombre,papellido,sapellido,sexo,correo,telefono,provincia,canton,distrito,barrio,direccion,tcontrato,jefe
    })
    const respuesta = await NuevoCliente.save();
    res.json({
        mensaje:'Cliente Creado',
        respuesta
    })
 
}

ClienteCtrl.listar = async(req, res)=>{
    const respuesta = await Cliente.find();
    res.json(respuesta) 
}


ClienteCtrl.listarId = async(req, res)=>{
    const id= req.params.id;
    const respuesta = await Cliente.findById({_id:id});
    res.json(respuesta)
}

ClienteCtrl.clientesDeunJefe = async(req, res)=>{
    const id= req.params.id;
    const respuesta = await Clientes.find({ jefe:id});
    res.json(respuesta)
}

ClienteCtrl.eliminar = async(req, res)=>{
    const id= req.params.id;
    await Cliente.findByIdAndRemove({ _id:id});
    res.json({
       mensaje:'Cliente eliminado'
    })
}

ClienteCtrl.actualizar = async(req, res)=>{
    const id= req.params.id;
    await Cliente.findByIdAndUpdate({ _id:id}, req.body);
    res.json({
       mensaje:'Cliente actualizado'
    })
}

ClienteCtrl.buscarCliente = async(req, res)=>{
    const { nombre, id } = req.params;
    
    const respuesta = await Cliente.find({ nombre:{$regex:".*"+nombre+".*"}, jefe:id });
    res.json(respuesta)
}


module.exports = ClienteCtrl