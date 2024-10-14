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

export const obtenerMentorPorId = async (idMentor) => {
  try {
    const response = await api.get(`/mentor/${idMentor}`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo mentor por ID", error);
    throw error;
  }
};

export const actualizarMentor = async (idMentor, mentorData) => {
  try {
    const response = await api.put(`/mentor/${idMentor}`, mentorData);
    return response.data;
  } catch (error) {
    console.error("Error actualizando mentor", error);
    throw error;
  }
};

export const eliminarMentor = async (idMentor) => {
  try {
    await api.delete(`/mentor/${idMentor}`);
  } catch (error) {
    console.error("Error eliminando mentor", error);
    throw error;
  }
};
