const express = require("express");
const router = express.Router();

//Routes

//Perfil
router.get("/perfil", (req, res) => {
  res.send("Perfil del mentor");
}); // para mostrar el perfil
router.put("/perfil", (req, res) => {
  res.send("Actualizando perfil");
}); // para actualizar el perfil

//Proyectos
router.get("/proyecto", (req, res) => {
  res.send("Proyecto asignado");
}); // para ver detalles del proyecto

//Egresados
router.get("/egresados", (req, res) => {
  res.send("Lista de egresados");
}); // para mostrar el mentor del egresado

module.exports = router;
