const mongoose=require('mongoose')
const {Schema}=mongoose

const CodigoSchema = new Schema({

    Cod_Prov : Number,
    Provincia: String,
    Cod_Canton: Number,
    Canton: String,
    Cod_Distrito:Number,
    Distrito:String,
    Cod_Barrio:Number,
    Barrio:String
    
},{ collection : 'division' })

module.exports= mongoose.model('division', CodigoSchema);