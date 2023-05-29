const mongoose = require('mongoose')

const MecanicenSchema = mongoose.Schema(
    {
        nom_client:String,
        prenom_client:String,
        telephone_client:Number,
        mail_client:String,
    }
)

const model = mongoose.model('Client', MecanicenSchema)
module.exports = model

