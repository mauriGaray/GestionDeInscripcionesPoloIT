import React, { useState, useEffect } from "react";

import { Pie, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { obtenerProyectos } from "../../../services/proyecto";
const AdminView = () => {
  const [graduates, setGraduates] = useState([]);
  const [projects, setProjects] = useState([]);
  const [courses, setCourses] = useState([]);
  const [assignedData, setAssignedData] = useState([]);
  const [activeView, setActiveView] = useState("proyectos"); // Estado para manejar la vista activa
  let cargarProyectos;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setGraduates([
        { name: "Egresado 1", available: true, course: "Curso 1" },
        { name: "Egresado 2", available: true, course: "Curso 2" },
        { name: "Egresado 3", available: true, course: "Curso 1" },
      ]);

      const response = await obtenerProyectos();
      console.log(response);
      setProjects(response);

      setCourses([
        { name: "Curso 1", projectCount: 1, graduateCount: 2 },
        { name: "Curso 2", projectCount: 1, graduateCount: 1 },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  // Asignación aleatoria de egresados a proyectos
  const assignRandomly = () => {
    const availableGraduates = graduates.filter((grad) => grad.available);
    const availableProjects = projects.filter(
      (proj) => proj.availableSpots > 0
    );
    let newAssignments = [];

    if (availableGraduates.length && availableProjects.length) {
      availableGraduates.forEach((grad) => {
        const randomProject =
          availableProjects[
            Math.floor(Math.random() * availableProjects.length)
          ];
        if (randomProject.availableSpots > 0) {
          newAssignments.push({
            graduate: grad.name,
            project: randomProject.name,
          });
          randomProject.availableSpots -= 1;
        }
      });
      setAssignedData(newAssignments);
    } else {
      alert("No hay egresados o proyectos disponibles.");
    }
  };

  // Datos para gráficos
  const projectsPerCourseData = {
    labels: courses.map((course) => course.name),
    datasets: [
      {
        label: "Proyectos por curso",
        data: courses.map((course) => course.projectCount),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const graduatesPerCourseData = {
    labels: courses.map((course) => course.name),
    datasets: [
      {
        label: "Egresados por curso",
        data: courses.map((course) => course.graduateCount),
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
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
        Cursos{" "}
        <button
          className="bg-green-500 text-white px-2 py-2 rounded mx-4"
          onClick={() => alert("Agregar nuevo elemento")}>
          Agregar
        </button>
      </h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 border border-gray-400">
              Nombre
            </th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-400">
              Egresados
            </th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-400">
              Proyectos
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
                {course.name}
              </td>
              <td className="px-4 py-2 border border-gray-400">
                {course.graduateCount}
              </td>
              <td className="px-4 py-2 border border-gray-400">
                {course.projectCount}
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

      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 border border-gray-400">
              Nombre
            </th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-400">
              Curso
            </th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-400">
              Disponibilidad
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
                {graduate.name}
              </td>
              <td className="px-4 py-2 border border-gray-400">
                {graduate.course}
              </td>
              <td className="px-4 py-2 border border-gray-400">
                {graduate.available ? "Disponible" : "No Disponible"}
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
  );

  // Sección de Mentores
  const renderMentors = () => (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-4">
        Mentores{" "}
        <button
          className="bg-green-500 text-white px-2 py-2 rounded mx-4"
          onClick={() => alert("Agregar nuevo elemento")}>
          Agregar
        </button>
      </h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 border border-gray-400">
              Nombre
            </th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-400">
              Especialidad
            </th>
            <th className="px-4 py-2 bg-gray-200 border border-gray-400">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Puedes mapear tus mentores aquí */}
          <tr>
            <td className="px-4 py-2 border border-gray-400">Mentor 1</td>
            <td className="px-4 py-2 border border-gray-400">Especialidad 1</td>
            <td className="px-4 py-2 border border-gray-400">
              <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                Modificar
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                Eliminar
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-400">Mentor 2</td>
            <td className="px-4 py-2 border border-gray-400">Especialidad 2</td>
            <td className="px-4 py-2 border border-gray-400">
              <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                Modificar
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
            {assignedData.length > 0 && (
              <div>
                <h3 className="font-semibold">Asignaciones:</h3>
                <ul>
                  {assignedData.map((assign, index) => (
                    <li key={index}>
                      {assign.graduate} fue asignado a {assign.project}
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
