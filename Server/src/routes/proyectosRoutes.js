const express = require("express");
const router = express.Router();
const proyectoController = require("../controllers/proyectoController");
const { verifyRole, verifyToken } = require("../middlewares/authMiddleware");

router.post(
  "/",

  proyectoController.createProyecto
);

router.get("/", proyectoController.getAllProyectos);

router.get(
  "/:id_proyecto",

  proyectoController.getProyectoById
);

router.put(
  "/:id_proyecto",

  proyectoController.updateProyecto
);

router.delete(
  "/:id_proyecto",

  proyectoController.deleteProyecto
);

module.exports = router;
