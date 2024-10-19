import api from "./api";

export const obtenerMentores = async () => {
  try {
    const response = await api.get("/mentor");
    return response.data;
  } catch (error) {
    console.error("Error obteniendo mentores", error);
    throw error;
  }
};

export const crearMentor = async (mentorData) => {
  try {
    const response = await api.post("/mentor", mentorData);
    return response.data;
  } catch (error) {
    console.error("Error creando mentor", error);
    throw error;
  }
};

export const obtenerMentorPorDocumento = async (documento) => {
  try {
    const response = await api.get(`/mentor/${documento}`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo mentor por ID", error);
    throw error;
  }
};

export const actualizarMentor = async (documento, mentorData) => {
  try {
    const response = await api.put(`/mentor/${documento}`, mentorData);
    return response.data;
  } catch (error) {
    console.error("Error actualizando mentor", error);
    throw error;
  }
};

export const eliminarMentor = async (documento) => {
  try {
    await api.delete(`/mentor/${documento}`);
  } catch (error) {
    console.error("Error eliminando mentor", error);
    throw error;
  }
};
