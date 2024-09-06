const cursoModel = require("../models/cursos.model");
// Crear un nuevo curso
const createCurso = async (req, res) => {
  const curso = req.body;
  try {
    const id = await cursoModel.createCurso(curso);
    res
      .status(201)
      .json({ message: "Curso creado exitosamente", id_curso: id });
  } catch (error) {
    console.error("Error al crear el curso:", error.message);
    res.status(500).json({ error: "Error al crear el curso" });
  }
};

// Obtener todos los cursos
const getAllCursos = async (req, res) => {
  try {
    const cursos = await cursoModel.getAllCursos();
    res.status(200).json(cursos);
  } catch (error) {
    console.error("Error al obtener los cursos:", error.message);
    res.status(500).json({ error: "Error al obtener los cursos" });
  }
};

// Obtener un curso por ID
const getCursoById = async (req, res) => {
  const { id_curso } = req.params;
  try {
    const curso = await cursoModel.getCursoById(id_curso);
    if (curso) {
      res.status(200).json(curso);
    } else {
      res.status(404).json({ error: "Curso no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener el curso:", error.message);
    res.status(500).json({ error: "Error al obtener el curso" });
  }
};

// Actualizar un curso por ID
const updateCurso = async (req, res) => {
  const { id_curso } = req.params;
  const curso = req.body;
  try {
    const result = await cursoModel.updateCurso(id_curso, curso);
    if (result) {
      res.status(200).json({ message: "Curso actualizado exitosamente" });
    } else {
      res.status(404).json({ error: "Curso no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el curso:", error.message);
    res.status(500).json({ error: "Error al actualizar el curso" });
  }
};

// Eliminar un curso por ID
const deleteCurso = async (req, res) => {
  const { id_curso } = req.params;
  try {
    const result = await cursoModel.deleteCurso(id_curso);
    if (result) {
      res.status(200).json({ message: "Curso eliminado exitosamente" });
    } else {
      res.status(404).json({ error: "Curso no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el curso:", error.message);
    res.status(500).json({ error: "Error al eliminar el curso" });
  }
};

module.exports = {
  createCurso,
  getAllCursos,
  getCursoById,
  updateCurso,
  deleteCurso,
};
