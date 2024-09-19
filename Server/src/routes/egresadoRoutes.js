const express = require("express");
const router = express.Router();
const egresadoController = require("../controllers/egresadosController");
const { verifyRole } = require("../middlewares/authMiddleware");

// Obtener todos los egresados
router.get("/", egresadoController.getAllEgresados);

// Obtener un egresado por documento
router.get("/:documento", egresadoController.getEgresadoByDocumento);

// Actualizar un egresado por documento
router.put("/:documento", egresadoController.updateEgresado);

// Eliminar un egresado por documento
router.delete(
  "/:documento",
  verifyRole(["admin"]),
  egresadoController.deleteEgresado
);

module.exports = router;
