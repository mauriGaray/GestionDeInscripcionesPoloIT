import React, { useState, useEffect } from "react";

import { Pie, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import {
  obtenerProyectos,
  actualizarProyecto,
  eliminarProyecto,
  crearProyecto,
} from "../../../services/proyecto";
import {
  obtenerEgresados,
  actualizarEgresado,
  eliminarEgresado,
  crearEgresado,
} from "../../../services/egresado";
import {
  obtenerCursos,
  actualizarCurso,
  eliminarCurso,
  crearCurso,
} from "../../../services/curso";
import {
  obtenerMentores,
  actualizarMentor,
  eliminarMentor,
  crearMentor,
} from "../../../services/mentor";
import { asignarEgresadosAProyectos } from "../../../services/matching";
const AdminView = () => {
  const [graduates, setGraduates] = useState([]);
  const [projects, setProjects] = useState([]);
  const [courses, setCourses] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [assignedData, setAssignedData] = useState({
    asignaciones: [],
    no_asignados: [],
  });
  const [activeView, setActiveView] = useState("proyectos");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const graduate = await obtenerEgresados();
      setGraduates(graduate);

      const project = await obtenerProyectos();
      setProjects(project);

      const course = await obtenerCursos();
      setCourses(course);

      const mentor = await obtenerMentores();

      setMentors(mentor);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteMentor = async (documentId) => {
    try {
      await eliminarMentor(documentId);

      fetchData();
    } catch (error) {
      console.error("Error borrando mentor", error);
    }
  };
  // Asignación aleatoria de egresados a proyectos
  const assignRandomly = async () => {
    try {
      const newAssignments = await asignarEgresadosAProyectos();

      setAssignedData(newAssignments);
    } catch (error) {
      console.error("Error asignando egresados a proyectos", error);
    }
  };

  // Datos para gráficos
  const projectsPerCourseData = {
    labels: courses.map((course) => course.nombre),
    datasets: [
      {
        label: "Proyectos por curso",
        data: courses.map((course) => course.projectCount),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const graduatesPerCourseData = {
    labels: courses.map((course) => course.nombre),
    datasets: [
      {
        label: "Egresados por curso",
        data: courses.map((course) => course.graduateCount),
        backgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#4BC0C0",
          "#9966FF",

          "#9370DB",
        ],
      },
    ],
  };

  // Renderizar las vistas
  const renderView = () => {
    switch (activeView) {
      case "cursos":
        return renderCourses();
      case "mentores":
        return renderMentors();
      case "egresados":
        return renderGraduates();
      default:
        return renderProjects();
    }
  };

  // Sección de Proyectos
  const renderProjects = () => (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-4">
        Proyectos
        <button
          className="bg-green-500 text-white px-2 py-2 rounded mx-4"
          onClick={() => alert("Agregar nuevo elemento")}>
          Agregar
        </button>
      </h2>
      <div className="overflow-x-auto">
        <div className="max-h-96 overflow-y-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Nombre
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Descripción
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Curso
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Mentor
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Fecha de inicio
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Fecha de finalización
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2 border border-gray-400">
                    {project.nombre}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {project.descripcion}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {project.curso_id}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {project.mentor_id || "No tiene mentor asignado"}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {project.fecha_inicio}
                  </td>
                  <td className="px-2 py-2 border border-gray-400">
                    {project.fecha_finalizacion}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                      Modificar
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Sección de Cursos
  const renderCourses = () => (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-4">
        Cursos
        <button
          className="bg-green-500 text-white px-2 py-2 rounded mx-4"
          onClick={() => alert("Agregar nuevo elemento")}>
          Agregar
        </button>
      </h2>
      <div className="overflow-x-auto">
        <div className="max-h-96 overflow-y-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Nombre
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  ONG
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Tecnologías
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Descripción
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2 border border-gray-400">
                    {course.nombre}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {course.ONG || "No tiene ONG asignada"}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {course.tecnologias || "No tiene tecnologías asignadas"}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {course.descripcion || "No tiene descripción asignada"}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                      Modificar
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Sección de Egresados
  const renderGraduates = () => (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-4">
        Egresados
        <button
          className="bg-green-500 text-white px-2 py-2 rounded mx-4"
          onClick={() => alert("Agregar nuevo elemento")}>
          Agregar
        </button>
      </h2>
      <div className="overflow-x-auto">
        <div className="max-h-96 overflow-y-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Nombre
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Apellido
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Curso del que viene
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Email
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {graduates.map((graduate, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2 border border-gray-400">
                    {graduate.nombre}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {graduate.apellido}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {graduate.curso_id}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {graduate.email}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                      Modificar
                    </button>
                    <button
                      onClick={() => handleDeleteGraduate(graduate.documento)}
                      className="bg-red-500 text-white px-2 py-1 rounded">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Sección de Mentores
  const renderMentors = () => (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-4">
        Mentores
        <button
          className="bg-green-500 text-white px-2 py-2 rounded mx-4"
          onClick={() => alert("Agregar nuevo elemento")}>
          Agregar
        </button>
      </h2>
      <div className="overflow-x-auto">
        <div className="max-h-96 overflow-y-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Nombre
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Apellido
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Empresa
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Proyecto
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Tecnologías
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Email
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {mentors.map((mentor, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2 border border-gray-400">
                    {mentor.nombre}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {mentor.apellido}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {mentor.empresa_asociada}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {mentor.proyecto_id || "No tiene proyecto asignado"}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {`${mentor.tecnologia_principal} - ${mentor.tecnologias_secundarias}`}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {mentor.email}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                      Modificar
                    </button>
                    <button
                      onClick={() => handleDeleteMentor(mentor.documento)}
                      className="bg-red-500 text-white px-2 py-1 rounded">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-screen-xl mx-auto p-8 bg-customBlue">
      <h1 className="text-3xl font-bold mb-6">
        Bienvenido Nombre de administrador!
      </h1>
      <div className="bg-gray-100 shadow rounded-lg p-6 mb-8 ">
        <div className="flex space-x-4 mb-4  ">
          <button
            className="bg-gray-200 p-2 rounded hover:bg-slate-500"
            onClick={() => setActiveView("proyectos")}>
            Ver Proyectos
          </button>
          <button
            className="bg-gray-200 p-2 rounded hover:bg-slate-500"
            onClick={() => setActiveView("cursos")}>
            Ver Cursos
          </button>
          <button
            className="bg-gray-200 p-2 rounded hover:bg-slate-500"
            onClick={() => setActiveView("mentores")}>
            Ver Mentores
          </button>
          <button
            className="bg-gray-200 p-2 rounded hover:bg-slate-500"
            onClick={() => setActiveView("egresados")}>
            Ver Egresados
          </button>
        </div>

        {renderView()}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-5">
          {/* Proyectos por curso */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-4">
              Proyectos por Curso
            </h2>
            <div className="mt-24">
              <Bar data={projectsPerCourseData} />
            </div>
          </div>

          {/* Egresados por curso */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-4">
              Egresados por Curso
            </h2>
            <Pie data={graduatesPerCourseData} />
          </div>
        </div>

        {/* Asignar Egresados aleatoriamente */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-4">
            Asignar Egresados a Proyectos
          </h2>
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            onClick={assignRandomly}>
            Asignar Egresados Aleatoriamente
          </button>

          <div className="mt-4">
            {/* Mostrar asignaciones si hay */}
            {assignedData.asignaciones.length > 0 && (
              <div>
                <h3 className="font-semibold">Asignaciones:</h3>
                <ul>
                  {assignedData.asignaciones.map((assign, index) => (
                    <li key={index}>
                      {assign.egresado} fue asignado a {assign.curso}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Mostrar no asignados si hay */}
            {assignedData.no_asignados.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold">No Asignados:</h3>
                <ul>
                  {assignedData.no_asignados.map((noAssign, index) => (
                    <li key={index}>
                      {noAssign.egresado} del {noAssign.curso} aún no fue
                      asignado
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
