const express = require("express");
const router = express.Router();
const proyectoController = require("../controllers/proyectoController");

// Crear un nuevo proyecto
router.post("/", proyectoController.createProyecto);

// Obtener todos los proyectos
router.get("/", proyectoController.getAllProyectos);

// Obtener un proyecto por ID
router.get("/:id_proyecto", proyectoController.getProyectoById);

// Actualizar un proyecto por ID
router.put("/:id_proyecto", proyectoController.updateProyecto);

// Eliminar un proyecto por ID
router.delete("/:id_proyecto", proyectoController.deleteProyecto);

module.exports = router;
