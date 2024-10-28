const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { verifyRole, verifyToken } = require("../middlewares/authMiddleware");
//Routes

router.put("/updatePerfilAdmin", adminController.updateAdmin);
router.get("/perfilAdmin", adminController.getAdmin);

module.exports = router;
