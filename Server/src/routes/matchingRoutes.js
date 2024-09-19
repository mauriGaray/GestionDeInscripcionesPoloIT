const express = require("express");
const router = express.Router();
const matchController = require("../controllers/matchingController");

router.post("/egresadosyproyectos", async (req, res) => {
  try {
    const result = await matchController.asignarEgresadosAProyectos();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(result);
  }
});

module.exports = router;
