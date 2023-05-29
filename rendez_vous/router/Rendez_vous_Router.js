const { Route } = require('express');
const express = require('express');
const Controller = require('../controller/Rendez_vous_Controller');
const auth=require("../middleware/auth")



const routerdv = express.Router();

routerdv.post('/rdv/add',Controller.ajouterrdv);
routerdv.get('/rdv/search/:nom', auth,Controller.rechercherdv);
routerdv.delete('/rdv/delete/:nom', auth,Controller.supprimerrdv);

module.exports = routerdv;