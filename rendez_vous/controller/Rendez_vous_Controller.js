const rdv = require("../model/Rendez_vous");

module.exports = {
  async getAllrdvs(req, res) {
    const rdvs = await rdv.find().sort({ id_rdv: -1 });
    res.json(rdvs);
  },

  async getRdvC(req, res) {
    const token = await req.params.email;
    console.log("ww", token.email);
    const grdv = await rdv.find({ mail_client: token }).sort({ id_rdv: -1 });
    console.log("ww", grdv);
    // console.log(grdv);
    res.json(grdv);
  },
  async getRdv(req, res) {
    const id = await req.params.idR;
    const grdv = await rdv.findOne({ id_rdv: id });
    res.json(grdv);
  },

  async ajouterrdv(req, res) {
    const rdvs = await rdv.find().sort({ id_rdv: -1 }).limit(1);
    console.log(rdvs);
    const idR = rdvs[0].id_rdv + 1;
    const newrdv = new rdv({
      id_rdv: idR,
      marque: req.body.marque,
      model: req.body.model,
      annee: req.body.annee,
      immatriculation: req.body.immatriculation,
      kilometrage: req.body.kilometrage,
      reparation: [req.body.reparations],
      commentaire: req.body.text,
      date_rdv: req.body.date_rdv,
      nom_client: req.body.nom_client,
      prenom_client: req.body.prenom_client,
      telephone_client: req.body.telephone_client,
      end_repair: "",
      mail_client: req.body.mail_client,
      status: true,
    });
    newrdv.save();
    res.json({ message: "Votre rendez-vous a bien ete saisie" });
  },

  async updateRendez(req, res) {
    const idR = req.params.id;
    console.log(idR);
    const client = await rdv.updateOne(
      { id_rdv: idR },
      {
        status: false,
      }
    );
    console.log(client);
    res.json("has been updated");
  },
  async updateDateR(req, res) {
    const { dateR, idR, mecanic, endR } = req.body;

    const client = await rdv.updateOne(
      { id_rdv: idR },
      {
        date_rdv: dateR,
        end_repair: endR,
        mecanicien: mecanic,
      }
    );
    console.log(client);

    console.log(dateR, idR, mecanic);
    res.json({ message: "updated" });
  },
  async searchRdv(req, res) {
    const name = req.params.nameS;
    console.log(name);
    const client = await rdv.find({ nom_client: name });
    console.log(client);
    res.json(client);
  },
  async supprimerrdv(req, res) {
    const nom = req.params.nom;
    await rdv.deleteOne({ nom_client: nom });
    res.json("suppression avec succes");
  },
};
