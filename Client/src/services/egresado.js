import api from "./api";

export const crearEgresado = async (egresadoData) => {
  try {
    const response = await api.post("/egresado", egresadoData);
    return response.data;
  } catch (error) {
    console.error("Error creando egresado", error);
    throw error;
  }
};

export const obtenerEgresados = async () => {
  try {
    const response = await api.get("/egresado");
    return response.data;
  } catch (error) {
    console.error("Error obteniendo egresados", error);
    throw error;
  }
};

export const obtenerEgresadoPorDocumento = async (documento) => {
  try {
    const response = await api.get(`/egresado/${documento}`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo egresado por documento", error);
    throw error;
  }
};

export const actualizarEgresado = async (documento, egresadoData) => {
  try {
    const response = await api.put(`/egresado/${documento}`, egresadoData);
    return response.data;
  } catch (error) {
    console.error("Error actualizando egresado", error);
    throw error;
  }
};

export const eliminarEgresado = async (documento) => {
  try {
    await api.delete(`/egresado/${documento}`);
  } catch (error) {
    console.error("Error eliminando egresado", error);
    throw error;
  }
};
