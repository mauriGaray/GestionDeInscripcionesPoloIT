const db = require("../config/db");
// Crear un nuevo proyecto
const createProyecto = async (proyecto) => {
  const { titulo, descripcion, fecha_inicio, fecha_fin, mentor_id_mentor } =
    proyecto;
  try {
    const connection = await pool.getConnection();
    await connection.query(
      "INSERT INTO proyecto (titulo, descripcion, fecha_inicio, fecha_fin, mentor_id_mentor) VALUES (?, ?, ?, ?, ?)",
      [titulo, descripcion, fecha_inicio, fecha_fin, mentor_id_mentor]
    );
    connection.release();
  } catch (error) {
    throw new Error("Error al crear el proyecto: " + error.message);
  }
};

// Obtener todos los proyectos
const getAllProyectos = async () => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query("SELECT * FROM proyecto");
    connection.release();
    return rows;
  } catch (error) {
    throw new Error("Error al obtener los proyectos: " + error.message);
  }
};

// Obtener un proyecto por ID
const getProyectoById = async (id_proyecto) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(
      "SELECT * FROM proyecto WHERE id_proyecto = ?",
      [id_proyecto]
    );
    connection.release();
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  } catch (error) {
    throw new Error("Error al obtener el proyecto: " + error.message);
  }
};

// Actualizar un proyecto por ID
const updateProyecto = async (id_proyecto, proyecto) => {
  const { titulo, descripcion, fecha_inicio, fecha_fin, mentor_id_mentor } =
    proyecto;
  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      "UPDATE proyecto SET titulo = ?, descripcion = ?, fecha_inicio = ?, fecha_fin = ?, mentor_id_mentor = ? WHERE id_proyecto = ?",
      [
        titulo,
        descripcion,
        fecha_inicio,
        fecha_fin,
        mentor_id_mentor,
        id_proyecto,
      ]
    );
    connection.release();
    if (result.affectedRows === 0) {
      return null;
    }
    return result;
  } catch (error) {
    throw new Error("Error al actualizar el proyecto: " + error.message);
  }
};

// Eliminar un proyecto por ID
const deleteProyecto = async (id_proyecto) => {
  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      "DELETE FROM proyecto WHERE id_proyecto = ?",
      [id_proyecto]
    );
    connection.release();
    if (result.affectedRows === 0) {
      return null;
    }
    return result;
  } catch (error) {
    throw new Error("Error al eliminar el proyecto: " + error.message);
  }
};

module.exports = {
  createProyecto,
  getAllProyectos,
  getProyectoById,
  updateProyecto,
  deleteProyecto,
};
