const pool = require("../config/db");

const createMentor = async (mentor) => {
  const { nombre, apellido, email, clave, tecnologia, empresa_asociada } =
    mentor;
  try {
    const connection = await pool.getConnection();
    await connection.query(
      "INSERT INTO mentor (nombre, apellido, email, clave, tecnologia, empresa_asociada) VALUES (?, ?, ?, ?, ?, ?)",
      [nombre, apellido, email, clave, tecnologia, empresa_asociada]
    );
    connection.release();
  } catch (error) {
    throw new Error("Error al crear el mentor: " + error.message);
  }
};

// Obtener todos los mentores
const getAllMentores = async () => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query("SELECT * FROM mentor");
    connection.release();
    return rows;
  } catch (error) {
    throw new Error("Error al obtener los mentores: " + error.message);
  }
};

// Obtener un mentor por ID
const getMentorById = async (id_mentor) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(
      "SELECT * FROM mentor WHERE id_mentor = ?",
      [id_mentor]
    );
    connection.release();
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  } catch (error) {
    throw new Error("Error al obtener el mentor: " + error.message);
  }
};

// Actualizar un mentor por ID
const updateMentor = async (id_mentor, mentor) => {
  const { nombre, apellido, email, clave, tecnologia, empresa_asociada } =
    mentor;
  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      "UPDATE mentor SET nombre = ?, apellido = ?, email = ?, clave = ?, tecnologia = ?, empresa_asociada = ? WHERE id_mentor = ?",
      [nombre, apellido, email, clave, tecnologia, empresa_asociada, id_mentor]
    );
    connection.release();
    if (result.affectedRows === 0) {
      return null;
    }
    return result;
  } catch (error) {
    throw new Error("Error al actualizar el mentor: " + error.message);
  }
};

// Eliminar un mentor por ID
const deleteMentor = async (id_mentor) => {
  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      "DELETE FROM mentor WHERE id_mentor = ?",
      [id_mentor]
    );
    connection.release();
    if (result.affectedRows === 0) {
      return null;
    }
    return result;
  } catch (error) {
    throw new Error("Error al eliminar el mentor: " + error.message);
  }
};

module.exports = {
  createMentor,
  getAllMentores,
  getMentorById,
  updateMentor,
  deleteMentor,
};
