const pool = require("../config/db");

const createProyecto = async (proyecto) => {
  const {
    nombre,
    descripcion,
    fecha_inicio,
    fecha_finalizacion,
    mentor_documento,
    id_curso,
    tamaño_maximo_equipo,
  } = proyecto;

  const [mentor] = await pool.execute(
    "SELECT id FROM mentor WHERE documento = ?",
    [mentor_documento]
  );

  if (mentor.length === 0) {
    throw new Error("Mentor no encontrado");
  }

  const mentor_id = mentor[0].id;

  const [curso] = await pool.execute("SELECT id FROM Curso WHERE codigo = ?", [
    id_curso,
  ]);

  if (curso.length === 0) {
    throw new Error("Curso no encontrado");
  }

  const curso_id = curso[0].id;

  await pool.execute(
    `INSERT INTO proyecto 
    (nombre, descripcion, fecha_inicio, fecha_finalizacion, tamaño_maximo_equipo, mentor_id, curso_id)
    VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      nombre,
      descripcion,
      fecha_inicio,
      fecha_finalizacion,
      tamaño_maximo_equipo,
      mentor_documento,
      curso_id,
    ]
  );
};

const getAllProyectos = async () => {
  const [rows] = await pool.query(
    `SELECT proyecto.id_proyecto, proyecto.nombre, proyecto.descripcion, proyecto.tamaño_maximo_equipo, 
            proyecto.mentor_id, proyecto.fecha_inicio, proyecto.fecha_finalizacion, 
            curso.nombre_curso, proyecto.image
     FROM proyecto
     JOIN curso ON proyecto.curso_id = curso.id_curso`
  );

  if (rows.length === 0) {
    console.log("No se encontraron proyectos o cursos asociados.");
  }

  return rows;
};

const getProyectoById = async (id_proyecto) => {
  const [rows] = await pool.query(
    `SELECT proyecto.*, mentor.nombre AS nombre_mentor, curso.nombre AS nombre_curso 
     FROM proyecto 
     JOIN mentor ON proyecto.mentor_id = mentor.id
     JOIN curso ON proyecto.curso_id = curso.id
     WHERE proyecto.id_proyecto = ?`,
    [id_proyecto]
  );
  return rows[0];
};

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
