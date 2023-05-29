const Mecancien=require('../model/Mecanicien');


module.exports = {
    async getmecanicien(req, res) {
        const  result= await Mecancien.find();
        res.json(result);
    },
 async  ajoutermecanicien(req,res) { 
            const newMecanicien =  new Mecancien(
                {   nom_complet:req.body.nom_complet,
                    id_mecanicien:req.body.id_mecanicien,
                    email:req.body.email,
                    telephone:req.body.telephone,
                    specialite:req.body.specialite,
                    enciente:req.body.enciente
                });
            newMecanicien.save();
            console.log("créer avec succés",newMecanicien)
    },
    async recherchemecanicien(req,res)
{
    const id = req.params.id;
    const result = await Mecancien.find({ id_mecanicien:id });
    res.json(result);
},
    async modifiermecanicien(req, res)
{
    const id = req.params.id;
    const mc=await Mecancien.updateOne({ id_mecanicien:id},{
        nom_complet:req.body.nom_complet,
        email:req.body.email,
        telephone:req.body.telephone,
        specialite:req.body.specialite,
        enciente:req.body.enciente})
        res.json(mc);
},
    async supprimermecanicien(req, res)
{
    const id =req.params.id;
    await Mecancien.deleteOne({ id_mecanicien:id });
    res.json('suppression avec succes')
}
}