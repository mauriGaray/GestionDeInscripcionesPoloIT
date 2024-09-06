const express = require("express");
const router = express.Router();

//Routes

//Panel
router.get("/panel", (req, res) => {
  res.send("Panel de administrador");
});
//Perfil
router.get("/perfil", (req, res) => {
  res.send("Perfil del administrador");
});
router.put("/perfil", (req, res) => {
  res.send("Actualizando perfil");
});

//Gestor de egresados
router.get("/egresados", (req, res) => {
  res.send("Lista de egresados");
});
router.post("/egresados", (req, res) => {
  res.send("Creando egresado");
});
router.put("/egresados/:id", (req, res) => {
  res.send("Actualizando egresado");
});
router.delete("/egresados/:id", (req, res) => {
  res.send("Eliminando egresado");
});

//Gestor de mentores
router.get("/mentores", (req, res) => {
  res.send("Lista de mentores");
});
router.post("/mentores", (req, res) => {
  res.send("Creando mentor");
});
router.put("/mentores/:id", (req, res) => {
  res.send("Actualizando mentor");
});
router.delete("/mentores/:id", (req, res) => {
  res.send("Eliminando mentor");
});

//Gestor de proyectos
router.get("/proyectos", (req, res) => {
  res.send("Lista de proyectos");
});
router.post("/proyectos", (req, res) => {
  res.send("Creando proyecto");
});
router.put("/proyectos/:id", (req, res) => {
  res.send("Actualizando proyecto");
});
router.delete("/proyectos/:id", (req, res) => {
  res.send("Eliminando proyecto");
});

//Gestor de tecnologias
router.get("/tecnologias", (req, res) => {
  res.send("Lista de tecnologias");
});
router.post("/tecnologias", (req, res) => {
  res.send("Creando tecnologia");
});
router.put("/tecnologias/:id", (req, res) => {
  res.send("Actualizando tecnologia");
});
router.delete("/tecnologias/:id", (req, res) => {
  res.send("Eliminando tecnologia");
});

module.exports = router;
