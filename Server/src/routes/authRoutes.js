const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");


router.post("/register", authController.verifyToken, authController.register);


router.post("/login", authController.login);

router.get(
  "/protected",
  authMiddleware.verifyToken,
  authMiddleware.verifyRole(["egresado"]),
  (req, res) => {
    res.send(
      `Bienvenido, egresado con documento: ${req.user.documento}. Esta es una ruta protegida.`
    );
  }
);

module.exports = router;
