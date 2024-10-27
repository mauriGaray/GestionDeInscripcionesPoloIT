import api from "./api";

export const crearCurso = async (cursoData) => {
  try {
    const response = await api.post("/curso", cursoData);
    return response.data;
  } catch (error) {
    console.error("Error creando curso", error);
    throw error;
  }
};

export const obtenerCursos = async () => {
  try {
    const response = await api.get("/curso");
    return response.data;
  } catch (error) {
    console.error("Error obteniendo cursos", error);
    throw error;
  }
};

export const obtenerCursoPorId = async (idCurso) => {
  try {
    const response = await api.get(`/curso/${idCurso}`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo curso por ID", error);
    throw error;
  }
};

export const actualizarCurso = async (idCurso, cursoData) => {
  try {
    const response = await api.put(`/curso/${idCurso}`, cursoData);
    return response.data;
  } catch (error) {
    console.error("Error actualizando curso", error);
    throw error;
  }
};

export const eliminarCurso = async (idCurso) => {
  try {
    await api.delete(`/curso/${idCurso}`);
  } catch (error) {
    console.error("Error eliminando curso", error);
    throw error;
  }
};
