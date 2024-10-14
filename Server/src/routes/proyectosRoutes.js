const express = require("express");
const router = express.Router();
const proyectoController = require("../controllers/proyectoController");
const { verifyRole, verifyToken } = require("../middlewares/authMiddleware");
// Crear un nuevo proyecto
router.post(
  "/",
  verifyToken,
  verifyRole(["admin"]),
  proyectoController.createProyecto
);

// Obtener todos los proyectos
router.get(
  "/",

  proyectoController.getAllProyectos
);

// Obtener un proyecto por ID
router.get(
  "/:id_proyecto",
  verifyToken,
  verifyRole(["egresado"]),
  proyectoController.getProyectoById
);

// Actualizar un proyecto por ID
router.put(
  "/:id_proyecto",
  verifyToken,
  verifyRole(["admin"]),
  proyectoController.updateProyecto
);

// Eliminar un proyecto por ID
router.delete(
  "/:id_proyecto",
  verifyToken,
  verifyRole(["admin"]),
  proyectoController.deleteProyecto
);

module.exports = router;
