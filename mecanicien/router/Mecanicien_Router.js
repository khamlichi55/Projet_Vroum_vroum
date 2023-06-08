const { Route } = require("express");
const express = require("express");
const Controller = require("../controller/Mecanicien_Controller");
const auth = require("../middleware/auth");

const routeMecanicien = express.Router();

routeMecanicien.get("/mecanicien", Controller.getmecanicien);
routeMecanicien.post("/mecanicien/add", Controller.ajoutermecanicien);
routeMecanicien.get("/mecanicien/search/:id", Controller.recherchemecanicien);
routeMecanicien.put("/mecanicien/update/:id", Controller.modifiermecanicien);
routeMecanicien.delete(
  "/mecanicien/delete/:id",
  Controller.supprimermecanicien
);

module.exports = routeMecanicien;
