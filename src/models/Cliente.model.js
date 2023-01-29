const mongoose=require('mongoose')
const {Schema}=mongoose

const ClienteSchema = new Schema({
    identificacion: Number,
    identificacionTipo: String,
    nombreComercial:String,
    nombre: String,
    papellido: String,
    sapellido: String,
    sexo: Number,
    correo:String,
    telefono:String,
    provincia: String,
    canton:String,
    distrito: String,
    barrio:String,
    direccion:String,
    tcontrato: String,
    jefe:String
})

module.exports= mongoose.model('cliente', ClienteSchema);