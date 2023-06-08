const mongoose = require("mongoose");

const rdvSchema = mongoose.Schema({
  id_rdv: Number,
  marque: String,
  cylinder: String,
  model: String,
  annee: Number,
  immatriculation: String,
  kilometrage: Number,
  reparation: {},
  commentaire: {
    type: String,
    default: "",
  },
  nom_client: String,
  prenom_client: String,
  telephone_client: Number,
  mail_client: String,
  status: Boolean,
  end_repair: Date,
  mecanicien: {
    type: String,
    default: "employe",
  },
  date_rdv: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("rendez_vous", rdvSchema);
module.exports = model;
