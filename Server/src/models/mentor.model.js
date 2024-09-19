const pool = require("../config/db");

const createMentor = async (mentor) => {
  const { nombre, apellido, email, clave, tecnologia, empresa_asociada } =
    mentor;
  await pool.execute(
    "INSERT INTO mentor (documento, nombre, apellido, email, clave, tecnologia, empresa_asociada) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      mentor.documento,
      nombre,
      apellido,
      email,
      clave,
      tecnologia,
      empresa_asociada,
    ]
  );
};

// Obtener todos los mentores
const getAllMentores = async () => {
  const [rows] = await pool.query("SELECT * FROM mentor");
  return rows;
};

// Obtener un mentor por documento
const getMentorByDocumento = async (documento) => {
  const [rows] = await pool.query("SELECT * FROM mentor WHERE documento = ?", [
    documento,
  ]);
  return rows[0];
};

// Actualizar un mentor por documento
const updateMentor = async (documento, mentor) => {
  const { nombre, apellido, email, clave, tecnologia, empresa_asociada } =
    mentor;
  const [result] = await pool.query(
    "UPDATE mentor SET nombre = ?, apellido = ?, email = ?, clave = ?, tecnologia = ?, empresa_asociada = ? WHERE documento = ?",
    [nombre, apellido, email, clave, tecnologia, empresa_asociada, documento]
  );
  return result;
};

// Eliminar un mentor por documento
const deleteMentor = async (documento) => {
  const [result] = await pool.query("DELETE FROM mentor WHERE documento = ?", [
    documento,
  ]);
  return result;
};

module.exports = {
  createMentor,
  getAllMentores,
  getMentorByDocumento,
  updateMentor,
  deleteMentor,
};
