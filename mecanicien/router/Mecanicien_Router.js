const { Route } = require('express');
const express = require('express');
const Controller = require('../controller/Mecanicien_Controller');
const auth=require("../middleware/auth");



const routeMecanicien = express.Router();

routeMecanicien.get('/mecanicien',auth,Controller.getmecanicien);
routeMecanicien.post('/mecanicien/add',auth,Controller.ajoutermecanicien);
routeMecanicien.get('/mecanicien/search/:id',auth,Controller.recherchemecanicien);
routeMecanicien.put('/mecanicien/update/:id',auth,Controller.modifiermecanicien);
routeMecanicien.delete('/mecanicien/delete/:id',auth,Controller.supprimermecanicien);

module.exports = routeMecanicien;