# Etapa 1: Construcción del frontend
FROM node:16 AS build
WORKDIR /app

# Copiar la carpeta Client al contenedor
COPY Client/ ./Client

# Instalar dependencias y construir el frontend
RUN cd Client && npm install && npm run build

# Etapa 2: Configuración del backend
FROM node:16
WORKDIR /app

# Copiar los archivos de backend
COPY Server/ ./Server

# Instalar dependencias del backend
RUN cd Server && npm install

# Copiar archivos de build del frontend al backend
COPY --from=build /app/Client/dist ./Server/dist

# Expone el puerto del servidor
EXPOSE 3000

# Iniciar el servidor
CMD ["node", "Server/index.js"]
