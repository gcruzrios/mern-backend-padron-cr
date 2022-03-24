const mongoose=require('mongoose')
const {Schema}=mongoose

const VotanteSchema = new Schema({

    CEDULA: Number, 
    CODELEC: Number, 
    SEXO: Number, 
    FECHACADUC: Number, 
    JUNTA: Number, 
    NOMBRE: String,
    PAPELLIDO: String,
    SAPELLIDO: String
},{ collection : 'padron' })

module.exports= mongoose.model('padron', VotanteSchema);