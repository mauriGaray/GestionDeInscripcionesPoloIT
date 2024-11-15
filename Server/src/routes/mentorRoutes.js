const express = require("express");
const router = express.Router();
const mentorController = require("../controllers/mentorController");
const { verifyRole, verifyToken } = require("../middlewares/authMiddleware");

router.post(
  "/",

  mentorController.createMentor
);

router.get(
  "/",

  mentorController.getAllMentores
);

router.get(
  "/:id_mentor",

  mentorController.getMentorById
);


router.put(
  "/:id_mentor",

  mentorController.updateMentor
);

router.delete(
  "/:id_mentor",

  mentorController.deleteMentor
);

module.exports = router;
