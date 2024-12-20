const express = require("express");
const router = express.Router();
const egresadoController = require("../controllers/egresadosController");
const { verifyRole, verifyToken } = require("../middlewares/authMiddleware");

// Crear un nuevo egresado
router.post("/", egresadoController.createEgresado);

// Obtener todos los egresados
router.get(
  "/",

  egresadoController.getAllEgresados
);


router.get(
  "/:documento",

  egresadoController.getEgresadoByDocumento
);

router.put(
  "/:documento",

  egresadoController.updateEgresado
);

router.delete(
  "/:documento",

  egresadoController.deleteEgresado
);

module.exports = router;
