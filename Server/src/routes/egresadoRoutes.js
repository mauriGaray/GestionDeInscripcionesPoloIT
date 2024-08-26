const express = require("express");
const router = express.Router();

//Routes

//Perfil
router.get("/perfil", (req, res) => {
  res.send("Perfil del egresado");
}); // para mostrar el perfil
router.put("/perfil", (req, res) => {
  res.send("Actualizando perfil");
}); // para actualizar el perfil
//Proyectos
router.get("/proyecto", (req, res) => {
  res.send("Proyecto del egresado");
}); // para mostrar el proyecto en el que esta inscrito el egresado
//Mentor
router.get("/mentor", (req, res) => {
  res.send("Mentor del egresado");
}); // para mostrar el mentor del egresado

module.exports = router;
