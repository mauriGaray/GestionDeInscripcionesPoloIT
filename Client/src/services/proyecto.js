import api from "./api";

export const crearProyecto = async (proyectoData) => {
  try {
    const response = await api.post("/proyecto", proyectoData);
    return response.data;
  } catch (error) {
    console.error("Error creando proyecto", error);
    throw error;
  }
};

export const obtenerProyectos = async () => {
  try {
    const response = await api.get("/proyecto");

    return response.data;
  } catch (error) {
    console.error("Error obteniendo proyectos", error);
    throw error;
  }
};

export const obtenerProyectoPorId = async (idProyecto) => {
  try {
    const response = await api.get(`/proyecto/${idProyecto}`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo proyecto por ID", error);
    throw error;
  }
};

export const actualizarProyecto = async (idProyecto, proyectoData) => {
  try {
    const response = await api.put(`/proyecto/${idProyecto}`, proyectoData);
    return response.data;
  } catch (error) {
    console.error("Error actualizando proyecto", error);
    throw error;
  }
};

export const eliminarProyecto = async (idProyecto) => {
  try {
    await api.delete(`/proyecto/${idProyecto}`);
  } catch (error) {
    console.error("Error eliminando proyecto", error);
    throw error;
  }
};
