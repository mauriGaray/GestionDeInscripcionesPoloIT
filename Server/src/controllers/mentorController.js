// Crear un nuevo mentor
const mentorModel = require("../models/mentor.model");

// Crear un nuevo mentor
exports.createMentor = async (req, res) => {
  const { nombre, apellido, email, clave, tecnologia, empresa_asociada } =
    req.body;

  try {
    await mentorModel.createMentor({
      nombre,
      apellido,
      email,
      clave,
      tecnologia,
      empresa_asociada,
    });
    res.status(201).json({ message: "Mentor creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el mentor" });
  }
};

// Obtener todos los mentores
exports.getAllMentores = async (req, res) => {
  try {
    const mentores = await mentorModel.getAllMentores();
    res.status(200).json(mentores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los mentores" });
  }
};

// Obtener un mentor por ID
exports.getMentorById = async (req, res) => {
  const { id_mentor } = req.params;

  try {
    const mentor = await mentorModel.getMentorById(id_mentor);
    if (!mentor) {
      return res.status(404).json({ message: "Mentor no encontrado" });
    }
    res.status(200).json(mentor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el mentor" });
  }
};

// Actualizar un mentor por ID
exports.updateMentor = async (req, res) => {
  const { id_mentor } = req.params;
  const { nombre, apellido, email, clave, tecnologia, empresa_asociada } =
    req.body;

  try {
    const result = await mentorModel.updateMentor(id_mentor, {
      nombre,
      apellido,
      email,
      clave,
      tecnologia,
      empresa_asociada,
    });
    if (!result) {
      return res.status(404).json({ message: "Mentor no encontrado" });
    }
    res.status(200).json({ message: "Mentor actualizado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el mentor" });
  }
};

// Eliminar un mentor por ID
exports.deleteMentor = async (req, res) => {
  const { id_mentor } = req.params;

  try {
    const result = await mentorModel.deleteMentor(id_mentor);
    if (!result) {
      return res.status(404).json({ message: "Mentor no encontrado" });
    }
    res.status(200).json({ message: "Mentor eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el mentor" });
  }
};
