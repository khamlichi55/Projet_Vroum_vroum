const Mecancien = require("../model/Mecanicien");

module.exports = {
  async getmecanicien(req, res) {
    const result = await Mecancien.find();
    res.json(result);
  },
  async ajoutermecanicien(req, res) {
    const { nom_complet, email, telephone, specialite } = req.body;
    // verify if username and password are not empty
    if (!nom_complet || !email || !telephone || !specialite) {
      return res.json({
        message: "veuiller remplir tout les colonnes",
      });
    }
    const nbr = `VR-${Math.floor(Math.random() * 1000000)}`;

    const newMecanicien = new Mecancien({
      nom_complet: req.body.nom_complet,
      id_mecanicien: nbr,
      email: req.body.email,
      telephone: req.body.telephone,
      specialite: req.body.specialite,
      embauche: Date.now(),
    });
    newMecanicien.save();
    res.json({
      message: "creation du mecanicien avec succes",
    });
  },
  async recherchemecanicien(req, res) {
    const id = req.params.id;
    const result = await Mecancien.find({ id_mecanicien: id });
    res.json(result);
  },
  async modifiermecanicien(req, res) {
    const id = req.params.id;
    const mc = await Mecancien.updateOne(
      { id_mecanicien: id },
      {
        nom_complet: req.body.nom_complet,
        email: req.body.email,
        telephone: req.body.telephone,
        specialite: req.body.specialite,
        enciente: req.body.enciente,
      }
    );
    res.json(mc);
  },
  async supprimermecanicien(req, res) {
    const id = req.params.id;
    await Mecancien.deleteOne({ id_mecanicien: id });
    res.json("suppression avec succes");
  },
};
