const { Route } = require("express");
const express = require("express");
const Controller = require("../controller/Rendez_vous_Controller");
const auth = require("../middleware/auth");

const routerdv = express.Router();

routerdv.get("/rdvs", Controller.getAllrdvs);
routerdv.post("/rdv/add", Controller.ajouterrdv);
routerdv.get("/rdv/getrdv/:idR", Controller.getRdv);
routerdv.get("/rdv/getrdvC/:email", Controller.getRdvC);
routerdv.get("/rdv/search/:nameS", Controller.searchRdv);
routerdv.put("/rdv/update/:id", Controller.updateRendez);
routerdv.put("/rdv/updateDate", Controller.updateDateR);
routerdv.delete("/rdv/delete/:nom", Controller.supprimerrdv);

module.exports = routerdv;
