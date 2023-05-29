const mongoose = require('mongoose')

const MecanicenSchema = mongoose.Schema(
    {
        nom_complet : String,
        id_mecanicien : Number,
        email : String,
        telephone:String,
        Specialite:String,
        enciente:String
    }
)

const model = mongoose.model('Mecanicien_model', MecanicenSchema)
module.exports = model

