const { Route } = require("express");
const express = require("express");
const Controller = require("../controller/Client_Controller");
const auth = require("../middleware/auth");
const cors = require("cors");

const routeclient = express.Router();

routeclient.get("/client", auth, Controller.getclient);
routeclient.post("/client/add", Controller.ajouterclient);
routeclient.get("/client/search/:nom", Controller.rechercheclient);
routeclient.put("/client/update/:nom", Controller.modifierclient);
routeclient.delete("/client/delete/:nom", Controller.supprimerclient);

module.exports = routeclient;
