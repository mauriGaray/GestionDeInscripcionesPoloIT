const express = require("express");
const router = express.Router();
const mentorController = require("../controllers/mentorController");
const { verifyRole, verifyToken } = require("../middlewares/authMiddleware");

// Crear un nuevo mentor
router.post(
  "/",
  verifyToken,
  verifyRole(["admin"]),
  mentorController.createMentor
);

// Obtener todos los mentores
router.get(
  "/",
  verifyToken,
  verifyRole(["admin"]),
  mentorController.getAllMentores
);

// Obtener un mentor por ID
router.get(
  "/:id_mentor",
  verifyToken,
  verifyRole(["egresado"]),
  mentorController.getMentorById
);

// Actualizar un mentor por ID
router.put(
  "/:id_mentor",
  verifyToken,
  verifyRole(["egresado"]),
  mentorController.updateMentor
);

// Eliminar un mentor por ID
router.delete(
  "/:id_mentor",
  verifyToken,
  verifyRole(["admin"]),
  mentorController.deleteMentor
);

module.exports = router;
