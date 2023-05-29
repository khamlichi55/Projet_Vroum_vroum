const client=require('../model/Client');


module.exports = {
    async getclient(req, res) {
        const  result= await client.find();
        res.json(result);
    },
 async  ajouterclient(req,res) { 
            const newclient =  new client(
                {   nom_client:req.body.nom,
                    prenom_client:req.body.prenom,
                    telephone_client:req.body.telephone,
                    mail_client:req.body.mail,
                });
            newclient.save();
            console.log("créer avec succés",newclient)
    },
    async rechercheclient(req,res)
{
    const nom = req.params.nom;
    const result = await client.find({ nom_client:nom});
    res.json(result);
},
    async modifierclient(req, res)
{
    const nom = req.params.nom;
    const cl=await client.updateOne({ nom_client:nom},{
        nom_client:req.body.nom,
        prenom_client:req.body.prenom,
        telephone_client:req.body.telephone,
        mail_client:req.body.mail,
        })
    res.json(cl);
},
    async supprimerclient(req, res)
{
    const nom = req.params.nom;
    await client.deleteOne({ nom_client:nom});
    res.json('suppression avec succes')
}
}