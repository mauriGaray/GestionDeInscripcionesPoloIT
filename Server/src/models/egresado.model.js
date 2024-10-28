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

  const cursoIdNumber = Number(curso_id);

  if (isNaN(cursoIdNumber)) {
    throw new Error("curso_id debe ser un número válido.");
  }
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
      cursoIdNumber,
    ]
  );
  return results;
};

// Obtener todos los egresados
const getAllEgresados = async () => {
  const [results] = await pool.query(
    "SELECT egresado.*, curso.nombre_curso FROM egresado JOIN curso ON egresado.curso_id = curso.id_curso"
  );
  return results;
};

// Obtener un egresado por documento
const getEgresadoByDocumento = async (documento) => {
  const [results] = await pool.query(
    "SELECT egresado.*, curso.nombre FROM egresado JOIN curso ON egresado.curso_id = curso.id_curso WHERE egresado.documento = ?",
    [documento]
  );
  return results[0];
};

// Actualizar un egresado por documento
const updateEgresado = async (documento, egresado) => {
  const { curso } = egresado;

  let cursoId;

  if (curso) {
    // Buscar el id del curso basado en el nombre
    const [cursoResults] = await pool.query(
      "SELECT id_curso FROM curso WHERE nombre = ?",
      [curso]
    );

    if (cursoResults.length === 0) {
      throw new Error("El curso especificado no existe.");
    }

    cursoId = cursoResults[0].id_curso;

    egresado.curso_id = cursoId;
    delete egresado.curso;
  }

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

async function findEgresadoByEmail(email) {
  const [rows] = await pool.query("SELECT * FROM Egresado WHERE email = ?", [
    email,
  ]);
  return rows[0];
}
module.exports = {
  createEgresado,
  getAllEgresados,
  getEgresadoByDocumento,
  updateEgresado,
  deleteEgresado,
  findEgresadoByEmail,
};
