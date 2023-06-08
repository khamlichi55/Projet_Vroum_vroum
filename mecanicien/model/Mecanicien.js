const mongoose = require("mongoose");
const MecanicenSchema = mongoose.Schema({
  nom_complet: String,
  id_mecanicien: String,
  email: String,
  telephone: String,
  specialite: String,
  embauche: Date,
});

const model = mongoose.model("Mecanicien_model", MecanicenSchema);
module.exports = model;
