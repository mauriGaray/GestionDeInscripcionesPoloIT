const egresadoModel = require("../models/egresado.model");

// Crear un nuevo egresado
exports.createEgresado = async (req, res) => {
  try {
    const egresado = req.body;
    const result = await egresadoModel.createEgresado(egresado);
    res.status(201).json({ message: "Egresado creado", data: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener todos los egresados
exports.getAllEgresados = async (req, res) => {
  try {
    const results = await egresadoModel.getAllEgresados();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener un egresado por documento
exports.getEgresadoByDocumento = async (req, res) => {
  try {
    const documento = req.params.documento;
    const result = await egresadoModel.getEgresadoByDocumento(documento);
    if (!result)
      return res.status(404).json({ message: "Egresado no encontrado" });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar un egresado por documento
exports.updateEgresado = async (req, res) => {
  try {
    const documento = req.params.documento;
    const egresado = req.body;
    const result = await egresadoModel.updateEgresado(documento, egresado);
    res.status(200).json({ message: "Egresado actualizado", data: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar un egresado por documento
exports.deleteEgresado = async (req, res) => {
  try {
    const documento = req.params.documento;
    const result = await egresadoModel.deleteEgresado(documento);
    res.status(200).json({ message: "Egresado eliminado", data: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
