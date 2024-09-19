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

module.exports = router;
