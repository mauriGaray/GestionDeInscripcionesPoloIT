const pool = require("../config/db");

// Función para crear un nuevo curso
const createCurso = async (curso) => {
  const { nombre, tecnologias, descripcion, ONG } = curso;
  const [result] = await pool.execute(
    "INSERT INTO curso (nombre, tecnologias, descripcion, ONG) VALUES (?, ?, ?, ?)",
    [nombre, tecnologias, descripcion, ONG]
  );
  return result.insertId;
};

// Función para obtener todos los cursos
const getAllCursos = async () => {
  const [rows] = await pool.execute("SELECT * FROM curso");
  return rows;
};

// Función para obtener un curso por ID
const getCursoById = async (id_curso) => {
  const [rows] = await pool.execute("SELECT * FROM curso WHERE id_curso = ?", [
    id_curso,
  ]);
  return rows[0];
};

// Función para actualizar un curso por ID
const updateCurso = async (id_curso, curso) => {
  const { nombre, tecnologias, descripcion, ONG } = curso;
  const [result] = await pool.execute(
    "UPDATE curso SET nombre = ?, tecnologias = ?, descripcion = ?, ONG = ? WHERE id_curso = ?",
    [nombre, tecnologias, descripcion, ONG, id_curso]
  );
  return result.affectedRows > 0;
};

// Función para eliminar un curso por ID
const deleteCurso = async (id_curso) => {
  const [result] = await pool.execute("DELETE FROM curso WHERE id_curso = ?", [
    id_curso,
  ]);
  return result.affectedRows > 0;
};

module.exports = {
  createCurso,
  getAllCursos,
  getCursoById,
  updateCurso,
  deleteCurso,
};
