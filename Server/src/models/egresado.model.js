const pool = require("../config/db");

// Crear un nuevo egresado
const createEgresado = async (egresado) => {
  const query = "INSERT INTO egresado SET ?";
  const [results] = await pool.query(query, egresado);
  return results;
};

// Obtener todos los egresados
const getAllEgresados = async () => {
  const query = "SELECT * FROM egresado";
  const [results] = await pool.query(query);
  return results;
};

// Obtener un egresado por documento
const getEgresadoByDocumento = async (documento) => {
  const query = "SELECT * FROM egresado WHERE documento = ?";
  const [results] = await pool.query(query, [documento]);
  return results[0];
};

// Actualizar un egresado por documento
const updateEgresado = async (documento, egresado) => {
  const query = "UPDATE egresado SET ? WHERE documento = ?";
  const [results] = await pool.query(query, [egresado, documento]);
  return results;
};

// Eliminar un egresado por documento
const deleteEgresado = async (documento) => {
  const query = "DELETE FROM egresado WHERE documento = ?";
  const [results] = await pool.query(query, [documento]);
  return results;
};

module.exports = {
  createEgresado,
  getAllEgresados,
  getEgresadoByDocumento,
  updateEgresado,
  deleteEgresado,
};
