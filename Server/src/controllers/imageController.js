const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("../config/coludinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "profile_pictures",
    format: async (req, file) => "jpg",
    public_id: (req, file) => "profile_" + Date.now(),
  },
});

const upload = multer({ storage: storage });

exports.uploadImage = (req, res) => {
  try {
    const imageUrl = req.file.path;
    res.status(200).json({
      message: "Imagen subida exitosamente",
      imageUrl: imageUrl,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al subir la imagen",
      error: error,
    });
  }
};

exports.uploadMiddleware = upload.single("image");
