const pool = require("../config/db");

// Crear un nuevo proyecto
const createProyecto = async (proyecto) => {
  const {
    nombre,
    descripcion,
    fecha_inicio,
    fecha_finalizacion,
    mentor_documento,
  } = proyecto;
  await pool.execute(
    "INSERT INTO proyecto (nombre, descripcion, fecha_inicio, fecha_finalizacion, mentor_documento) VALUES (?, ?, ?, ?, ?)",
    [nombre, descripcion, fecha_inicio, fecha_finalizacion, mentor_documento]
  );
};

// Obtener todos los proyectos
const getAllProyectos = async () => {
  const [rows] = await pool.query("SELECT * FROM proyecto");
  return rows;
};

// Obtener un proyecto por ID
const getProyectoById = async (id_proyecto) => {
  const [rows] = await pool.query(
    "SELECT * FROM proyecto WHERE id_proyecto = ?",
    [id_proyecto]
  );
  return rows[0];
};

// Actualizar un proyecto por ID
const updateProyecto = async (id_proyecto, proyecto) => {
  const {
    nombre,
    descripcion,
    fecha_inicio,
    fecha_finalizacion,
    mentor_documento,
  } = proyecto;
  const [result] = await pool.query(
    "UPDATE proyecto SET nombre = ?, descripcion = ?, fecha_inicio = ?, fecha_finalizacion = ?, mentor_documento = ? WHERE id_proyecto = ?",
    [
      nombre,
      descripcion,
      fecha_inicio,
      fecha_finalizacion,
      mentor_documento,
      id_proyecto,
    ]
  );
  return result;
};

// Eliminar un proyecto por ID
const deleteProyecto = async (id_proyecto) => {
  const [result] = await pool.query(
    "DELETE FROM proyecto WHERE id_proyecto = ?",
    [id_proyecto]
  );
  return result;
};

module.exports = {
  createProyecto,
  getAllProyectos,
  getProyectoById,
  updateProyecto,
  deleteProyecto,
};
