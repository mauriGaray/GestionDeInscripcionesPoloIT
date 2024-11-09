const proyectoModel = require("../models/proyecto.model");

const createProyecto = async (req, res) => {
  const proyecto = req.body;
  try {
    await proyectoModel.createProyecto(proyecto);
    res.status(201).json({ message: "Proyecto creado exitosamente" });
  } catch (error) {
    console.error("Error al crear el proyecto:", error.message);
    res.status(500).json({ error: "Error al crear el proyecto" });
  }
};

const getAllProyectos = async (req, res) => {
  try {
    const proyectos = await proyectoModel.getAllProyectos();

    res.status(200).json(proyectos);
  } catch (error) {
    console.error("Error al obtener los proyectos:", error.message);
    res.status(500).json({ error: "Error al obtener los proyectos" });
  }
};

const getProyectoById = async (req, res) => {
  const { id_proyecto } = req.params;
  try {
    const proyecto = await proyectoModel.getProyectoById(id_proyecto);
    if (proyecto) {
      res.status(200).json(proyecto);
    } else {
      res.status(404).json({ error: "Proyecto no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener el proyecto:", error.message);
    res.status(500).json({ error: "Error al obtener el proyecto" });
  }
};

const updateProyecto = async (req, res) => {
  const { id_proyecto } = req.params;
  const proyecto = req.body;
  try {
    const result = await proyectoModel.updateProyecto(id_proyecto, proyecto);
    if (result) {
      res.status(200).json({ message: "Proyecto actualizado exitosamente" });
    } else {
      res.status(404).json({ error: "Proyecto no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el proyecto:", error.message);
    res.status(500).json({ error: "Error al actualizar el proyecto" });
  }
};

const deleteProyecto = async (req, res) => {
  const { id_proyecto } = req.params;
  try {
    const result = await proyectoModel.deleteProyecto(id_proyecto);
    if (result) {
      res.status(200).json({ message: "Proyecto eliminado exitosamente" });
    } else {
      res.status(404).json({ error: "Proyecto no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el proyecto:", error.message);
    res.status(500).json({ error: "Error al eliminar el proyecto" });
  }
};

module.exports = {
  createProyecto,
  getAllProyectos,
  getProyectoById,
  updateProyecto,
  deleteProyecto,
};
