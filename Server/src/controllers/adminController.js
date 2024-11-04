const adminController = require("../models/admin.model");

const getAdmin = async (req, res) => {
  const { dniAdmin } = req.body;
  try {
    const admin = await adminController.getAdminPerfil(dniAdmin);
    if (!admin) {
      return res
        .status(404)
        .json({ error: "Perfil de administrador no encontrado" });
    }
    res.json(admin);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el perfil" });
  }
};

const updateAdmin = async (req, res) => {
  try {
    const admin = req.body;
    const updatedAdmin = await adminController.updateAdmin(admin);
    res.json(updatedAdmin);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el perfil" });
  }
};

module.exports = {
  getAdmin,
  updateAdmin,
};
