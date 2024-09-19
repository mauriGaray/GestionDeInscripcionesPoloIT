const express = require("express");
const router = express.Router();
const proyectoController = require("../controllers/proyectoController");
const { verifyRole } = require("../middlewares/authMiddleware");
// Crear un nuevo proyecto
router.post("/", verifyRole(["admin"]), proyectoController.createProyecto);

// Obtener todos los proyectos
router.get("/", verifyRole(["admin"]), proyectoController.getAllProyectos);

// Obtener un proyecto por ID
router.get("/:id_proyecto", proyectoController.getProyectoById);

// Actualizar un proyecto por ID
router.put(
  "/:id_proyecto",
  verifyRole(["admin"]),
  proyectoController.updateProyecto
);

// Eliminar un proyecto por ID
router.delete(
  "/:id_proyecto",
  verifyRole(["admin"]),
  proyectoController.deleteProyecto
);

module.exports = router;
