const express = require("express");
const router = express.Router();
const cursoController = require("../controllers/cursoController");

// Crear un nuevo curso
router.post("/", cursoController.createCurso);

// Obtener todos los cursos
router.get("/", cursoController.getAllCursos);

// Obtener un curso por ID
router.get("/:id_curso", cursoController.getCursoById);

// Actualizar un curso por ID
router.put("/:id_curso", cursoController.updateCurso);

// Eliminar un curso por ID
router.delete("/:id_curso", cursoController.deleteCurso);

module.exports = router;
