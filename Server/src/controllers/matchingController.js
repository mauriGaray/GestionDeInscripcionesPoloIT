const asignacionesModel = require("../models/matching.model");

async function asignarEgresadosAProyectos(req, res) {
  try {
    // Obtener todos los egresados que no están asignados a un proyecto
    const egresadosSinProyecto =
      await asignacionesModel.obtenerEgresadosSinProyecto();

    // Obtener todos los proyectos con espacio disponible
    const proyectosConLugar =
      await asignacionesModel.obtenerProyectosConLugar();

    let asignaciones = [];
    let noAsignados = [];

    // Recorremos los egresados que no tienen proyecto
    await Promise.all(
      egresadosSinProyecto.map(async (egresado) => {
        // Filtrar proyectos del mismo curso con espacio disponible
        const proyectosDelCurso = proyectosConLugar.filter(
          (proyecto) =>
            proyecto.curso_nombre === egresado.curso_nombre &&
            proyecto.cantidad_integrantes < proyecto.tamaño_maximo_equipo
        );

        if (proyectosDelCurso.length > 0) {
          // Asignar al primer proyecto del mismo curso con espacio
          const proyecto = proyectosDelCurso[0];
          await asignacionesModel.asignarEgresadoAProyecto(
            egresado.documento,
            proyecto.id_proyecto
          );

          asignaciones.push({
            egresado: `${egresado.nombre} ${egresado.apellido}`,
            proyecto: proyecto.nombre,
            curso: egresado.curso_nombre,
          });
        } else {
          // Si no se pudo asignar, agregar a la lista de no asignados
          noAsignados.push({
            egresado: `${egresado.nombre} ${egresado.apellido}`,
            curso: egresado.curso_nombre,
          });
        }
      })
    );

    // Generar el informe en JSON
    return { asignaciones, no_asignados: noAsignados };
  } catch (err) {
    return { error: err.message };
  }
}

module.exports = { asignarEgresadosAProyectos };
