const mongoose=require('mongoose')
const {Schema}=mongoose

const UsuarioSchema = new Schema({
    identificacion:String,
    nombre: String,
    papellido: String,
    sapellido: String,
    sexo: String,
    puesto: String,
    tcontrato: String,
    jefe:String
})

module.exports= mongoose.model('usuario', UsuarioSchema);