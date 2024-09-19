const pool = require("../config/db");

async function obtenerEgresadosSinProyecto() {
  const query = `
    SELECT Egresado.*, Curso.nombre AS curso_nombre
    FROM Egresado
    LEFT JOIN Asignacion ON Egresado.documento = Asignacion.egresado_id
    LEFT JOIN Curso ON Egresado.curso_id = Curso.id_curso
    WHERE Asignacion.egresado_id IS NULL
  `;
  const [rows] = await pool.execute(query);
  return rows;
}

async function obtenerProyectosConLugar() {
  const query = `
    SELECT Proyecto.*, Curso.nombre AS curso_nombre,
           (SELECT COUNT(*) FROM Asignacion WHERE Asignacion.proyecto_id = Proyecto.id_proyecto) AS cantidad_integrantes
    FROM Proyecto
    LEFT JOIN Curso ON Proyecto.curso_id = Curso.id_curso
    HAVING cantidad_integrantes < Proyecto.tamaño_maximo_equipo
  `;
  const [rows] = await pool.execute(query);
  return rows;
}

async function asignarEgresadoAProyecto(egresadoId, proyectoId) {
  const query = `
    INSERT INTO Asignacion (egresado_id, proyecto_id) 
    VALUES (?, ?)
  `;
  await pool.execute(query, [egresadoId, proyectoId]);
}
async function obtenerMentoresSinProyecto() {
  const query = `
        SELECT Mentor.*, Curso.nombre AS curso_nombre
        FROM Mentor
        LEFT JOIN Proyecto ON Mentor.documento = Proyecto.mentor_id
        LEFT JOIN Curso ON Mentor.tecnologia_principal = Curso.tecnologias
        WHERE Proyecto.mentor_id IS NULL
    `;
  const [rows] = await pool.execute(query);
  return rows;
}

module.exports = {
  obtenerEgresadosSinProyecto,
  obtenerProyectosConLugar,
  asignarEgresadoAProyecto,
};
