# Sistema de Gestión de Inscripciones y Asignación de Mentores

## Descripción

Este proyecto es un sistema para gestionar inscripciones y asignar automáticamente egresados a proyectos. La asignación se realiza de acuerdo con criterios como el tamaño de los equipos, los perfiles de los egresados y las tecnologías en las que se especializan. Además, permite gestionar la comunicación por correo electrónico entre los candidatos y mentores, y hacer seguimiento del progreso de la mentoría durante el programa.

## Características

- **Asignación Automática de Mentores:** Los mentores se emparejan automáticamente con los egresados utilizando reglas basadas en perfiles, tamaños de equipo y tecnologías.
- **Gestión de Comunicación por Email:** El sistema permite el envío de correos electrónicos entre los mentores y los egresados.
- **Seguimiento del Programa:** Posibilidad de hacer seguimiento del avance de la mentoría durante el programa.

## Tecnologías Utilizadas

### Backend
- ![Node.js](https://img.icons8.com/color/48/000000/nodejs.png) **Node.js** con ![Express](https://img.icons8.com/ios-filled/50/000000/express-js.png) **Express** para la creación de la API.
- ![MySQL](https://img.icons8.com/color/48/000000/mysql-logo.png) **MySQL** para la gestión de la base de datos.
- ![Cloudinary](https://img.icons8.com/ios-filled/52/000000/cloud.png) **Cloudinary** para el almacenamiento de archivos multimedia.

### Frontend
- ![React](https://img.icons8.com/color/48/000000/react-native.png) **React** para la interfaz de usuario.
- ![TailwindCSS](https://img.icons8.com/color/48/000000/tailwindcss.png) **TailwindCSS** para el diseño y la responsividad.

## Dependencias

### Producción
- `bcrypt`: Para el hashing de contraseñas.
- `bcryptjs`: Alternativa a bcrypt para compatibilidad.
- `cloudinary`: Manejo de almacenamiento de imágenes en la nube.
- `cors`: Para habilitar solicitudes de recursos entre dominios.
- `dotenv`: Manejo de variables de entorno.
- `express`: Framework de Node.js para la creación de la API.
- `jsonwebtoken`: Autenticación basada en tokens JWT.
- `method-override`: Para soportar métodos HTTP como PUT y DELETE en formularios.
- `multer`: Middleware para el manejo de archivos en formularios multipart.
- `multer-storage-cloudinary`: Almacenamiento de archivos usando Cloudinary.
- `mysql2`: Conexión y manejo de la base de datos MySQL.

### Desarrollo
- `@eslint/js`: Linter para JavaScript.
- `@types/react`: Definiciones de tipos para React en TypeScript.
- `@types/react-dom`: Definiciones de tipos para React DOM.
- `@vitejs/plugin-react`: Plugin de Vite para React.
- `autoprefixer`: Añade prefijos automáticos para compatibilidad con navegadores.
- `eslint`: Linter para mantener la calidad del código.
- `postcss`: Procesador de CSS.
- `tailwindcss`: Framework de CSS para estilos utilitarios.
- `vite`: Herramienta de desarrollo rápida para React y otros proyectos front-end.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un *pull request* para cualquier mejora o corrección.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).


