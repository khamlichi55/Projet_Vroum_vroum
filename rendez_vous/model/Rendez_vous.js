const mongoose = require('mongoose')

const rdvSchema = mongoose.Schema(
    {
        type_de_vehicule : String,
        marque : String,
        model : String,
        annee:Number,
        immatriculation:Number,
        kilometrage:Number,
        reparation:[],
        commentaire:String,
        nom_client:String,
        prenom_client:String,
        telephone_client:Number,
        mail_client:String,

    }
)

const model = mongoose.model('rendez_vous', rdvSchema)
module.exports = model

