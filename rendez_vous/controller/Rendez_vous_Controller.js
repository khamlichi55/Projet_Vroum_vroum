const rdv=require('../model/Rendez_vous');

module.exports = {
    
    async  ajouterrdv(req,res) { 
            const newrdv =  new rdv(
                {   
                    type_de_vehicule : req.body.type_de_vehicule ,
                    marque : req.body.marque,
                    model : req.body.model,
                    annee:req.body.annee,
                    immatriculation:req.body.immatriculation,
                    kilometrage:req.body.kilometrage,
                    reparation:[req.body.reparation],
                    commentaire:req.body.commentaire,
                    nom_client:req.body.nom_client,
                    prenom_client:req.body.prenom_client,
                    telephone_client:req.body.telephone_client,
                    mail_client:req.body.mail_client
                });
            newrdv.save();
            console.log("créer avec succés",newrdv)
    },
    async rechercherdv(req,res)
{
    const nom = req.params.nom;
    const result = await rdv.find({ nom_client:nom });
    res.json(result);
},
    async supprimerrdv(req, res)
{
    const nom = req.params.nom;
    await rdv.deleteOne({ nom_client:nom });
    res.json('suppression avec succes')
}
}