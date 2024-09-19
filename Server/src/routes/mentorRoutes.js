const express = require("express");
const router = express.Router();
const mentorController = require("../controllers/mentorController");
const { verifyRole } = require("../middlewares/authMiddleware");

// Crear un nuevo mentor
router.post("/", verifyRole(["admin"]), mentorController.createMentor);

// Obtener todos los mentores
router.get("/", verifyRole(["admin"]), mentorController.getAllMentores);

// Obtener un mentor por ID
router.get("/:id_mentor", mentorController.getMentorById);

// Actualizar un mentor por ID
router.put("/:id_mentor", mentorController.updateMentor);

// Eliminar un mentor por ID
router.delete(
  "/:id_mentor",
  verifyRole(["admin"]),
  mentorController.deleteMentor
);

module.exports = router;
