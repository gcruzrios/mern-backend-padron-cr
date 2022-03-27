const mongoose=require('mongoose')
const {Schema}=mongoose

const JefeSchema = new Schema({
    identificacion: String,
    nombre: String,
    papellido: String,
    sapellido: String,
    correo: String,
    contrasena: String
})

module.exports= mongoose.model('jefe', JefeSchema);