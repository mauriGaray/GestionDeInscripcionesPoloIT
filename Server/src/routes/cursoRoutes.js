const express = require("express");
const router = express.Router();
const cursoController = require("../controllers/cursoController");
const { verifyRole, verifyToken } = require("../middlewares/authMiddleware");
// Crear un nuevo curso
router.post(
  "/",
  verifyToken,
  verifyRole(["admin"]),
  cursoController.createCurso
);

// Obtener todos los cursos
router.get(
  "/",
  verifyToken,
  verifyRole(["admin"]),
  cursoController.getAllCursos
);

// Obtener un curso por ID
router.get(
  "/:id_curso",
  verifyToken,
  verifyRole(["admin"]),
  cursoController.getCursoById
);

// Actualizar un curso por ID
router.put(
  "/:id_curso",
  verifyToken,
  verifyRole(["admin"]),
  cursoController.updateCurso
);

// Eliminar un curso por ID
router.delete(
  "/:id_curso",
  verifyToken,
  verifyRole(["admin"]),
  cursoController.deleteCurso
);

module.exports = router;
