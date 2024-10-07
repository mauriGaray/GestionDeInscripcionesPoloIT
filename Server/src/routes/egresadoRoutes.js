const express = require("express");
const router = express.Router();
const egresadoController = require("../controllers/egresadosController");
const { verifyRole, verifyToken } = require("../middlewares/authMiddleware");

// Obtener todos los egresados
router.get(
  "/",
  verifyToken,
  verifyRole(["egresado"]),
  egresadoController.getAllEgresados
);

// Obtener un egresado por documento
router.get(
  "/:documento",
  verifyToken,
  verifyRole(["egresado"]),

  egresadoController.getEgresadoByDocumento
);

// Actualizar un egresado por documento
router.put(
  "/:documento",
  verifyToken,
  verifyRole(["egresado"]),

  egresadoController.updateEgresado
);

// Eliminar un egresado por documento
router.delete(
  "/:documento",
  verifyToken,
  verifyRole(["admin"]),
  egresadoController.deleteEgresado
);

module.exports = router;
