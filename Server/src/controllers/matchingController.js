const asignacionesModel = require("../models/matching.model");

async function asignarEgresadosAProyectos() {
  try {
    const egresadosSinProyecto =
      await asignacionesModel.obtenerEgresadosSinProyecto();

    if (!egresadosSinProyecto || egresadosSinProyecto.length === 0) {
      return { error: "No hay egresados sin proyecto disponibles." };
    }

    const proyectosConLugar =
      await asignacionesModel.obtenerProyectosConLugar();

    if (!proyectosConLugar || proyectosConLugar.length === 0) {
      return { error: "No hay proyectos disponibles con espacio." };
    }

    let asignaciones = [];
    let noAsignados = [];
    let nuevasAsignaciones = []; 


    await Promise.all(
      egresadosSinProyecto.map(async (egresado) => {

        const proyectosDelCurso = proyectosConLugar.filter(
          (proyecto) =>
            proyecto.curso_nombre === egresado.curso_nombre &&
            proyecto.cantidad_integrantes < proyecto.tamaño_maximo_equipo
        );

        // Validar si hay proyectos disponibles para el egresado
        if (proyectosDelCurso && proyectosDelCurso.length > 0) {
          // Seleccionamos un proyecto aleatorio de los que tienen lugar
          const proyectoAleatorio =
            proyectosDelCurso[
              Math.floor(Math.random() * proyectosDelCurso.length)
            ];

          // Asignar al egresado a ese proyecto
          await asignacionesModel.asignarEgresadoAProyecto(
            egresado.documento,
            proyectoAleatorio.id_proyecto
          );

          // Agregar la asignación a las listas correspondientes
          const asignacion = {
            egresado: `${egresado.nombre} ${egresado.apellido}`,
            proyecto: proyectoAleatorio.nombre,
            curso: egresado.curso_nombre,
          };

          asignaciones.push(asignacion);
          nuevasAsignaciones.push(asignacion);
        } else {
          // Si no hay proyectos disponibles, agregar a la lista de no asignados
          noAsignados.push({
            egresado: `${egresado.nombre} ${egresado.apellido}`,
            curso: egresado.curso_nombre,
          });
        }
      })
    );

    // Devolver las nuevas asignaciones y los no asignados
    return {
      nuevas_asignaciones: nuevasAsignaciones,
      no_asignados: noAsignados,
    };
  } catch (err) {
    return { error: err.message };
  }
}

module.exports = { asignarEgresadosAProyectos };
