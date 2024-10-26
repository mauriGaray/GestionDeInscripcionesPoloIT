# Etapa 1: Construcción del frontend
FROM node:14 AS build
WORKDIR /app
COPY Client/ ./Client
RUN cd Client && npm install && npm run build

# Etapa 2: Configuración del backend
FROM node:14
WORKDIR /app

# Copiar los archivos de backend
COPY Server/ ./Server
RUN cd Server && npm install

# Copiar archivos de build del frontend al backend
COPY --from=build /app/Client/build ./Server/dist

# Expone el puerto del servidor
EXPOSE 3000

# Iniciar el servidor
CMD ["node", "Server/index.js"]
