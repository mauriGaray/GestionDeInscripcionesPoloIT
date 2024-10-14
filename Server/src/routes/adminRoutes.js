const express = require("express");
const router = express.Router();
const { verifyRole, verifyToken } = require("../middlewares/authMiddleware");
//Routes

router.put("/perfil", verifyToken, verifyRole(["admin"]), (req, res) => {
  res.send("Actualizando perfil");
});

module.exports = router;
