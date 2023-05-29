const { Route } = require('express');
const express = require('express');
const Controller = require('../controller/Client_Controller');
const auth=require("../middleware/auth")



const routeclient = express.Router();

routeclient.get('/client', auth,Controller.getclient);
routeclient.post('/client/add',auth,Controller.ajouterclient);
routeclient.get('/client/search/:nom', auth,Controller.rechercheclient);
routeclient.put('/client/update/:nom', auth,Controller.modifierclient);
routeclient.delete('/client/delete/:nom', auth,Controller.supprimerclient);

module.exports = routeclient;