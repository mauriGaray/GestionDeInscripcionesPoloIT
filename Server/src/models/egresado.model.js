const pool = require("../config/db");

// Crear un nuevo egresado
const createEgresado = async (egresado) => {
  const {
    nombre,
    apellido,
    documento,
    email,
    contraseña,
    genero,
    nacionalidad,
    ciudad,
    provincia,
    curso_id,
  } = egresado;
  const [results] = await pool.execute(
    "INSERT INTO egresado (nombre, apellido, documento, email, contraseña, genero, nacionalidad, ciudad, provincia, curso_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      nombre,
      apellido,

      documento,
      email,
      contraseña,
      genero,
      nacionalidad,
      ciudad,
      provincia,
      curso_id,
    ]
  );
  return results;
};

// Obtener todos los egresados
const getAllEgresados = async () => {
  const [results] = await pool.query("SELECT * FROM egresado");
  return results;
};

// Obtener un egresado por documento
const getEgresadoByDocumento = async (documento) => {
  const [results] = await pool.query(
    "SELECT * FROM egresado WHERE documento = ?",
    [documento]
  );
  return results[0];
};

// Actualizar un egresado por documento
const updateEgresado = async (documento, egresado) => {
  const [results] = await pool.query(
    "UPDATE egresado SET ? WHERE documento = ?",
    [egresado, documento]
  );
  return results;
};

// Eliminar un egresado por documento
const deleteEgresado = async (documento) => {
  const [results] = await pool.query(
    "DELETE FROM egresado WHERE documento = ?",
    [documento]
  );
  return results;
};

module.exports = {
  createEgresado,
  getAllEgresados,
  getEgresadoByDocumento,
  updateEgresado,
  deleteEgresado,
};
