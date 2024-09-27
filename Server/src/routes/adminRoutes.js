const express = require("express");
const router = express.Router();
const { verifyRole, verifyToken } = require("../middlewares/authMiddleware");
//Routes

//Panel
router.get("/panel", verifyToken, verifyRole(["admin"]), (req, res) => {
  res.send("Panel de administrador");
});
//Perfil
router.get("/perfil", verifyToken, verifyRole(["admin"]), (req, res) => {
  res.send("Perfil del administrador");
});
router.put("/perfil", verifyToken, verifyRole(["admin"]), (req, res) => {
  res.send("Actualizando perfil");
});

module.exports = router;
