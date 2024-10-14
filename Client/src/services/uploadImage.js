import api from "./api";

export const uploadImage = async (imageData) => {
  try {
    const response = await api.post("/images/upload", imageData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error subiendo imagen", error);
    throw error;
  }
};
