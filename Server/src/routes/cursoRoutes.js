const express = require("express");
const router = express.Router();
const cursoController = require("../controllers/cursoController");
const { verifyRole, verifyToken } = require("../middlewares/authMiddleware");

router.post(
  "/",

  cursoController.createCurso
);

router.get(
  "/",

  cursoController.getAllCursos
);

router.get(
  "/:id_curso",

  cursoController.getCursoById
);

// Actualizar un curso por ID
router.put(
  "/:id_curso",

  cursoController.updateCurso
);

// Eliminar un curso por ID
router.delete(
  "/:id_curso",

  cursoController.deleteCurso
);

module.exports = router;
