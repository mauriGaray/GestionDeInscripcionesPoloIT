const pool = require("../config/db");

async function obtenerEgresadosSinProyecto() {
  const query = `
    SELECT e.*
    FROM egresado e
    LEFT JOIN asignacion a ON e.documento = a.egresado_id
    WHERE a.proyecto_id IS NULL;
  `;
  const [rows] = await pool.execute(query);
  return rows;
}

async function obtenerProyectosConLugar() {
  const query = `
    SELECT p.*, c.nombre AS curso_nombre,
           (SELECT COUNT(*) FROM asignacion WHERE asignacion.proyecto_id = p.id_proyecto) AS cantidad_integrantes
    FROM proyecto p
    LEFT JOIN curso c ON p.curso_id = c.id_curso
    HAVING cantidad_integrantes < p.tamaño_maximo_equipo;
  `;
  const [rows] = await pool.execute(query);
  return rows;
}

async function asignarEgresadoAProyecto(egresadoId, proyectoId) {
  const query = `
    INSERT INTO asignacion (egresado_id, proyecto_id) 
    VALUES (?, ?);
  `;
  await pool.execute(query, [egresadoId, proyectoId]);
}

async function obtenerMentoresSinProyecto() {
  const query = `
    SELECT m.*, c.nombre AS curso_nombre
    FROM mentor m
    LEFT JOIN proyecto p ON m.documento = p.mentor_id
    LEFT JOIN curso c ON m.tecnologia_principal = c.tecnologias
    WHERE p.mentor_id IS NULL;
  `;
  const [rows] = await pool.execute(query);
  return rows;
}

module.exports = {
  obtenerEgresadosSinProyecto,
  obtenerProyectosConLugar,
  asignarEgresadoAProyecto,
  obtenerMentoresSinProyecto,
};
